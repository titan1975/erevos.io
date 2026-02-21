<template>
  <main class="faq-page">
    <section class="page-hero">
      <div class="container">
        <h1>
          {{ t('faq.title') }} <span class="tyrian-text">{{ t('faq.titleHighlight') }}</span>
        </h1>
        <p>{{ t('faq.subtitle') }}</p>
      </div>
    </section>

    <section class="faq-section">
      <div class="container">
        <div class="faq-list">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="card faq-item"
            @click="toggle(index)"
          >
            <div class="faq-question">
              <h3>{{ faq.question }}</h3>
              <i :class="['fas', openIndex === index ? 'fa-chevron-up' : 'fa-chevron-down']"></i>
            </div>
            <div v-if="openIndex === index" class="faq-answer">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

const openIndex = ref<number | null>(null)

const toggle = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}

const faqs = computed(() => [
  {
    question: t('faq1.q'),
    answer: t('faq1.a'),
  },
  {
    question: t('faq2.q'),
    answer: t('faq2.a'),
  },
  {
    question: t('faq3.q'),
    answer: t('faq3.a'),
  },
  {
    question: t('faq4.q'),
    answer: t('faq4.a'),
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

.faq-section {
  padding-bottom: 100px;
}

.faq-list {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.faq-item {
  cursor: pointer;
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.faq-question h3 {
  font-size: 18px;
}

.faq-question i {
  color: var(--tyrian-purple);
}

.faq-answer {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--black-lighter);
}

.faq-answer p {
  color: var(--text-gray);
  line-height: 1.6;
}
</style>
