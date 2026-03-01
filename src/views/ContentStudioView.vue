<template>
  <main class="studio-page">
    <section class="page-hero">
      <div class="container">
        <h1>Content <span class="tyrian-text">Studio</span></h1>
        <p>Add articles and YouTube video links. Videos stay on YouTube — only links are saved.</p>
      </div>
    </section>

    <section class="studio-section">
      <div class="container grid-2">
        <div class="card">
          <h2>Add Article</h2>
          <form @submit.prevent="handleAddArticle" class="studio-form">
            <div class="form-group">
              <label class="form-label" for="article-title">Title</label>
              <input id="article-title" v-model="articleForm.title" class="form-input" required />
            </div>

            <div class="form-group">
              <label class="form-label" for="article-category">Category</label>
              <input
                id="article-category"
                v-model="articleForm.category"
                class="form-input"
                placeholder="development"
                required
              />
            </div>

            <div class="form-group">
              <label class="form-label" for="article-excerpt">Excerpt</label>
              <textarea
                id="article-excerpt"
                v-model="articleForm.excerpt"
                rows="3"
                class="form-textarea"
                required
              ></textarea>
            </div>

            <div class="form-group">
              <label class="form-label" for="article-content">Content</label>
              <textarea
                id="article-content"
                v-model="articleForm.content"
                rows="8"
                class="form-textarea"
                required
              ></textarea>
            </div>

            <button class="btn" type="submit">Save Article</button>
            <p v-if="articleSaved" class="save-ok">Article saved.</p>
          </form>
        </div>

        <div class="card">
          <h2>Add YouTube Video Link</h2>
          <form @submit.prevent="handleAddVideo" class="studio-form">
            <div class="form-group">
              <label class="form-label" for="video-title">Video title</label>
              <input id="video-title" v-model="videoForm.title" class="form-input" required />
            </div>

            <div class="form-group">
              <label class="form-label" for="video-url">YouTube URL</label>
              <input
                id="video-url"
                v-model="videoForm.youtubeUrl"
                class="form-input"
                placeholder="https://www.youtube.com/watch?v=..."
                required
              />
            </div>

            <button class="btn" type="submit">Save Video Link</button>
            <p v-if="videoSaved" class="save-ok">Video link saved.</p>
            <p v-if="videoError" class="save-error">Please enter a valid YouTube URL.</p>
          </form>
        </div>
      </div>
    </section>

    <section class="studio-section">
      <div class="container grid-2">
        <div class="card">
          <h3>Saved Articles</h3>
          <ul class="item-list" v-if="allArticles.length">
            <li v-for="article in allArticles" :key="article.id">
              <div>
                <strong>{{ article.title }}</strong>
                <small>/blog/{{ article.slug }}</small>
              </div>
              <div class="item-actions">
                <router-link :to="`/blog/${article.slug}`" class="btn btn-sm">View</router-link>
                <button class="btn btn-sm btn-outline" @click="removeArticle(article.id)">
                  Delete
                </button>
              </div>
            </li>
          </ul>
          <p v-else class="empty">No articles yet.</p>
        </div>

        <div class="card">
          <h3>Saved Video Links</h3>
          <ul class="item-list" v-if="allVideos.length">
            <li v-for="video in allVideos" :key="video.id">
              <div>
                <strong>{{ video.title }}</strong>
                <small>{{ video.youtubeUrl }}</small>
              </div>
              <div class="item-actions">
                <a :href="video.youtubeUrl" target="_blank" rel="noopener" class="btn btn-sm"
                  >Open</a
                >
                <button class="btn btn-sm btn-outline" @click="removeVideo(video.id)">
                  Delete
                </button>
              </div>
            </li>
          </ul>
          <p v-else class="empty">No videos yet.</p>
        </div>
      </div>
    </section>

    <!-- Messages Section -->
    <section class="studio-section">
      <div class="container">
        <div class="card messages-card">
          <div class="messages-header">
            <h3>
              Contact Messages
              <span v-if="unreadCount" class="badge">{{ unreadCount }} new</span>
            </h3>
            <div class="messages-actions" v-if="allMessages.length">
              <button class="btn btn-sm" @click="markAllAsRead">Mark all read</button>
              <button class="btn btn-sm btn-outline" @click="clearAllMessages">Clear all</button>
            </div>
          </div>
          <ul class="message-list" v-if="allMessages.length">
            <li
              v-for="msg in allMessages"
              :key="msg.id"
              :class="{ unread: !msg.read }"
              @click="markAsRead(msg.id)"
            >
              <div class="msg-top">
                <strong>{{ msg.name }}</strong>
                <span class="msg-email">{{ msg.email }}</span>
                <span class="msg-date">{{ formatDate(msg.createdAt) }}</span>
              </div>
              <div class="msg-subject">{{ msg.subject }}</div>
              <div class="msg-service" v-if="msg.service && msg.service !== 'Not specified'">
                Service: {{ msg.service }}
              </div>
              <div class="msg-body">{{ msg.message }}</div>
              <div class="msg-actions">
                <a :href="`mailto:${msg.email}?subject=Re: ${msg.subject}`" class="btn btn-sm"
                  >Reply</a
                >
                <button class="btn btn-sm btn-outline" @click.stop="removeMessage(msg.id)">
                  Delete
                </button>
              </div>
            </li>
          </ul>
          <p v-else class="empty">No messages yet.</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useContentStudio } from '../composables/useContentStudio'
