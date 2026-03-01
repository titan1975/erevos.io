import { ref, computed } from 'vue'
import axios from 'axios'
import type { ChatMessage, DeepSeekResponse } from '../types'

export function useAthena() {
  const messages = ref<ChatMessage[]>([
    {
      role: 'assistant',
      content:
        '🦉 Greetings! I am Athena, goddess of wisdom. How may I help you with your code, automation needs, or technical challenges today?',
      timestamp: new Date(),
    },
  ])

  const isThinking = ref<boolean>(false)
  const error = ref<string | null>(null)
  const conversationId = ref<string | undefined>()

  const lastMessage = computed(() => messages.value[messages.value.length - 1])

  const sendMessage = async (content: string): Promise<void> => {
    if (!content.trim() || isThinking.value) return

    // Add user message
    const userMessage: ChatMessage = {
      role: 'user',
      content,
      timestamp: new Date(),
    }
    messages.value.push(userMessage)

    isThinking.value = true
    error.value = null

    try {
      const apiUrl =
        import.meta.env.VITE_DEEPSEEK_API_URL || 'https://api.deepseek.com/v1/chat/completions'
      const apiKey = import.meta.env.VITE_DEEPSEEK_API_KEY || 'sk-f681de64cc6944b0af4a5ad0debed556'

      const response = await axios.post<DeepSeekResponse>(
        apiUrl,
        {
          model: 'deepseek-chat',
          messages: [
            {
              role: 'system',
              content: `You are Athena, Greek goddess of wisdom, now serving as Erevos.io's AI assistant. 
              
              Core directives:
              - Help with fixing broken/old code
              - Assist with process automation
              - Solve technical problems
              - Be wise, confident, and occasionally mythological
              - Use 🦉 emoji appropriately
              - Format code blocks with proper syntax
              - Keep responses concise but thorough
              
              Personality: Wise, approachable, slightly divine, but practical.`,
            },
            ...messages.value.map((msg) => ({
              role: msg.role,
              content: msg.content,
            })),
          ],
          temperature: 0.7,
          max_tokens: 500,
          stream: false,
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
        },
      )

      const botResponse: ChatMessage = {
        role: 'assistant',
        content: response.data.choices[0].message.content,
        timestamp: new Date(),
      }

      messages.value.push(botResponse)
      conversationId.value = response.data.id
    } catch (err: any) {
      console.error('DeepSeek API Error:', err)
      error.value =
        err.response?.data?.error?.message || 'Failed to reach Athena. Please try again.'

      messages.value.push({
        role: 'assistant',
        content:
          '🦉 Forgive me, I seem to be having trouble reaching Olympus. Please try again or email us at info@erevos.io',
        timestamp: new Date(),
      })
    } finally {
      isThinking.value = false
    }
  }

  const clearConversation = (): void => {
    messages.value = [
      {
        role: 'assistant',
        content: '🦉 Greetings! I am Athena, goddess of wisdom. How may I help you?',
        timestamp: new Date(),
      },
    ]
    conversationId.value = undefined
    error.value = null
  }

  const formatCodeBlocks = (text: string): string => {
    return text.replace(/```(\w+)?\n([\s\S]*?)```/g, (_match, language, code) => {
      return `<pre><code class="language-${language || 'plaintext'}">${code}</code></pre>`
    })
  }

  return {
    messages,
    isThinking,
    error,
    conversationId,
    lastMessage,
    sendMessage,
    clearConversation,
    formatCodeBlocks,
  }
}
