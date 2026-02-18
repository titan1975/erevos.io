<template>
  <main class="service-detail-page">
    <section class="page-hero">
      <div class="container">
        <h1>Service <span class="tyrian-text">Details</span></h1>
        <p>Learn more about our {{ $route.params.id }} service</p>
      </div>
    </section>

    <section class="detail-section">
      <div class="container">
        <div class="card">
          <h2>{{ serviceTitle }}</h2>
          <p class="service-description">
            This is what we do best. Hit us up if you want to know more or just want to talk it
            through.
          </p>
          <router-link to="/contact" class="btn mt-3">
            Let's Talk <i class="fas fa-arrow-right"></i>
          </router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const serviceTitle = computed(() => {
  const id = route.params.id as string
  return id
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
})
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

.detail-section {
  padding-bottom: 100px;
}

.service-description {
  color: var(--text-gray);
  font-size: 18px;
  line-height: 1.8;
  margin-top: 20px;
}
</style>
