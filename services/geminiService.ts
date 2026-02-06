
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const analyzeRepairImage = async (base64Image: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: 'image/jpeg',
              data: base64Image,
            },
          },
          {
            text: `As a medical furniture upholstery expert for "Be There", analyze this image of a damaged piece of medical or office furniture. 
            Provide a JSON response with the following structure:
            {
              "damageType": "brief description of seen damage",
              "repairability": "High/Medium/Low",
              "estimatedService": "What service Be There should provide",
              "proAdvice": "Advice for the customer to prevent further damage"
            }
            Return ONLY the JSON string.`,
          },
        ],
      },
      config: {
        responseMimeType: "application/json",
      }
    });

    return JSON.parse(response.text || '{}');
  } catch (error) {
    console.error("Gemini Analysis Error:", error);
    return { error: "Could not analyze image. Please try again." };
  }
};

export const getMedAssistantResponse = async (query: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are the "Be There" AI assistant. "Be There" sells medical equipment and provides furniture upholstery repair services. 
      Answer the user's question professionally. If they ask for advice on medical equipment maintenance or repair status, be helpful.
      Question: ${query}`,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Chat Error:", error);
    return "I'm having trouble connecting right now. Please call us directly.";
  }
};
