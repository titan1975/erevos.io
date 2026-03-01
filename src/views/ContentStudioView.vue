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
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useContentStudio } from '../composables/useContentStudio'

const { allArticles, allVideos, addArticle, removeArticle, addVideoLink, removeVideo } =
  useContentStudio()

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

@media (max-width: 768px) {
  .item-list li {
    flex-direction: column;
  }
}
</style>
