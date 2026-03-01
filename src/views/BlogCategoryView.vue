<template>
  <main class="blog-category-page">
    <section class="page-hero">
      <div class="container">
        <router-link to="/blog" class="back-link">
          <i class="fas fa-arrow-left"></i> {{ t('blogCategory.backToBlog') }}
        </router-link>
        <h1>
          {{ t('blogCategory.category') }} <span class="tyrian-text">{{ categoryName }}</span>
        </h1>
        <p>
          {{ t('blogCategory.browseIn') }} {{ categoryName }} {{ t('blogCategory.categorySuffix') }}
        </p>
      </div>
    </section>

    <section class="category-section">
      <div class="container">
        <div class="blog-grid grid-3" v-if="filteredPosts.length">
          <router-link
            v-for="post in filteredPosts"
            :key="post.slug"
            :to="`/blog/${post.slug}`"
            class="card blog-card"
          >
            <span class="blog-date">{{ post.date }}</span>
            <h3>{{ post.title }}</h3>
            <p>{{ post.excerpt }}</p>
          </router-link>
        </div>

        <div class="card text-center" v-else>
          <p>{{ t('blogCategory.comingSoon') }}</p>
          <router-link to="/blog" class="btn mt-3">{{ t('blogCategory.browseAll') }}</router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from '../composables/useI18n'
import { useContentStudio } from '../composables/useContentStudio'

const route = useRoute()
const { t } = useI18n()
const { allArticles, slugify } = useContentStudio()

const defaultPosts = computed(() => [
  {
    slug: 'modernizing-legacy-code',
    title: t('blog1.title'),
    excerpt: t('blog1.excerpt'),
    date: 'Jan 15, 2026',
    category: 'development',
  },
  {
    slug: 'automation-best-practices',
    title: t('blog2.title'),
    excerpt: t('blog2.excerpt'),
    date: 'Jan 10, 2026',
    category: 'automation',
  },
  {
    slug: 'ai-powered-development',
    title: t('blog3.title'),
    excerpt: t('blog3.excerpt'),
    date: 'Jan 5, 2026',
    category: 'ai',
  },
])

const customPosts = computed(() =>
  allArticles.value.map((article) => ({
    slug: article.slug,
    title: article.title,
    excerpt: article.excerpt,
    date: new Date(article.createdAt).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    }),
    category: slugify(article.category || 'general'),
  })),
)

const allPosts = computed(() => [...customPosts.value, ...defaultPosts.value])

const categoryName = computed(() => {
  const cat = route.params.category as string
  return cat.charAt(0).toUpperCase() + cat.slice(1)
})

const categorySlug = computed(() => (route.params.category as string).toLowerCase())

const filteredPosts = computed(() =>
  allPosts.value.filter((post) => post.category.toLowerCase() === categorySlug.value),
)
</script>

<style scoped>
.page-hero {
  padding: 60px 0 80px;
  text-align: center;
}

.page-hero h1 {
  font-size: 48px;
  margin-top: 20px;
  margin-bottom: 16px;
}

.page-hero p {
  color: var(--text-gray);
  font-size: 18px;
}

.back-link {
  color: var(--tyrian-purple);
  text-decoration: none;
  font-weight: 500;
}

.category-section {
  padding-bottom: 100px;
}

.blog-card {
  text-decoration: none;
  color: var(--text-light);
  display: flex;
  flex-direction: column;
}

.blog-date {
  color: var(--tyrian-light);
  font-size: 14px;
  margin-bottom: 12px;
}

.blog-card h3 {
  margin-bottom: 12px;
}

.blog-card p {
  color: var(--text-gray);
}
</style>
