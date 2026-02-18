<template>
  <main class="faq-page">
    <section class="page-hero">
      <div class="container">
        <h1>Frequently Asked <span class="tyrian-text">Questions</span></h1>
        <p>Find answers to common questions about our services</p>
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
import { ref } from 'vue'

const openIndex = ref<number | null>(null)

const toggle = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}

const faqs = ref([
  {
    question: 'What services does Erevos.io offer?',
    answer:
      'We specialize in code fixing & refactoring, process automation, technical consulting, legacy modernization, API integration, and custom software development.',
  },
  {
    question: 'What is your typical project timeline?',
    answer:
      'Project timelines vary based on scope and complexity. Small fixes can be done in days, while larger projects typically take 2-8 weeks. We provide detailed estimates during our initial consultation.',
  },
  {
    question: 'Do you offer ongoing support?',
    answer:
      'Yes! We offer maintenance and support packages to ensure your software continues running smoothly after delivery.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Simply reach out through our contact page or email us at hello@erevos.io. We will schedule a free consultation to discuss your needs.',
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
