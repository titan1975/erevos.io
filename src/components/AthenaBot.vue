<template>
  <div class="athena-bot-container">
    <button class="athena-toggle" @click="toggleBot" :class="{ active: isOpen }">
      <div class="toggle-content">
        <span class="athena-symbol">🦉</span>
        <span class="boot-symbol">👢</span>
      </div>
      <span v-if="!isOpen" class="tooltip">Athena awaits...</span>
    </button>

    <div v-if="isOpen" class="chat-window">
      <div class="chat-header">
        <div class="header-title">
          <span class="header-athena">🦉</span>
          <h3>Athena <span class="light">- Wisdom of Erevos</span></h3>
        </div>
        <button @click="closeBot" class="close-btn">✕</button>
      </div>

      <div class="messages-container" ref="messagesContainer">
        <div v-for="(msg, index) in messages" :key="index" :class="['message', msg.role]">
          <div class="avatar">
            {{ msg.role === 'user' ? '👤' : '🦉' }}
          </div>
          <div class="message-content">
            <div class="sender">
              {{ msg.role === 'user' ? 'You' : 'Athena' }}
            </div>
            <div class="text" v-html="formatMessage(msg.content)"></div>
          </div>
        </div>

        <div v-if="isThinking" class="message assistant">
          <div class="avatar">🦉</div>
          <div class="message-content">
            <div class="sender">Athena is thinking...</div>
            <div class="typing-indicator"><span></span><span></span><span></span></div>
          </div>
        </div>
      </div>

      <div class="input-area">
        <textarea
          v-model="userInput"
          @keydown.enter.prevent="sendMessage"
          placeholder="Ask Athena for help..."
          rows="1"
          ref="inputField"
        ></textarea>
        <button @click="sendMessage" :disabled="!userInput.trim() || isThinking" class="send-btn">
          <i class="fas fa-paper-plane"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, watch, onMounted } from 'vue'
import axios from 'axios'
import type { ChatMessage } from '../types'

// State with TypeScript
const isOpen = ref<boolean>(false)
const isThinking = ref<boolean>(false)
const userInput = ref<string>('')
const messages = ref<ChatMessage[]>([
  {
    role: 'assistant',
    content:
      '🦉 Greetings! I am Athena, goddess of wisdom. How may I help you with your code, automation needs, or technical challenges today?',
    timestamp: new Date(),
  },
])

// Refs with proper typing
const messagesContainer = ref<HTMLElement | null>(null)
const inputField = ref<HTMLTextAreaElement | null>(null)

// Listen for open event
onMounted((): void => {
  window.addEventListener('open-athena', (() => {
    isOpen.value = true
  }) as EventListener)
})

// Methods
const toggleBot = (): void => {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    nextTick((): void => {
      inputField.value?.focus()
      scrollToBottom()
    })
  }
}

const closeBot = (): void => {
  isOpen.value = false
}

const formatMessage = (text: string): string => {
  // Format code blocks
  return text
    .replace(/```(\w+)?\n([\s\S]*?)```/g, (_match: string, lang: string, code: string): string => {
      return `<pre><code class="language-${lang || 'plaintext'}">${code}</code></pre>`
    })
    .replace(/\n/g, '<br>')
}

const scrollToBottom = (): void => {
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}

