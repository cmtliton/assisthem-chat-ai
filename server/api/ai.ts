import {
  createGeminiAIModel,
  generateChatResponse,
} from "../services/ai-service";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { messages } = body;

  const id = messages.length.toString();

  const geminiApiKey = useRuntimeConfig().geminiApiKey;
  const GeminiModel = createGeminiAIModel(geminiApiKey);
  // const openaiApiKey = useRuntimeConfig().openaiApiKey;
  // const openaiModel = createOpenAIModel(openaiApiKey);
  // const ollamaModel = createOllamaModel();
  // const deepseekModel = createDeepSeekAIModel(
  //   useRuntimeConfig().deepseekaiApiKey
  // );

  const response = await generateChatResponse(GeminiModel, messages);

  return {
    id,
    role: "assistant",
    content: response,
  };
});
