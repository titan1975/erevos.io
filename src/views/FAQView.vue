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
    question: 'What do you actually do?',
    answer:
      "We fix broken code, automate repetitive processes, help with architecture decisions, modernize old systems, build APIs, and do custom development. Basically — if it's a software problem, we can probably help.",
  },
  {
    question: 'How long does a project take?',
    answer:
      "Depends on the mess. Small fixes? A few days. Bigger projects? Usually 2-8 weeks. We'll give you a straight estimate upfront — no surprises.",
  },
  {
    question: 'Do you stick around after launch?',
    answer:
      "Yeah, we do. We offer support packages to keep things running smooth. We're not the type to ship and disappear.",
  },
  {
    question: 'How do I get started?',
    answer:
      "Just hit us up through the contact page or email hello@erevos.io. We'll have a real conversation about what you need — no sales pitch, no pressure.",
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
