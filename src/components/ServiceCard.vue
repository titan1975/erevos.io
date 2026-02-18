<template>
  <div class="service-card">
    <div class="service-icon">
      <i :class="['fas', icon]"></i>
    </div>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <div v-if="features" class="service-features">
      <ul v-if="features.length">
        <li v-for="feature in features" :key="feature">
          <i class="fas fa-check"></i> {{ feature }}
        </li>
      </ul>
    </div>
    <router-link to="/contact" class="learn-more">
      Learn More <i class="fas fa-arrow-right"></i>
    </router-link>
  </div>
</template>

<script setup lang="ts">
interface Props {
  icon: string
  title: string
  description: string
  features?: string[]
}

const props = defineProps<Props>()
</script>

<style scoped>
.service-card {
  background-color: var(--black-darker);
  border-radius: 16px;
  padding: 40px;
  transition: all 0.3s ease;
  border: 1px solid var(--black-lighter);
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, var(--tyrian-purple), var(--tyrian-light));
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px var(--tyrian-glow);
  border-color: var(--tyrian-purple);
}

.service-card:hover::before {
  transform: scaleX(1);
}

.service-icon {
  font-size: 48px;
  color: var(--tyrian-purple);
  margin-bottom: 24px;
}

.service-card h3 {
  font-size: 24px;
  margin-bottom: 16px;
  color: var(--text-light);
}

.service-card p {
  color: var(--text-gray);
  margin-bottom: 20px;
  line-height: 1.6;
}

.service-features {
  margin: 20px 0;
}

.service-features ul {
  list-style: none;
}

.service-features li {
  color: var(--text-gray);
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
}

.service-features i {
  color: var(--tyrian-purple);
  font-size: 14px;
}

.learn-more {
  color: var(--tyrian-purple);
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: gap 0.3s ease;
}

.learn-more:hover {
  gap: 12px;
  color: var(--tyrian-light);
}
</style>
