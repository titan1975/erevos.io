<template>
  <main class="contact-page">
    <section class="page-hero">
      <div class="container">
        <h1>
          {{ t('contact.title1') }}
          <span class="tyrian-text">{{ t('contact.titleHighlight') }}</span>
        </h1>
        <p>{{ t('contact.subtitle') }}</p>
      </div>
    </section>

    <section class="contact-section">
      <div class="container">
        <div class="contact-grid grid-2">
          <div class="contact-form-wrapper">
            <h2>{{ t('contact.formTitle') }}</h2>
            <form @submit.prevent="submitForm" class="contact-form">
              <div class="form-group">
                <label class="form-label">{{ t('contact.name') }}</label>
                <input
                  v-model="formData.name"
                  type="text"
                  class="form-input"
                  :class="{ error: errors.name }"
                  :placeholder="t('contact.namePlaceholder')"
                />
                <p v-if="errors.name" class="error-message">{{ errors.name }}</p>
              </div>

              <div class="form-group">
                <label class="form-label">{{ t('contact.email') }}</label>
                <input
                  v-model="formData.email"
                  type="email"
                  class="form-input"
                  :class="{ error: errors.email }"
                  :placeholder="t('contact.emailPlaceholder')"
                />
                <p v-if="errors.email" class="error-message">{{ errors.email }}</p>
              </div>

              <div class="form-group">
                <label class="form-label">{{ t('contact.subject') }}</label>
                <input
                  v-model="formData.subject"
                  type="text"
                  class="form-input"
                  :class="{ error: errors.subject }"
                  :placeholder="t('contact.subjectPlaceholder')"
                />
                <p v-if="errors.subject" class="error-message">{{ errors.subject }}</p>
              </div>

              <div class="form-group">
                <label class="form-label">{{ t('contact.service') }}</label>
                <select v-model="formData.service" class="form-input">
                  <option value="">{{ t('contact.serviceDefault') }}</option>
                  <option value="code-fixing">{{ t('contact.serviceOption1') }}</option>
                  <option value="automation">{{ t('contact.serviceOption2') }}</option>
                  <option value="problem-solving">{{ t('contact.serviceOption3') }}</option>
                  <option value="consulting">{{ t('contact.serviceOption4') }}</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label">{{ t('contact.message') }}</label>
                <textarea
                  v-model="formData.message"
                  class="form-textarea"
                  :class="{ error: errors.message }"
                  rows="5"
                  :placeholder="t('contact.messagePlaceholder')"
                ></textarea>
                <p v-if="errors.message" class="error-message">{{ errors.message }}</p>
              </div>

              <div v-if="submitStatus === 'success'" class="success-message">
                {{ submitMessage }}
              </div>
              <div v-if="submitStatus === 'error'" class="error-banner">
                {{ submitMessage }}
              </div>

              <button type="submit" class="btn" :disabled="isSubmitting">
                <span v-if="isSubmitting">{{ t('contact.sending') }}</span>
                <span v-else>{{ t('contact.send') }} <i class="fas fa-paper-plane"></i></span>
              </button>
            </form>
          </div>

          <div class="contact-info-wrapper">
            <h2>{{ t('contact.infoTitle') }}</h2>
            <ul class="contact-details">
              <li>
                <i class="fas fa-envelope"></i>
                <a href="mailto:hello@erevos.io">hello@erevos.io</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useContactForm } from '../composables/useContactForm'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
const { formData, errors, isSubmitting, submitStatus, submitMessage, submitForm } = useContactForm()
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

.contact-section {
  padding-bottom: 100px;
}

.contact-form-wrapper h2,
.contact-info-wrapper h2 {
  font-size: 28px;
  margin-bottom: 30px;
}

.contact-details {
  list-style: none;
  padding: 0;
}

.contact-details li {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 25px;
  color: var(--text-gray);
}

.contact-details i {
  color: var(--tyrian-purple);
  font-size: 20px;
  width: 24px;
  text-align: center;
}

.contact-details a {
  color: var(--text-gray);
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-details a:hover {
  color: var(--tyrian-purple);
}

.success-message {
  background: rgba(52, 199, 89, 0.1);
  border: 1px solid var(--success);
  color: var(--success);
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.error-banner {
  background: rgba(255, 59, 48, 0.1);
  border: 1px solid var(--error);
  color: var(--error);
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 20px;
}
</style>
