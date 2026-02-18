<template>
  <main class="team-page">
    <section class="page-hero">
      <div class="container">
        <h1>Our <span class="tyrian-text">Team</span></h1>
        <p>Meet the experts behind Erevos.io</p>
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
import { ref } from 'vue'

const team = ref([
  {
    name: 'Euclides',
    role: 'Founder & Lead Developer',
    bio: 'Full-stack developer with a passion for fixing broken code and building elegant solutions.',
  },
  {
    name: 'Athena',
    role: 'AI Assistant',
    bio: 'Our AI-powered assistant providing 24/7 wisdom and technical guidance.',
  },
  {
    name: 'Join Us',
    role: 'Your Role Here',
    bio: 'We are always looking for talented individuals to join our growing team.',
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
