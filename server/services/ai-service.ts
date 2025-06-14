import { generateText } from "ai";
import { createDeepSeek } from "@ai-sdk/deepseek";
import { createTogetherAI } from "@ai-sdk/togetherai";
import { createAnthropic } from "@ai-sdk/anthropic";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { createOpenAI } from "@ai-sdk/openai";
import { createOllama } from "ollama-ai-provider";
import type { Message, LanguageModelV1 } from "ai";

export const createOllamaModel = () => {
  const ollama = createOllama();
  return ollama("llama3.2");
};

export const createGoogleGenerativeAIModel = (apiKey: string) => {
  const googleGenerativeAI = createGoogleGenerativeAI({ apiKey });
  return googleGenerativeAI("gemini-1.5-flash");
};

export const createOpenAIModel = (apiKey: string) => {
  const openai = createOpenAI({
    apiKey,
  });
  return openai("gpt-4o-mini");
};

export const createDeepSeekModel = (apiKey: string) => {
  const deepseek = createDeepSeek({
    apiKey,
  });
  return deepseek("deepseek-chat");
};

export const createTogetherAIModel = (apiKey: string) => {
  const togetherAI = createTogetherAI({
    apiKey,
  });
  return togetherAI("llama-3.1-70b-chat");
};

export const createAnthropicModel = (apiKey: string) => {
  const anthropic = createAnthropic({
    apiKey,
  });
  return anthropic("claude-3-sonnet-20240229-v1:0");
};

export async function generateChatResponse(
  model: LanguageModelV1,
  messages: Message[]
) {
  if (!Array.isArray(messages) || messages.length === 0) {
    throw new Error("Invalid message format");
  }
  const response = await generateText({
    model,
    messages,
  });
  return response.text.trim();
}
