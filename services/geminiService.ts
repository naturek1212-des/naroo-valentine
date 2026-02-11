import { GoogleGenAI } from "@google/genai";

const PROMPT = "A cute, shy male cat character holding a single red rose, asking for love, vector art style, soft pastel colors, minimalist, white background, high quality, adorable, big eyes looking up.";

export const generateCatImage = async (): Promise<string | null> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.error("API Key is missing");
      return null;
    }

    const ai = new GoogleGenAI({ apiKey });
    
    // Using gemini-2.5-flash-image for image generation as per guidelines for general image tasks
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: PROMPT,
          },
        ],
      },
      config: {
        // No responseMimeType for image generation models
        // Aspect ratio 1:1 is default, but explicit is good
      },
    });

    if (response.candidates && response.candidates.length > 0) {
      const parts = response.candidates[0].content.parts;
      for (const part of parts) {
        if (part.inlineData && part.inlineData.data) {
          return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
        }
      }
    }
    
    return null;
  } catch (error) {
    console.error("Failed to generate image:", error);
    return null;
  }
};