import { generateText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";
import { createOllama } from "ollama-ai-provider";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import type { Message, LanguageModelV1 } from "ai";

export const createOllamaModel = () => {
  const ollama = createOllama();
  return ollama("llama3.2");
};

export const createGeminiAIModel = (apiKey: string) => {
  const google = createGoogleGenerativeAI({
    apiKey,
  });
  return google("gemini-2.0-flash-exp");
};

export const createOpenAIModel = (apiKey: string) => {
  const openai = createOpenAI({
    apiKey,
  });
  return openai("gpt-4o-mini");
};
export const createDeepSeekAIModel = (apiKey: string) => {
  const deepSeekAI = createOpenAI({
    apiKey,
  });
  return deepSeekAI("deepseek-chat");
};

export async function generateChatResponse(
  model: LanguageModelV1,
  messages: Message[]
) {
  if (!Array.isArray(messages) || messages.length === 0) {
    throw new Error("Invalid messages format");
  }

  const response = await generateText({
    model,
    messages,
  });

  return response.text.trim();
}
