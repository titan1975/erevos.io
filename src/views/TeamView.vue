<template>
  <main class="team-page">
    <section class="page-hero">
      <div class="container">
        <h1>
          {{ t('team.title') }} <span class="tyrian-text">{{ t('team.titleHighlight') }}</span>
        </h1>
        <p>{{ t('team.subtitle') }}</p>
      </div>
    </section>

    <section class="team-section">
      <div class="container">
        <div class="team-grid grid-3">
          <div v-for="member in team" :key="member.name" class="card team-card text-center">
            <div class="team-avatar">
              <i class="fas fa-user-circle"></i>
            </div>
            <h3>{{ member.name }}</h3>
            <span class="role">{{ member.role }}</span>
            <p>{{ member.bio }}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

const team = computed(() => [
  {
    name: t('team1.name'),
    role: t('team1.role'),
    bio: t('team1.bio'),
  },
  {
    name: t('team2.name'),
    role: t('team2.role'),
    bio: t('team2.bio'),
  },
])
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

.team-section {
  padding-bottom: 100px;
}

.team-avatar {
  font-size: 64px;
  color: var(--tyrian-purple);
  margin-bottom: 20px;
}

.team-card h3 {
  margin-bottom: 8px;
}

.role {
  color: var(--tyrian-light);
  font-size: 14px;
  font-weight: 600;
  display: block;
  margin-bottom: 16px;
}

.team-card p {
  color: var(--text-gray);
}
</style>
