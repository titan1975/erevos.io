import { computed, ref } from 'vue'
import type { Article, VideoLink } from '../types'

const ARTICLES_KEY = 'erevos_articles'
const VIDEOS_KEY = 'erevos_videos'

const articles = ref<Article[]>([])
const videos = ref<VideoLink[]>([])
let initialized = false

const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

const extractYoutubeId = (url: string): string => {
  const trimmed = url.trim()
  const regex = /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/
  const match = trimmed.match(regex)
  return match?.[1] ?? ''
}

const load = (): void => {
  if (initialized || typeof window === 'undefined') {
    return
  }

  try {
    const storedArticles = localStorage.getItem(ARTICLES_KEY)
    const storedVideos = localStorage.getItem(VIDEOS_KEY)

    articles.value = storedArticles ? (JSON.parse(storedArticles) as Article[]) : []
    videos.value = storedVideos ? (JSON.parse(storedVideos) as VideoLink[]) : []
  } catch {
    articles.value = []
    videos.value = []
  }

  initialized = true
}

const persist = (): void => {
  if (typeof window === 'undefined') {
    return
  }

  localStorage.setItem(ARTICLES_KEY, JSON.stringify(articles.value))
  localStorage.setItem(VIDEOS_KEY, JSON.stringify(videos.value))
}

export function useContentStudio() {
  load()

  const allArticles = computed(() =>
    [...articles.value].sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt)),
  )

  const allVideos = computed(() =>
    [...videos.value].sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt)),
  )

  const addArticle = (payload: Omit<Article, 'id' | 'slug' | 'createdAt'>): string => {
    const baseSlug = slugify(payload.title)
    const duplicateCount = articles.value.filter((a) => a.slug.startsWith(baseSlug)).length
    const slug = duplicateCount > 0 ? `${baseSlug}-${duplicateCount + 1}` : baseSlug

    const newArticle: Article = {
      id: crypto.randomUUID(),
      slug,
      title: payload.title.trim(),
      excerpt: payload.excerpt.trim(),
      content: payload.content.trim(),
      category: payload.category.trim() || 'general',
      createdAt: new Date().toISOString(),
    }

    articles.value.unshift(newArticle)
    persist()

    return slug
  }

  const removeArticle = (id: string): void => {
    articles.value = articles.value.filter((a) => a.id !== id)
    persist()
  }

  const addVideoLink = (payload: { title: string; youtubeUrl: string }): boolean => {
    const youtubeId = extractYoutubeId(payload.youtubeUrl)
    if (!youtubeId) {
      return false
    }

    const newVideo: VideoLink = {
      id: crypto.randomUUID(),
      title: payload.title.trim(),
      youtubeUrl: payload.youtubeUrl.trim(),
      youtubeId,
      createdAt: new Date().toISOString(),
    }

    videos.value.unshift(newVideo)
    persist()

    return true
  }

  const removeVideo = (id: string): void => {
    videos.value = videos.value.filter((v) => v.id !== id)
    persist()
  }

  const getArticleBySlug = (slug: string): Article | undefined => {
    return articles.value.find((article) => article.slug === slug)
  }

  return {
    allArticles,
    allVideos,
    addArticle,
    removeArticle,
    addVideoLink,
    removeVideo,
    getArticleBySlug,
    slugify,
  }
}
