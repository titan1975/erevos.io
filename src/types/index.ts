// ---- Chat Types ----
export interface ChatMessage {
  role: 'user' | 'assistant' | 'system'
  content: string
  timestamp: Date
}

export interface DeepSeekResponse {
  id: string
  object: string
  created: number
  model: string
  choices: {
    index: number
    message: {
      role: string
      content: string
    }
    finish_reason: string
  }[]
  usage: {
    prompt_tokens: number
    completion_tokens: number
    total_tokens: number
  }
}

export interface DeepSeekError {
  error: {
    message: string
    type: string
    code: string
  }
}

// ---- Contact Form Types ----
export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
  service: string
  codeSnippet: string
}

export interface ContactFormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

// ---- Navigation Types ----
export interface NavItem {
  path: string
  name: string
}

// ---- Service Types ----
export interface Service {
  id: number
  icon: string
  title: string
  description: string
  features?: string[]
}

// ---- Content Studio Types ----
export interface Article {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  createdAt: string
}

export interface VideoLink {
  id: string
  title: string
  youtubeUrl: string
  youtubeId: string
  createdAt: string
}

// ---- Contact Messages Types ----
export interface ContactMessage {
  id: string
  name: string
  email: string
  subject: string
  message: string
  service: string
  createdAt: string
  read: boolean
}
