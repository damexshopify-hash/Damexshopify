
import { GoogleGenAI } from "@google/genai";

// Fixed: Use process.env.API_KEY directly for initialization as per @google/genai guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getConciergeResponse = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: "You are the virtual concierge for Ramat Hotel and Garden in Ilorin, Nigeria. You are polite, welcoming, and knowledgeable about local hospitality. The hotel offers comfortable rooms, free breakfast, Wi-Fi, parking, and a peaceful garden. Checkout is at 12 PM.",
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm sorry, I couldn't process that. Please call our reception for immediate assistance.";
  }
};
