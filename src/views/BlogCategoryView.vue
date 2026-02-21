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
        <div class="card text-center">
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

const route = useRoute()
const { t } = useI18n()

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
