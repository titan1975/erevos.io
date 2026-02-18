<template>
  <footer>
    <div class="container">
      <!-- Main Footer Content -->
      <div class="footer-content">
        <!-- Company Info -->
        <div class="footer-section company-info">
          <router-link to="/" class="footer-logo"> erevos<span>.io</span> </router-link>
          <p class="footer-description">
            Transforming businesses through innovative software solutions. We fix broken code,
            automate processes, and solve technical problems with wisdom and precision.
          </p>

          <!-- Social Links -->
          <div class="social-links">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="social-icon"
              :aria-label="social.name"
            >
              <i :class="['fab', social.icon]"></i>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul class="footer-links">
            <li v-for="link in quickLinks" :key="link.path">
              <router-link :to="link.path">
                <i class="fas fa-chevron-right"></i>
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div class="footer-section">
          <h4>Our Services</h4>
          <ul class="footer-links">
            <li v-for="service in services" :key="service.path">
              <router-link :to="service.path">
                <i class="fas fa-chevron-right"></i>
                {{ service.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="footer-section">
          <h4>Contact Us</h4>
          <ul class="contact-info">
            <li>
              <i class="fas fa-map-marker-alt"></i>
              <span>{{ contact.address }}</span>
            </li>
            <li>
              <i class="fas fa-phone-alt"></i>
              <a :href="`tel:${contact.phone}`">{{ contact.phone }}</a>
            </li>
            <li>
              <i class="fas fa-envelope"></i>
              <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>
            </li>
            <li>
              <i class="fas fa-clock"></i>
              <span>{{ contact.hours }}</span>
            </li>
          </ul>

          <!-- Athena Badge -->
          <div class="athena-badge">
            <span class="owl">🦉</span>
            <span class="badge-text">Wisdom of Athena 24/7</span>
            <span class="boot">👢</span>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="footer-bottom">
        <div class="copyright">
          <p>&copy; {{ currentYear }} Erevos.io. All rights reserved.</p>
        </div>
        <div class="legal-links">
          <router-link to="/privacy">Privacy Policy</router-link>
          <span class="separator">|</span>
          <router-link to="/terms">Terms of Service</router-link>
          <span class="separator">|</span>
          <router-link to="/cookies">Cookie Policy</router-link>
        </div>
      </div>

      <!-- Back to Top Button -->
      <button
        class="back-to-top"
        @click="scrollToTop"
        :class="{ visible: showBackToTop }"
        aria-label="Back to top"
      >
        <i class="fas fa-arrow-up"></i>
        <span class="boot-icon">👢</span>
      </button>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// Types
interface SocialLink {
  name: string
  icon: string
  url: string
}

interface FooterLink {
  name: string
  path: string
}

interface ContactInfo {
  address: string
  phone: string
  email: string
  hours: string
}

// State
const currentYear = ref<number>(new Date().getFullYear())
const showBackToTop = ref<boolean>(false)

// Data
const socialLinks = ref<SocialLink[]>([
  {
    name: 'Twitter',
    icon: 'fa-twitter',
    url: 'https://twitter.com/erevos_io',
  },
  {
    name: 'LinkedIn',
    icon: 'fa-linkedin-in',
    url: 'https://linkedin.com/company/erevos-io',
  },
  {
    name: 'GitHub',
    icon: 'fa-github',
    url: 'https://github.com/erevos-io',
  },
  {
    name: 'Instagram',
    icon: 'fa-instagram',
    url: 'https://instagram.com/erevos.io',
  },
])

const quickLinks = ref<FooterLink[]>([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About Us', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
  { name: 'Blog', path: '/blog' },
])

const services = ref<FooterLink[]>([
  { name: 'Code Fixing', path: '/services/code-fixing' },
  { name: 'Process Automation', path: '/services/automation' },
  { name: 'Problem Solving', path: '/services/problem-solving' },
  { name: 'Legacy Modernization', path: '/services/legacy-modernization' },
  { name: 'API Integration', path: '/services/api-integration' },
  { name: 'Technical Consulting', path: '/services/consulting' },
])

const contact = ref<ContactInfo>({
  address: '123 Innovation Drive, San Francisco, CA 94107',
  phone: '+1 (555) 123-4567',
  email: 'hello@erevos.io',
  hours: 'Mon-Fri: 9AM - 6PM PST',
})

// Methods
const scrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const handleScroll = (): void => {
  showBackToTop.value = window.scrollY > 500
}

// Lifecycle
onMounted((): void => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted((): void => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
footer {
  background: linear-gradient(180deg, var(--black) 0%, var(--black-darker) 100%);
  border-top: 3px solid var(--tyrian-purple);
  padding-top: 70px;
  position: relative;
  overflow: hidden;
}

/* Decorative Elements */
footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--tyrian-purple) 20%,
    var(--tyrian-light) 50%,
    var(--tyrian-purple) 80%,
    transparent 100%
  );
}

footer::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, var(--tyrian-glow) 0%, transparent 70%);
  opacity: 0.3;
  pointer-events: none;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 40px;
  margin-bottom: 50px;
  position: relative;
  z-index: 1;
}

/* Company Info Section */
.footer-logo {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: var(--text-light);
  text-decoration: none;
  display: inline-block;
  margin-bottom: 20px;
  transition: all 0.3s ease;
}

