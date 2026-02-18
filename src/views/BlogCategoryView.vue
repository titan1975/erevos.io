<template>
  <main class="blog-category-page">
    <section class="page-hero">
      <div class="container">
        <router-link to="/blog" class="back-link">
          <i class="fas fa-arrow-left"></i> Back to Blog
        </router-link>
        <h1>
          Category: <span class="tyrian-text">{{ categoryName }}</span>
        </h1>
        <p>Browse posts in the {{ categoryName }} category</p>
      </div>
    </section>

    <section class="category-section">
      <div class="container">
        <div class="card text-center">
          <p>Posts for this category are coming soon. Check back later!</p>
          <router-link to="/blog" class="btn mt-3">Browse All Posts</router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const categoryName = computed(() => {
  const cat = route.params.category as string
  return cat.charAt(0).toUpperCase() + cat.slice(1)
})
</script>

<style scoped>
.page-hero {
  padding: 160px 0 80px;
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
</style>