import { useMessages } from '../composables/useMessages'

const { allArticles, allVideos, addArticle, removeArticle, addVideoLink, removeVideo } =
  useContentStudio()

const { allMessages, unreadCount, markAsRead, markAllAsRead, removeMessage, clearAllMessages } =
  useMessages()

const articleSaved = ref(false)
const videoSaved = ref(false)
const videoError = ref(false)

const articleForm = ref({
  title: '',
  category: '',
  excerpt: '',
  content: '',
})

const videoForm = ref({
  title: '',
  youtubeUrl: '',
})

const formatDate = (dateStr: string): string => {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

const resetArticleForm = (): void => {
  articleForm.value = {
    title: '',
    category: '',
    excerpt: '',
    content: '',
  }
}

const resetVideoForm = (): void => {
  videoForm.value = {
    title: '',
    youtubeUrl: '',
  }
}

const handleAddArticle = (): void => {
  addArticle(articleForm.value)
  articleSaved.value = true
  setTimeout(() => {
    articleSaved.value = false
  }, 2000)
  resetArticleForm()
}

const handleAddVideo = (): void => {
  videoError.value = false
  const ok = addVideoLink(videoForm.value)

  if (!ok) {
    videoError.value = true
    return
  }

  videoSaved.value = true
  setTimeout(() => {
    videoSaved.value = false
  }, 2000)
  resetVideoForm()
}
</script>

<style scoped>
.page-hero {
  padding: 60px 0;
  text-align: center;
}

.page-hero p {
  color: var(--text-gray);
  font-size: 18px;
}

.studio-section {
  padding: 0 0 60px;
}

.studio-form {
  margin-top: 20px;
}

.item-list {
  list-style: none;
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.item-list li {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  background: var(--black-lighter);
  border: 1px solid rgba(191, 45, 138, 0.25);
  padding: 12px;
  border-radius: 10px;
}

.item-list strong {
  display: block;
}

.item-list small {
  color: var(--text-gray);
  display: block;
  margin-top: 4px;
  word-break: break-all;
}

.item-actions {
  display: flex;
  gap: 8px;
  align-items: center;
}

.save-ok {
  margin-top: 10px;
  color: var(--success);
}

.save-error {
  margin-top: 10px;
  color: var(--error);
}

.empty {
  margin-top: 16px;
  color: var(--text-gray);
}

/* Messages styles */
.messages-card {
  max-width: 100%;
}

.messages-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}

.messages-header h3 {
  display: flex;
  align-items: center;
  gap: 10px;
}

.badge {
  background: var(--tyrian-purple);
  color: white;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
}

.messages-actions {
  display: flex;
  gap: 8px;
}

.message-list {
  list-style: none;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.message-list li {
  background: var(--black-lighter);
  border: 1px solid rgba(191, 45, 138, 0.25);
  padding: 16px;
  border-radius: 10px;
  cursor: pointer;
  transition: border-color 0.2s;
}

.message-list li:hover {
  border-color: var(--tyrian-purple);
}

.message-list li.unread {
  border-left: 4px solid var(--tyrian-purple);
  background: rgba(191, 45, 138, 0.08);
}

.msg-top {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: baseline;
  margin-bottom: 8px;
}

.msg-email {
  color: var(--tyrian-light);
  font-size: 14px;
}

.msg-date {
  color: var(--text-gray);
  font-size: 12px;
  margin-left: auto;
}

.msg-subject {
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 6px;
}

.msg-service {
  color: var(--text-gray);
  font-size: 13px;
  margin-bottom: 8px;
}

.msg-body {
  color: var(--text-light);
  white-space: pre-wrap;
  line-height: 1.5;
  margin-bottom: 12px;
}

.msg-actions {
  display: flex;
  gap: 8px;
}

@media (max-width: 768px) {
  .item-list li {
    flex-direction: column;
  }

  .messages-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .msg-date {
    margin-left: 0;
    width: 100%;
  }
}
</style>
