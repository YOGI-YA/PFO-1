import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});

export default async function geminiCall({prompt}:{prompt:string}){
    const interaction = await ai.interactions.create({
  model: "gemini-3.8-flash",
  input: prompt,
});
return interaction.output_text || "Text generation failed"

console.log(interaction.output_text);
}