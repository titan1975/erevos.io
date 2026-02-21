<template>
  <main class="pricing-page">
    <section class="page-hero">
      <div class="container">
        <h1>
          {{ t('pricing.title') }}
          <span class="tyrian-text">{{ t('pricing.titleHighlight') }}</span>
        </h1>
        <p>{{ t('pricing.subtitle') }}</p>
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
              {{ t('pricing.getStarted') }}
            </router-link>
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

const plans = computed(() => [
  {
    name: t('plan1.name'),
    price: t('plan1.price'),
    period: t('plan1.period'),
    description: t('plan1.desc'),
    features: [t('plan1.feat1'), t('plan1.feat2'), t('plan1.feat3'), t('plan1.feat4')],
    featured: false,
  },
  {
    name: t('plan2.name'),
    price: t('plan2.price'),
    period: t('plan2.period'),
    description: t('plan2.desc'),
    features: [
      t('plan2.feat1'),
      t('plan2.feat2'),
      t('plan2.feat3'),
      t('plan2.feat4'),
      t('plan2.feat5'),
    ],
    featured: true,
  },
  {
    name: t('plan3.name'),
    price: t('plan3.price'),
    period: t('plan3.period'),
    description: t('plan3.desc'),
    features: [
      t('plan3.feat1'),
      t('plan3.feat2'),
      t('plan3.feat3'),
      t('plan3.feat4'),
      t('plan3.feat5'),
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
