<template>
  <main class="project-detail-page">
    <section class="page-hero">
      <div class="container">
        <h1>
          {{ t('projectDetail.title') }}
          <span class="tyrian-text">{{ t('projectDetail.titleHighlight') }}</span>
        </h1>
        <p>{{ projectTitle }}</p>
      </div>
    </section>

    <section class="detail-section">
      <div class="container">
        <div class="card">
          <h2>{{ projectTitle }}</h2>
          <p class="project-description">
            {{ t('projectDetail.desc') }}
          </p>
          <router-link to="/projects" class="btn btn-outline mt-3">
            <i class="fas fa-arrow-left"></i> {{ t('projectDetail.backToProjects') }}
          </router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from '../composables/useI18n'

const route = useRoute()
const { t } = useI18n()

const projectTitle = computed(() => {
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

.project-description {
  color: var(--text-gray);
  font-size: 18px;
  line-height: 1.8;
  margin-top: 20px;
}
</style>
