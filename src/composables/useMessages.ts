import { ref, computed } from 'vue'
import type { ContactMessage } from '../types'

const STORAGE_KEY = 'erevos_contact_messages'

function loadMessages(): ContactMessage[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function saveMessages(messages: ContactMessage[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(messages))
}

const messages = ref<ContactMessage[]>(loadMessages())

export function useMessages() {
  const allMessages = computed(() =>
    [...messages.value].sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    ),
  )

  const unreadCount = computed(() => messages.value.filter((m) => !m.read).length)

  function addMessage(data: {
    name: string
    email: string
    subject: string
    message: string
    service: string
  }): void {
    const newMessage: ContactMessage = {
      id: crypto.randomUUID(),
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
      service: data.service || 'Not specified',
      createdAt: new Date().toISOString(),
      read: false,
    }
    messages.value.push(newMessage)
    saveMessages(messages.value)
  }

  function markAsRead(id: string): void {
    const msg = messages.value.find((m) => m.id === id)
    if (msg) {
      msg.read = true
      saveMessages(messages.value)
    }
  }

  function markAllAsRead(): void {
    messages.value.forEach((m) => (m.read = true))
    saveMessages(messages.value)
  }

  function removeMessage(id: string): void {
    messages.value = messages.value.filter((m) => m.id !== id)
    saveMessages(messages.value)
  }

  function clearAllMessages(): void {
    messages.value = []
    saveMessages(messages.value)
  }

  return {
    allMessages,
    unreadCount,
    addMessage,
    markAsRead,
    markAllAsRead,
    removeMessage,
    clearAllMessages,
  }
}
