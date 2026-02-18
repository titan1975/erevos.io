<template>
  <main class="contact-page">
    <section class="page-hero">
      <div class="container">
        <h1>Contact <span class="tyrian-text">Us</span></h1>
        <p>Get in touch with our team — we'd love to hear from you</p>
      </div>
    </section>

    <section class="contact-section">
      <div class="container">
        <div class="contact-grid grid-2">
          <div class="contact-form-wrapper">
            <h2>Send us a message</h2>
            <form @submit.prevent="submitForm" class="contact-form">
              <div class="form-group">
                <label class="form-label">Name</label>
                <input
                  v-model="formData.name"
                  type="text"
                  class="form-input"
                  :class="{ error: errors.name }"
                  placeholder="Your name"
                />
                <p v-if="errors.name" class="error-message">{{ errors.name }}</p>
              </div>

              <div class="form-group">
                <label class="form-label">Email</label>
                <input
                  v-model="formData.email"
                  type="email"
                  class="form-input"
                  :class="{ error: errors.email }"
                  placeholder="your@email.com"
                />
                <p v-if="errors.email" class="error-message">{{ errors.email }}</p>
              </div>

              <div class="form-group">
                <label class="form-label">Subject</label>
                <input
                  v-model="formData.subject"
                  type="text"
                  class="form-input"
                  :class="{ error: errors.subject }"
                  placeholder="How can we help?"
                />
                <p v-if="errors.subject" class="error-message">{{ errors.subject }}</p>
              </div>

              <div class="form-group">
                <label class="form-label">Service</label>
                <select v-model="formData.service" class="form-input">
                  <option value="">Select a service (optional)</option>
                  <option value="code-fixing">Code Fixing & Refactoring</option>
                  <option value="automation">Process Automation</option>
                  <option value="problem-solving">Problem Solving</option>
                  <option value="consulting">Technical Consulting</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label">Message</label>
                <textarea
                  v-model="formData.message"
                  class="form-textarea"
                  :class="{ error: errors.message }"
                  rows="5"
                  placeholder="Tell us about your project..."
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
                <span v-if="isSubmitting">Sending...</span>
                <span v-else>Send Message <i class="fas fa-paper-plane"></i></span>
              </button>
            </form>
          </div>

          <div class="contact-info-wrapper">
            <h2>Get in touch</h2>
            <ul class="contact-details">
              <li>
                <i class="fas fa-map-marker-alt"></i>
                <span>123 Innovation Drive, San Francisco, CA 94107</span>
              </li>
              <li>
                <i class="fas fa-phone-alt"></i>
                <a href="tel:+15551234567">+1 (555) 123-4567</a>
              </li>
              <li>
                <i class="fas fa-envelope"></i>
                <a href="mailto:hello@erevos.io">hello@erevos.io</a>
              </li>
              <li>
                <i class="fas fa-clock"></i>
                <span>Mon-Fri: 9AM - 6PM PST</span>
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

const { formData, errors, isSubmitting, submitStatus, submitMessage, submitForm } = useContactForm()
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
