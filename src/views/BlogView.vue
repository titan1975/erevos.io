<template>
  <main class="blog-page">
    <section class="page-hero">
      <div class="container">
        <h1>
          {{ t('blog.title') }} <span class="tyrian-text">{{ t('blog.titleHighlight') }}</span>
        </h1>
        <p>{{ t('blog.subtitle') }}</p>
      </div>
    </section>

    <section class="blog-section">
      <div class="container">
        <div class="blog-categories mb-5">
          <router-link to="/blog" class="btn btn-sm">{{ t('blog.all') }}</router-link>
          <router-link
            v-for="cat in categories"
            :key="cat"
            :to="`/blog/category/${cat.toLowerCase()}`"
            class="btn btn-sm btn-outline"
          >
            {{ cat }}
          </router-link>
        </div>

        <div class="blog-grid grid-3">
          <router-link
            v-for="post in posts"
            :key="post.slug"
            :to="`/blog/${post.slug}`"
            class="card blog-card"
          >
            <span class="blog-date">{{ post.date }}</span>
            <h3>{{ post.title }}</h3>
            <p>{{ post.excerpt }}</p>
            <span class="read-more"
              >{{ t('blog.readMore') }} <i class="fas fa-arrow-right"></i
            ></span>
          </router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

const categories = computed(() => [
  t('blog.development'),
  t('blog.automation'),
  t('blog.ai'),
  t('blog.devops'),
])

const posts = computed(() => [
  {
    slug: 'modernizing-legacy-code',
    title: t('blog1.title'),
    excerpt: t('blog1.excerpt'),
    date: 'Jan 15, 2026',
  },
  {
    slug: 'automation-best-practices',
    title: t('blog2.title'),
    excerpt: t('blog2.excerpt'),
    date: 'Jan 10, 2026',
  },
  {
    slug: 'ai-powered-development',
    title: t('blog3.title'),
    excerpt: t('blog3.excerpt'),
    date: 'Jan 5, 2026',
  },
])
</script>

<style scoped>
.page-hero {
  padding: 60px 0 80px;
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

.blog-section {
  padding-bottom: 100px;
}

.blog-categories {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
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
  flex: 1;
  margin-bottom: 16px;
}

.read-more {
  color: var(--tyrian-purple);
  font-weight: 600;
}
</style>
