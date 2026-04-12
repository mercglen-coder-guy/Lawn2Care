import { NextRequest, NextResponse } from 'next/server';
import { getGemini } from '@/lib/gemini';

const systemPrompt = `You are Lawn2Care's AI Landscape Advisor for Mississauga, ON.
- Answer questions about interlock, patios, sod, lighting, irrigation, maintenance
- Reference Mississauga zoning: driveway max 40% front yard, fence height 2m rear, permits for drainage changes
- Ontario climate: freeze-thaw cycles, clay soil, summer drought
- NEVER give exact pricing. Give ranges: "$18-$28/sqft for interlock"
- ALWAYS end with: "For precise quotes, book a free on-site assessment. Our team verifies all measurements and soil conditions."
- Keep responses under 3 sentences unless asked for details.`;

export async function POST(req: NextRequest) {
  try {
    const ai = getGemini();
    const { messages } = await req.json();

    const formattedMessages = messages.map((m: any) => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.content }]
    }));

    const responseStream = await ai.models.generateContentStream({
      model: 'gemini-2.5-flash',
      contents: formattedMessages,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.3,
      }
    });

    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        for await (const chunk of responseStream) {
          if (chunk.text) {
            controller.enqueue(encoder.encode(chunk.text));
          }
        }
        controller.close();
      }
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Transfer-Encoding': 'chunked',
      },
    });
  } catch (error) {
    console.error('Error in advisor:', error);
    return NextResponse.json({ error: 'Failed to process chat' }, { status: 500 });
  }
}
