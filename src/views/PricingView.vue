<template>
  <main class="pricing-page">
    <section class="page-hero">
      <div class="container">
        <h1>Our <span class="tyrian-text">Pricing</span></h1>
        <p>Simple, transparent pricing for every need</p>
      </div>
    </section>

    <section class="pricing-section">
      <div class="container">
        <div class="pricing-grid grid-3">
          <div
            v-for="plan in plans"
            :key="plan.name"
            class="card pricing-card"
            :class="{ featured: plan.featured }"
          >
            <h3>{{ plan.name }}</h3>
            <div class="price">
              <span class="amount">{{ plan.price }}</span>
              <span v-if="plan.period" class="period">{{ plan.period }}</span>
            </div>
            <p class="plan-description">{{ plan.description }}</p>
            <ul class="plan-features">
              <li v-for="feature in plan.features" :key="feature">
                <i class="fas fa-check"></i> {{ feature }}
              </li>
            </ul>
            <router-link to="/contact" class="btn" :class="{ 'btn-outline': !plan.featured }">
              Get Started
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const plans = ref([
  {
    name: 'Starter',
    price: '$999',
    period: '/project',
    description: 'Perfect for small fixes and quick wins',
    features: ['Bug fixing', 'Code review', 'Up to 10 hours', 'Email support'],
    featured: false,
  },
  {
    name: 'Professional',
    price: '$2,999',
    period: '/month',
    description: 'For ongoing development and automation',
    features: [
      'Everything in Starter',
      'Process automation',
      'Priority support',
      'Up to 40 hours',
      'Athena AI access',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored solutions for large organizations',
    features: [
      'Everything in Professional',
      'Dedicated team',
      'Custom SLA',
      'Architecture review',
      '24/7 support',
    ],
    featured: false,
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

.pricing-section {
  padding-bottom: 100px;
}

.pricing-card {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pricing-card.featured {
  border-color: var(--tyrian-purple);
  position: relative;
}

.pricing-card.featured::before {
  content: 'Most Popular';
  position: absolute;
  top: -12px;
  background: var(--tyrian-purple);
  color: white;
  padding: 4px 16px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
}

.price {
  margin: 20px 0;
}

.amount {
  font-size: 48px;
  font-weight: 700;
  font-family: 'Space Grotesk', sans-serif;
  color: var(--tyrian-purple);
}

.period {
  color: var(--text-gray);
  font-size: 16px;
}

.plan-description {
  color: var(--text-gray);
  margin-bottom: 24px;
}

.plan-features {
  list-style: none;
  padding: 0;
  text-align: left;
  width: 100%;
  margin-bottom: 30px;
  flex: 1;
}

.plan-features li {
  padding: 8px 0;
  color: var(--text-gray);
  border-bottom: 1px solid var(--black-lighter);
}

.plan-features i {
  color: var(--success);
  margin-right: 8px;
}
</style>
