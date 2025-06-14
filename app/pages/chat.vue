<script lang="ts" setup>
const { chat, messages, sendMessage } = useChat();
const typing = ref(false);
const appConfig = useAppConfig();
const title = computed(() =>
  chat.value?.title ? `${chat.value.title}-${appConfig.title}` : appConfig.title
);
const handleSendMessage = async (message: string) => {
  typing.value = true;
  await sendMessage(message);
  typing.value = false;
};
useHead({
  title,
  meta: [
    { name: "description", content: "Chat with AI" },
    { property: "og:title", content: chat.value?.title || "Chat" },
    { property: "og:description", content: "Chat with AI" },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://picsum.photos/500/300?image=15" },
  ],
});
</script>

<template>
  <ChatWindow :typing :chat :messages @send-message="handleSendMessage" />
</template>
