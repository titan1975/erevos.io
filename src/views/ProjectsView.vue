<template>
  <main class="projects-page">
    <section class="page-hero">
      <div class="container">
        <h1>
          {{ t('projects.title') }}
          <span class="tyrian-text">{{ t('projects.titleHighlight') }}</span>
        </h1>
        <p>{{ t('projects.subtitle') }}</p>
      </div>
    </section>

    <section class="projects-section">
      <div class="container">
        <div class="projects-grid grid-3">
          <router-link
            v-for="project in projects"
            :key="project.id"
            :to="`/projects/${project.id}`"
            class="card project-card"
          >
            <div class="project-icon">
              <i :class="['fas', project.icon]"></i>
            </div>
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <div class="project-tags">
              <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '../composables/useI18n'

interface Project {
  id: string
  icon: string
  title: string
  description: string
  tags: string[]
}

const { t } = useI18n()

const projects = computed<Project[]>(() => [
  {
    id: 'legacy-rescue',
    icon: 'fa-life-ring',
    title: t('project1.title'),
    description: t('project1.desc'),
    tags: ['TypeScript', 'Vue.js', 'Node.js'],
  },
  {
    id: 'automation-pipeline',
    icon: 'fa-cogs',
    title: t('project2.title'),
    description: t('project2.desc'),
    tags: ['Docker', 'GitHub Actions', 'AWS'],
  },
  {
    id: 'ai-integration',
    icon: 'fa-brain',
    title: t('project3.title'),
    description: t('project3.desc'),
    tags: ['Python', 'TensorFlow', 'Vue.js'],
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

.projects-section {
  padding-bottom: 100px;
}

.project-card {
  text-decoration: none;
  color: var(--text-light);
  cursor: pointer;
}

.project-icon {
  font-size: 32px;
  color: var(--tyrian-purple);
  margin-bottom: 20px;
}

.project-card h3 {
  margin-bottom: 12px;
}

.project-card p {
  color: var(--text-gray);
  margin-bottom: 16px;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  background: rgba(155, 27, 109, 0.15);
  color: var(--tyrian-light);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 13px;
}
</style>
