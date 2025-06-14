import {
  createGoogleGenerativeAIModel,
  generateChatResponse,
} from "../services/ai-service";

/** createGoogleGenerativeAIModel, createDeepSeekModel, createTogetherAIModel, createAnthropicModel  NUXT_GEMINI_API_KEY = "AIzaSyCnwbG7rCQtgNOLULpakw70nDC270_9Obg" */

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { messages } = body;

  const id = messages.length.toString();
  //const openaiApiKey = useRuntimeConfig().openaiApiKey;
  //const anthropicApiKey = useRuntimeConfig().anthropicApiKey;
  //const togetherApiKey = useRuntimeConfig().togetherApiKey;
  //const deepseekApiKey = useRuntimeConfig().deepseekApiKey;
  const geminiApiKey = useRuntimeConfig().geminiApiKey;

  const GeminiModel = createGoogleGenerativeAIModel(geminiApiKey);
  //const DeepseekModel = createDeepSeekModel(deepseekApiKey);

  // const anthropicModel = createAnthropicModel(
  //   useRuntimeConfig().anthropicApiKey
  // );
  // const togetherModel = createTogetherAIModel(
  //   useRuntimeConfig().togetherApiKey
  // );

  const response = await generateChatResponse(GeminiModel, messages);
  return {
    id,
    role: "assistant",
    content: response,
  };
});
