<template>
  <main class="athena-page">
    <section class="page-hero">
      <div class="container">
        <h1>Chat with <span class="tyrian-text">Athena</span> 🦉</h1>
        <p>Get AI-powered help with code, automation, and technical challenges</p>
      </div>
    </section>

    <section class="athena-section">
      <div class="container">
        <div class="card athena-full-chat">
          <div class="messages-container" ref="messagesContainer">
            <div v-for="(msg, index) in messages" :key="index" :class="['message', msg.role]">
              <div class="avatar">{{ msg.role === 'user' ? '👤' : '🦉' }}</div>
              <div class="message-content">
                <div class="sender">{{ msg.role === 'user' ? 'You' : 'Athena' }}</div>
                <div class="text">{{ msg.content }}</div>
              </div>
            </div>

            <div v-if="isThinking" class="message assistant">
              <div class="avatar">🦉</div>
              <div class="message-content">
                <div class="sender">Athena is thinking...</div>
              </div>
            </div>
          </div>

          <div class="input-area">
            <textarea
              v-model="userInput"
              @keydown.enter.prevent="handleSend"
              placeholder="Ask Athena anything..."
              rows="2"
            ></textarea>
            <button @click="handleSend" :disabled="!userInput.trim() || isThinking" class="btn">
              <i class="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAthena } from '../composables/useAthena'

const { messages, isThinking, sendMessage } = useAthena()
const userInput = ref('')

const handleSend = async () => {
  if (!userInput.value.trim()) return
  const input = userInput.value
  userInput.value = ''
  await sendMessage(input)
}
</script>

<style scoped>
.page-hero {
  padding: 60px 0 40px;
  text-align: center;
}

.page-hero h1 {
  font-size: 48px;
  margin-bottom: 16px;
}

.page-hero p {
  color: var(--text-gray);
  font-size: 18px;
}

.athena-section {
  padding-bottom: 100px;
}

.athena-full-chat {
  max-width: 800px;
  margin: 0 auto;
}

.messages-container {
  max-height: 500px;
  overflow-y: auto;
  padding: 20px 0;
}

.message {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
}

.avatar {
  font-size: 24px;
  flex-shrink: 0;
}

.sender {
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 4px;
  color: var(--tyrian-light);
}

.text {
  color: var(--text-gray);
  line-height: 1.6;
}

.input-area {
  display: flex;
  gap: 12px;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid var(--black-lighter);
}

.input-area textarea {
  flex: 1;
  padding: 12px 16px;
  background: var(--black-darker);
  border: 1px solid var(--black-lighter);
  border-radius: 8px;
  color: var(--text-light);
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  resize: none;
}

.input-area textarea:focus {
  outline: none;
  border-color: var(--tyrian-purple);
}
</style>