.footer-logo:hover {
  transform: translateY(-2px);
  text-shadow: 0 5px 15px var(--tyrian-glow);
}

.footer-logo span {
  color: var(--tyrian-purple);
  position: relative;
}

.footer-logo span::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--tyrian-purple);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.footer-logo:hover span::after {
  transform: scaleX(1);
}

.footer-description {
  color: var(--text-gray);
  line-height: 1.8;
  margin-bottom: 25px;
  font-size: 15px;
  max-width: 300px;
}

/* Social Links */
.social-links {
  display: flex;
  gap: 15px;
}

.social-icon {
  width: 40px;
  height: 40px;
  background: rgba(102, 2, 60, 0.1);
  border: 1px solid var(--tyrian-purple);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--tyrian-purple);
  font-size: 18px;
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-icon:hover {
  background: var(--tyrian-purple);
  color: white;
  transform: translateY(-5px) rotate(360deg);
  box-shadow: 0 5px 20px var(--tyrian-glow);
}

/* Footer Sections */
.footer-section h4 {
  color: var(--text-light);
  font-size: 20px;
  margin-bottom: 25px;
  position: relative;
  padding-bottom: 10px;
}

.footer-section h4::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 3px;
  background: var(--tyrian-purple);
  border-radius: 2px;
}

/* Footer Links */
.footer-links {
  list-style: none;
}

.footer-links li {
  margin-bottom: 12px;
}

.footer-links a {
  color: var(--text-gray);
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
}

.footer-links a i {
  font-size: 12px;
  color: var(--tyrian-purple);
  transition: transform 0.3s ease;
}

.footer-links a:hover {
  color: var(--tyrian-light);
  transform: translateX(5px);
}

.footer-links a:hover i {
  transform: translateX(3px);
}

/* Contact Info */
.contact-info {
  list-style: none;
}

.contact-info li {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 18px;
  color: var(--text-gray);
  font-size: 14px;
  line-height: 1.6;
}

.contact-info i {
  color: var(--tyrian-purple);
  font-size: 18px;
  margin-top: 3px;
  min-width: 20px;
}

.contact-info a {
  color: var(--text-gray);
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-info a:hover {
  color: var(--tyrian-light);
}

/* Athena Badge */
.athena-badge {
  margin-top: 30px;
  padding: 15px;
  background: rgba(102, 2, 60, 0.1);
  border: 1px solid var(--tyrian-purple);
  border-radius: 50px;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  position: relative;
  overflow: hidden;
}

.athena-badge::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, var(--tyrian-glow) 0%, transparent 70%);
  animation: rotate 10s linear infinite;
  opacity: 0.5;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.owl,
.boot {
  font-size: 24px;
  position: relative;
  z-index: 1;
  animation: bounce 2s ease-in-out infinite;
}

.boot {
  animation-delay: 0.5s;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

.badge-text {
  color: var(--tyrian-light);
  font-weight: 600;
  font-size: 14px;
  position: relative;
  z-index: 1;
}

/* Footer Bottom */
.footer-bottom {
  padding: 25px 0;
  border-top: 1px solid rgba(102, 2, 60, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  position: relative;
  z-index: 1;
}

.copyright p {
  color: var(--text-gray);
  font-size: 14px;
}

.legal-links {
  display: flex;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
}

.legal-links a {
  color: var(--text-gray);
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
  position: relative;
}

.legal-links a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--tyrian-purple);
  transition: width 0.3s ease;
}

.legal-links a:hover {
  color: var(--tyrian-light);
}

.legal-links a:hover::after {
  width: 100%;
}

.separator {
  color: var(--tyrian-purple);
  font-size: 14px;
}

/* Back to Top Button */
.back-to-top {
  position: fixed;
  bottom: 30px;
  right: 100px; /* Positioned next to Athena bot */
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--tyrian-purple), var(--tyrian-dark));
  border: none;
  border-radius: 50%;
  color: white;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 999;
  box-shadow: 0 4px 15px var(--tyrian-glow);
}

.back-to-top.visible {
  opacity: 1;
  visibility: visible;
}

.back-to-top:hover {
  transform: translateY(-5px) scale(1.1);
  box-shadow: 0 8px 25px var(--tyrian-glow);
}

.back-to-top .boot-icon {
  font-size: 16px;
  line-height: 1;
  animation: kick 1s ease-in-out infinite;
}

@keyframes kick {
  0%,
  100% {
    transform: rotate(0deg) translateX(0);
  }
  25% {
    transform: rotate(-10deg) translateX(-2px);
  }
  75% {
    transform: rotate(10deg) translateX(2px);
  }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
}

@media (max-width: 768px) {
  footer {
    padding-top: 50px;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }

  .legal-links {
    justify-content: center;
  }

  .back-to-top {
    right: 20px;
    bottom: 90px; /* Above Athena bot on mobile */
    width: 45px;
    height: 45px;
    font-size: 18px;
  }

  .footer-description {
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .legal-links {
    flex-direction: column;
    gap: 10px;
  }

  .separator {
    display: none;
  }

  .athena-badge {
    width: 100%;
    justify-content: center;
  }
}

/* Dark mode optimization */
@media (prefers-color-scheme: dark) {
  footer {
    background: linear-gradient(180deg, var(--black) 0%, var(--black-darker) 100%);
  }
}

/* Print styles */
@media print {
  footer {
    display: none;
  }
}
</style>
