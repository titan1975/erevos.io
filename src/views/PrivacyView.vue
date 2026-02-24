<template>
  <main class="legal-page">
    <section class="page-hero">
      <div class="container">
        <h1>
          {{ t('privacy.title') }}
          <span class="tyrian-text">{{ t('privacy.titleHighlight') }}</span>
        </h1>
        <p>{{ t('privacy.lastUpdated') }}</p>
      </div>
    </section>

    <section class="legal-section">
      <div class="container">
        <article class="card legal-content">
          <h2>{{ t('privacy.h2_1') }}</h2>
          <p>{{ t('privacy.p1') }}</p>

          <h2>{{ t('privacy.h2_2') }}</h2>
          <p>{{ t('privacy.p2') }}</p>

          <h2>{{ t('privacy.h2_3') }}</h2>
          <p>{{ t('privacy.p3') }}</p>

          <h2>{{ t('privacy.h2_4') }}</h2>
          <p>{{ t('privacy.p4') }}</p>

          <h2>{{ t('privacy.h2_5') }}</h2>
          <p>
            {{ t('privacy.p5') }}
          </p>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
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

.legal-section {
  padding-bottom: 100px;
}

.legal-content {
  max-width: 800px;
  margin: 0 auto;
}

.legal-content h2 {
  font-size: 24px;
  margin: 30px 0 12px;
  color: var(--tyrian-light);
}

.legal-content h2:first-child {
  margin-top: 0;
}

.legal-content p {
  color: var(--text-gray);
  line-height: 1.8;
  margin-bottom: 16px;
}

.legal-content a {
  color: var(--tyrian-purple);
}
</style>
