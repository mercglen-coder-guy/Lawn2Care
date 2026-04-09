'use server';

import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY });

export async function generateSmartEstimate(data: any) {
  try {
    const pricingContext = `INTERLOCK: $18-$28/sqft | PATIO: $22-$35/sqft | SOD: $1.50-$3/sqft | LIGHTING: $120-$250/fixture`;
    
    const prompt = `Calculate estimate for: ${JSON.stringify(data)}. 
    Use pricing: ${pricingContext}. 
    Return JSON: { "lowEstimate": number, "highEstimate": number, "complexity": "low"|"medium"|"high", "notes": "string", "recommendedNextStep": "string" }`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      }
    });

    const estimate = JSON.parse(response.text() || '{}');
    return { success: true, estimate };
  } catch (error) {
    console.error('Error generating estimate:', error);
    return { success: false, error: 'Failed to generate estimate' };
  }
}
