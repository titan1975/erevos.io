<template>
  <main class="services-page">
    <section class="page-hero">
      <div class="container">
        <h1>What We <span class="tyrian-text">Actually Do</span></h1>
        <p>No buzzwords. Here's how we can help.</p>
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
    title: 'Code Fixing & Cleanup',
    description: "Your code is broken or messy? We'll get in there and make it work properly.",
    features: ['Legacy code rescue', 'Bug fixing', 'Performance boost'],
  },
  {
    id: 2,
    icon: 'fa-robot',
    title: 'Automation',
    description: "Stop doing things manually. We'll set up the pipelines and workflows for you.",
    features: ['Workflow automation', 'API integrations', 'Data pipeline setup'],
  },
  {
    id: 3,
    icon: 'fa-brain',
    title: 'Technical Consulting',
    description: "Need a straight answer about your tech stack? We'll give you one.",
    features: ['Honest tech advice', 'Custom builds', 'Architecture planning'],
  },
  {
    id: 4,
    icon: 'fa-server',
    title: 'Legacy Rescue',
    description: "Old system nobody wants to touch? We'll modernize it without burning it down.",
    features: ['Cloud migration', 'Microservices', 'Containerization'],
  },
  {
    id: 5,
    icon: 'fa-plug',
    title: 'API Integration',
    description: "Need your systems to talk to each other? We'll wire them up properly.",
    features: ['REST & GraphQL APIs', 'Third-party hookups', 'Webhook systems'],
  },
  {
    id: 6,
    icon: 'fa-lightbulb',
    title: 'Tech Strategy',
    description: "Not sure what stack to use or how to scale? We'll help you figure it out.",
    features: ['Architecture review', 'Stack selection', 'Best practices'],
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
