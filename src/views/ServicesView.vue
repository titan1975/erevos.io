<template>
  <main class="services-page">
    <section class="page-hero">
      <div class="container">
        <h1>
          {{ t('servicesPage.title1') }}
          <span class="tyrian-text">{{ t('servicesPage.titleHighlight') }}</span>
        </h1>
        <p>{{ t('servicesPage.subtitle') }}</p>
      </div>
    </section>

    <section class="services-section">
      <div class="container">
        <div class="services-grid grid-3">
          <ServiceCard
            v-for="service in services"
            :key="service.id"
            :icon="service.icon"
            :title="service.title"
            :description="service.description"
            :features="service.features"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ServiceCard from '../components/ServiceCard.vue'
import { useI18n } from '../composables/useI18n'
import type { Service } from '../types'

const { t } = useI18n()

const services = computed<Service[]>(() => [
  {
    id: 1,
    icon: 'fa-code',
    title: t('service1.title'),
    description: t('service1.desc'),
    features: [t('service1.feat1'), t('service1.feat2'), t('service1.feat3')],
  },
  {
    id: 2,
    icon: 'fa-robot',
    title: t('service2.title'),
    description: t('service2.desc'),
    features: [t('service2.feat1'), t('service2.feat2'), t('service2.feat3')],
  },
  {
    id: 3,
    icon: 'fa-brain',
    title: t('service3.title'),
    description: t('service3.desc'),
    features: [t('service3.feat1'), t('service3.feat2'), t('service3.feat3')],
  },
  {
    id: 4,
    icon: 'fa-server',
    title: t('service4.title'),
    description: t('service4.desc'),
    features: [t('service4.feat1'), t('service4.feat2'), t('service4.feat3')],
  },
  {
    id: 5,
    icon: 'fa-plug',
    title: t('service5.title'),
    description: t('service5.desc'),
    features: [t('service5.feat1'), t('service5.feat2'), t('service5.feat3')],
  },
  {
    id: 6,
    icon: 'fa-lightbulb',
    title: t('service6.title'),
    description: t('service6.desc'),
    features: [t('service6.feat1'), t('service6.feat2'), t('service6.feat3')],
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

.services-section {
  padding-bottom: 100px;
}
</style>
