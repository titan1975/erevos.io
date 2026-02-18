<template>
  <main class="blog-post-page">
    <section class="page-hero">
      <div class="container">
        <router-link to="/blog" class="back-link">
          <i class="fas fa-arrow-left"></i> Back to Blog
        </router-link>
        <h1>{{ postTitle }}</h1>
      </div>
    </section>

    <section class="post-section">
      <div class="container">
        <article class="card post-content">
          <p>
            This blog post is coming soon. Stay tuned for detailed content about {{ postTitle }}.
          </p>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const postTitle = computed(() => {
  const slug = route.params.slug as string
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
})
</script>

<style scoped>
.page-hero {
  padding: 160px 0 60px;
  text-align: center;
}

.page-hero h1 {
  font-size: 42px;
  margin-top: 20px;
}

.back-link {
  color: var(--tyrian-purple);
  text-decoration: none;
  font-weight: 500;
}

.post-section {
  padding-bottom: 100px;
}

.post-content {
  max-width: 800px;
  margin: 0 auto;
  font-size: 18px;
  line-height: 1.8;
  color: var(--text-gray);
}
</style>
