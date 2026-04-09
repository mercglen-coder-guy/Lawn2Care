import { GoogleGenAI } from '@google/genai';
import { NextRequest, NextResponse } from 'next/server';

const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY });

export async function POST(req: NextRequest) {
  try {
    const { imageBase64, style } = await req.json();

    if (!imageBase64) {
      return NextResponse.json({ error: 'Image is required' }, { status: 400 });
    }

    const prompt = `Analyze this residential yard in Mississauga, ON. 
    Identify: slope, sun exposure, existing hardscape, drainage points, vegetation.
    Recommend 3 design concepts for "${style || 'Modern'}" style. 
    Return JSON: { "concepts": [{ "name": "string", "description": "string", "materials": ["string"], "estimatedSqFt": "string", "keyFeatures": ["string"] }] }
    Strictly JSON only.`;

    // Strip the data:image/jpeg;base64, part if present
    const base64Data = imageBase64.replace(/^data:image\/\w+;base64,/, '');

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        {
          role: 'user',
          parts: [
            { text: prompt },
            { inlineData: { mimeType: 'image/jpeg', data: base64Data } }
          ]
        }
      ],
      config: {
        responseMimeType: 'application/json',
      }
    });

    const json = JSON.parse(response.text() || '{}');
    return NextResponse.json(json);
  } catch (error) {
    console.error('Error in visualizer:', error);
    return NextResponse.json({ error: 'Failed to process image' }, { status: 500 });
  }
}
