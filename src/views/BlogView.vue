<template>
  <main class="blog-page">
    <section class="page-hero">
      <div class="container">
        <h1>Our <span class="tyrian-text">Blog</span></h1>
        <p>Latest insights on software development and automation</p>
      </div>
    </section>

    <section class="blog-section">
      <div class="container">
        <div class="blog-categories mb-5">
          <router-link to="/blog" class="btn btn-sm">All</router-link>
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
            <span class="read-more">Read More <i class="fas fa-arrow-right"></i></span>
          </router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const categories = ref(['Development', 'Automation', 'AI', 'DevOps'])

const posts = ref([
  {
    slug: 'modernizing-legacy-code',
    title: 'Modernizing Legacy Code: A Practical Guide',
    excerpt: 'Learn how to transform outdated codebases into modern, maintainable software.',
    date: 'Jan 15, 2026',
  },
  {
    slug: 'automation-best-practices',
    title: 'Automation Best Practices for 2026',
    excerpt: 'Discover the latest automation strategies to streamline your workflows.',
    date: 'Jan 10, 2026',
  },
  {
    slug: 'ai-powered-development',
    title: 'AI-Powered Development: The Future is Here',
    excerpt: 'How AI is transforming the software development landscape.',
    date: 'Jan 5, 2026',
  },
])
</script>

<style scoped>
.page-hero {
  padding: 160px 0 80px;
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
