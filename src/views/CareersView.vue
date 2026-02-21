<template>
  <main class="careers-page">
    <section class="page-hero">
      <div class="container">
        <h1>
          {{ t('careers.title') }}
          <span class="tyrian-text">{{ t('careers.titleHighlight') }}</span>
        </h1>
        <p>{{ t('careers.subtitle') }}</p>
      </div>
    </section>

    <section class="careers-section">
      <div class="container">
        <div class="section-title">
          <h2>{{ t('careers.openPositions') }}</h2>
          <p>{{ t('careers.lookingForTalent') }}</p>
        </div>

        <div class="card text-center">
          <h3>{{ t('careers.noPositions') }}</h3>
          <p class="mt-2" style="color: var(--text-gray)">
            {{ t('careers.sendResume') }}
            <a href="mailto:careers@erevos.io" style="color: var(--tyrian-purple)"
              >careers@erevos.io</a
            >
          </p>
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

.careers-section {
  padding-bottom: 100px;
}
</style>
