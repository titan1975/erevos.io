<template>
  <main class="not-found-page">
    <section class="not-found-section">
      <div class="container text-center">
        <h1>4<span class="tyrian-text">0</span>4</h1>
        <h2>{{ t('notFound.subtitle') }}</h2>
        <p>{{ t('notFound.desc') }}</p>
        <div class="not-found-actions mt-4">
          <router-link to="/" class="btn">
            <i class="fas fa-home"></i> {{ t('notFound.home') }}
          </router-link>
          <router-link to="/contact" class="btn btn-outline">
            {{ t('notFound.contact') }}
          </router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
</script>

<style scoped>
.not-found-section {
  padding: 200px 0 100px;
}

.owl-icon {
  font-size: 80px;
  margin-bottom: 20px;
}

.not-found-section h1 {
  font-size: 120px;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 16px;
}

.not-found-section h2 {
  font-size: 32px;
  margin-bottom: 16px;
}

.not-found-section p {
  color: var(--text-gray);
  font-size: 18px;
  max-width: 500px;
  margin: 0 auto;
}

.not-found-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
}
</style>
