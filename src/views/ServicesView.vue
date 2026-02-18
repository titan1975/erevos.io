<template>
  <main class="services-page">
    <section class="page-hero">
      <div class="container">
        <h1>Our <span class="tyrian-text">Services</span></h1>
        <p>Comprehensive software solutions tailored to your needs</p>
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
import { ref } from 'vue'
import ServiceCard from '../components/ServiceCard.vue'
import type { Service } from '../types'

const services = ref<Service[]>([
  {
    id: 1,
    icon: 'fa-code',
    title: 'Code Fixing & Refactoring',
    description: 'We rescue broken legacy code, fix bugs, and modernize your software.',
    features: ['Legacy code modernization', 'Bug fixing', 'Performance optimization'],
  },
  {
    id: 2,
    icon: 'fa-robot',
    title: 'Process Automation',
    description: 'Automate repetitive tasks and streamline your business workflows.',
    features: ['Workflow automation', 'API integrations', 'Data pipeline automation'],
  },
  {
    id: 3,
    icon: 'fa-brain',
    title: 'Problem Solving',
    description: 'Technical consulting and custom solutions for complex challenges.',
    features: ['Technical consulting', 'Custom development', 'System architecture'],
  },
  {
    id: 4,
    icon: 'fa-server',
    title: 'Legacy Modernization',
    description: 'Transform outdated systems into modern, scalable architectures.',
    features: ['Cloud migration', 'Microservices', 'Containerization'],
  },
  {
    id: 5,
    icon: 'fa-plug',
    title: 'API Integration',
    description: 'Connect your systems with seamless API development and integration.',
    features: ['REST & GraphQL APIs', 'Third-party integrations', 'Webhook systems'],
  },
  {
    id: 6,
    icon: 'fa-lightbulb',
    title: 'Technical Consulting',
    description: 'Expert guidance for your technology strategy and implementation.',
    features: ['Architecture review', 'Tech stack selection', 'Best practices'],
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