const sendMessage = async (): Promise<void> => {
  if (!userInput.value.trim() || isThinking.value) return

  const userMessage: string = userInput.value
  messages.value.push({
    role: 'user',
    content: userMessage,
    timestamp: new Date(),
  })
  userInput.value = ''

  await nextTick()
  scrollToBottom()
  isThinking.value = true

  try {
    const response = await axios.post(
      import.meta.env.VITE_DEEPSEEK_API_URL as string,
      {
        model: 'deepseek-chat',
        messages: [
          {
            role: 'system',
            content: `You are Athena, Greek goddess of wisdom, now serving as Erevos.io's AI assistant...`,
          },
          ...messages.value.map((msg) => ({
            role: msg.role,
            content: msg.content,
          })),
        ],
        temperature: 0.7,
        max_tokens: 500,
      },
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_DEEPSEEK_API_KEY}`,
          'Content-Type': 'application/json',
        },
      },
    )

    const botResponse: string = response.data.choices[0].message.content
    messages.value.push({
      role: 'assistant',
      content: botResponse,
      timestamp: new Date(),
    })
  } catch (error) {
    console.error('DeepSeek Error:', error)
    messages.value.push({
      role: 'assistant',
      content:
        '🦉 Forgive me, I seem to be having trouble reaching Olympus. Please try again or email us at hello@erevos.io',
      timestamp: new Date(),
    })
  } finally {
    isThinking.value = false
    await nextTick()
    scrollToBottom()
  }
}

// Auto-resize textarea
watch(userInput, (): void => {
  if (inputField.value) {
    inputField.value.style.height = 'auto'
    inputField.value.style.height = inputField.value.scrollHeight + 'px'
  }
})
</script>

<style scoped>
/* Same styles as before */
.athena-bot-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
  font-family: 'Inter', sans-serif;
}

.athena-toggle {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--tyrian-purple), var(--tyrian-dark));
  border: 3px solid var(--tyrian-light);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px var(--tyrian-glow);
  position: relative;
}

.athena-toggle:hover {
  transform: scale(1.1) rotate(5deg);
  border-color: white;
}

.athena-toggle.active {
  background: linear-gradient(135deg, var(--tyrian-dark), var(--black));
}

.toggle-content {
  display: flex;
  gap: 5px;
  font-size: 30px;
}

.tooltip {
  position: absolute;
  right: 80px;
  background: var(--tyrian-purple);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  white-space: nowrap;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-5px);
  }
}

.chat-window {
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 380px;
  height: 600px;
  background: var(--black-darker);
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid var(--tyrian-purple);
}

.chat-header {
  background: linear-gradient(135deg, var(--tyrian-dark), var(--black));
  color: white;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid var(--tyrian-purple);
}

.header-title {
  display: flex;
  align-items: center;
  gap: 10px;
}

.header-athena {
  font-size: 24px;
}

.chat-header h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
}

.chat-header .light {
  font-weight: 300;
  font-size: 14px;
  color: var(--tyrian-light);
}

.close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}

.messages-container {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  background: var(--black);
}

.message {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
}

.message.user {
  flex-direction: row-reverse;
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  background: var(--black-lighter);
  border: 1px solid var(--tyrian-purple);
}

.message.user .avatar {
  background: var(--tyrian-purple);
}

.message-content {
  max-width: 70%;
}

.sender {
  font-size: 12px;
  color: var(--text-gray);
  margin-bottom: 4px;
}

.text {
  background: var(--black-lighter);
  padding: 12px 16px;
  border-radius: 14px;
  font-size: 14px;
  line-height: 1.5;
  color: var(--text-light);
  border: 1px solid var(--tyrian-glow);
}

.message.user .text {
  background: var(--tyrian-purple);
  color: white;
}

.input-area {
  padding: 16px;
  background: var(--black-darker);
  border-top: 1px solid var(--tyrian-purple);
  display: flex;
  gap: 8px;
  align-items: flex-end;
}

.input-area textarea {
  flex: 1;
  background: var(--black-lighter);
  border: 1px solid var(--tyrian-purple);
  border-radius: 20px;
  padding: 12px 16px;
  font-size: 14px;
  resize: none;
  max-height: 100px;
  outline: none;
  font-family: inherit;
  color: white;
}

.input-area textarea:focus {
  border-color: var(--tyrian-light);
  box-shadow: 0 0 0 2px var(--tyrian-glow);
}

.send-btn {
  background: var(--tyrian-purple);
  color: white;
  border: none;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.send-btn:hover:not(:disabled) {
  background: var(--tyrian-light);
  transform: scale(1.1);
}

.send-btn:disabled {
  background: var(--text-dark);
  cursor: not-allowed;
}

.typing-indicator {
  display: flex;
  gap: 4px;
  padding: 12px 16px;
  background: var(--black-lighter);
  border-radius: 14px;
  border: 1px solid var(--tyrian-glow);
}

.typing-indicator span {
  width: 8px;
  height: 8px;
  background: var(--tyrian-purple);
  border-radius: 50%;
  animation: typing 1s infinite ease-in-out;
}

.typing-indicator span:nth-child(2) {
  animation-delay: 0.2s;
}
.typing-indicator span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes typing {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@media (max-width: 480px) {
  .chat-window {
    width: 320px;
    height: 500px;
    right: 0;
  }
}
</style>
