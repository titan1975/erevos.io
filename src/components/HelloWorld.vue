<template>
  <main class="homepage">
    <!-- ═══════════════ HERO ═══════════════ -->
    <section class="hero">
      <div class="hero-particles">
        <span v-for="n in 20" :key="n" class="particle" :style="particleStyle(n)"></span>
      </div>
      <div class="container">
        <div class="hero-grid">
          <div class="hero-content">
            <div class="hero-badge animate-fade-in">
              <span class="badge-dot"></span>
              {{ t('hero.badge') }}
            </div>
            <h1 class="animate-fade-in delay-1">
              {{ t('hero.title1') }} <span class="tyrian-text">{{ t('hero.titleHighlight1') }}</span
              >? <br />{{ t('hero.title2') }}
              <span class="tyrian-text">{{ t('hero.titleHighlight2') }}</span
              >.
            </h1>
            <p class="hero-sub animate-fade-in delay-2">
              {{ t('hero.subtitle') }}
            </p>
            <div class="hero-btns animate-fade-in delay-3">
              <router-link to="/contact" class="btn btn-glow">
                {{ t('hero.btnTalk') }} <i class="fas fa-arrow-right"></i>
              </router-link>
              <router-link to="/services" class="btn btn-outline">
                {{ t('hero.btnServices') }} <i class="fas fa-cogs"></i>
              </router-link>
            </div>
            <div class="hero-trust animate-fade-in delay-4">
              <div class="trust-avatars">
                <span class="avatar">E</span>
                <span class="avatar">A</span>
                <span class="avatar">D</span>
                <span class="avatar">+</span>
              </div>
              <span class="trust-text">{{ t('hero.trust') }}</span>
            </div>
          </div>
          <div class="hero-visual animate-fade-in delay-2">
            <div class="code-window">
              <div class="code-header">
                <span class="dot red"></span>
                <span class="dot yellow"></span>
                <span class="dot green"></span>
                <span class="code-title">{{ t('hero.codeTitle') }}</span>
              </div>
              <div class="code-body">
                <div class="code-line">
                  <span class="line-num">1</span>
                  <span class="code-comment">{{ t('hero.codeBefore') }}</span>
                </div>
                <div class="code-line strike">
                  <span class="line-num">2</span>
                  <span class="code-red">def process(): # broken</span>
                </div>
                <div class="code-line strike">
                  <span class="line-num">3</span>
                  <span class="code-red">&nbsp;&nbsp;return None # 🐛</span>
                </div>
                <div class="code-line blank">
                  <span class="line-num">4</span>
                </div>
                <div class="code-line">
                  <span class="line-num">5</span>
                  <span class="code-comment">{{ t('hero.codeAfter') }}</span>
                </div>
                <div class="code-line">
                  <span class="line-num">6</span>
                  <span class="code-green">def process(data):</span>
                </div>
                <div class="code-line">
                  <span class="line-num">7</span>
                  <span class="code-green">&nbsp;&nbsp;return transform(data) ✓</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════ STATS BAR ═══════════════ -->
    <section class="stats-bar">
      <div class="container">
        <div class="stats-grid">
          <div v-for="stat in stats" :key="stat.label" class="stat-item">
            <span class="stat-number">{{ stat.value }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════ WHAT WE DO ═══════════════ -->
    <section class="what-we-do">
      <div class="container">
        <div class="section-title">
          <span class="section-tag">{{ t('whatwedo.tag') }}</span>
          <h2>
            {{ t('whatwedo.title') }} <span>{{ t('whatwedo.titleHighlight') }}</span>
          </h2>
          <p>{{ t('whatwedo.subtitle') }}</p>
        </div>

        <div class="pillars-grid">
          <div v-for="pillar in pillars" :key="pillar.title" class="pillar-card">
            <div class="pillar-icon">
              <i :class="['fas', pillar.icon]"></i>
            </div>
            <h3>{{ pillar.title }}</h3>
            <p>{{ pillar.description }}</p>
            <ul class="pillar-features">
              <li v-for="feat in pillar.features" :key="feat">
                <i class="fas fa-check"></i> {{ feat }}
              </li>
            </ul>
            <router-link :to="pillar.link" class="pillar-cta">
              {{ t('services.learnMore') }} <i class="fas fa-arrow-right"></i>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════ SERVICES GRID ═══════════════ -->
    <section class="services-preview">
      <div class="container">
        <div class="section-title">
          <span class="section-tag">{{ t('services.tag') }}</span>
          <h2>
            {{ t('services.title') }} <span>{{ t('services.titleHighlight') }}</span>
          </h2>
          <p>{{ t('services.subtitle') }}</p>
        </div>

        <div class="services-grid">
          <ServiceCard
            v-for="service in services"
            :key="service.id"
            :icon="service.icon"
            :title="service.title"
            :description="service.description"
            :features="service.features"
          />
        </div>

        <div class="text-center mt-5">
          <router-link to="/services" class="btn btn-outline">
            {{ t('services.seeAll') }} <i class="fas fa-arrow-right"></i>
          </router-link>
        </div>
      </div>
    </section>

    <!-- ═══════════════ PROCESS ═══════════════ -->
    <section class="process-section">
      <div class="container">
        <div class="section-title">
          <span class="section-tag">{{ t('process.tag') }}</span>
          <h2>
            {{ t('process.title') }} <span>{{ t('process.titleHighlight') }}</span>
          </h2>
          <p>{{ t('process.subtitle') }}</p>
        </div>

        <div class="process-steps">
          <div v-for="(step, i) in processSteps" :key="step.title" class="process-step">
            <div class="step-number">{{ i + 1 }}</div>
            <div class="step-icon"><i :class="['fas', step.icon]"></i></div>
            <h4>{{ step.title }}</h4>
            <p>{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════ CTA BANNER ═══════════════ -->
    <section class="cta-banner">
      <div class="container">
        <div class="cta-content">
          <h2>
            {{ t('cta.title') }} <span class="tyrian-text">{{ t('cta.titleHighlight') }}</span>
            {{ t('cta.titleEnd') }}
          </h2>
          <p>
            {{ t('cta.subtitle') }}
          </p>
          <div class="cta-btns">
            <router-link to="/contact" class="btn btn-lg btn-glow">
              {{ t('cta.btnChat') }} <i class="fas fa-rocket"></i>
            </router-link>
            <router-link to="/pricing" class="btn btn-lg btn-outline">
              {{ t('cta.btnPricing') }}
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ServiceCard from '../components/ServiceCard.vue'
import { useI18n } from '../composables/useI18n'
import type { Service } from '../types'

const { t } = useI18n()

// ── Stats ──
const stats = computed(() => [
  { value: '150+', label: t('stats.projects') },
  { value: '99.9%', label: t('stats.uptime') },
  { value: '24/7', label: t('stats.available') },
  { value: '50+', label: t('stats.partners') },
])

// ── Three Pillars ──
const pillars = computed(() => [
  {
    icon: 'fa-wrench',
    title: t('pillar1.title'),
    description: t('pillar1.desc'),
    features: [t('pillar1.feat1'), t('pillar1.feat2'), t('pillar1.feat3'), t('pillar1.feat4')],
    link: '/services/code-fixing',
  },
  {
    icon: 'fa-robot',
    title: t('pillar2.title'),
    description: t('pillar2.desc'),
    features: [t('pillar2.feat1'), t('pillar2.feat2'), t('pillar2.feat3'), t('pillar2.feat4')],
    link: '/services/automation',
  },
  {
    icon: 'fa-brain',
    title: t('pillar3.title'),
    description: t('pillar3.desc'),
    features: [t('pillar3.feat1'), t('pillar3.feat2'), t('pillar3.feat3'), t('pillar3.feat4')],
    link: '/services/problem-solving',
  },
])

// ── Services ──
const services = computed<Service[]>(() => [
  {
    id: 1,
    icon: 'fa-code',
    title: t('service1.title'),
    description: t('service1.desc'),
    features: [t('service1.feat1'), t('service1.feat2'), t('service1.feat3')],
  },
  {
    id: 2,
    icon: 'fa-robot',
    title: t('service2.title'),
    description: t('service2.desc'),
    features: [t('service2.feat1'), t('service2.feat2'), t('service2.feat3')],
  },
  {
    id: 3,
    icon: 'fa-brain',
    title: t('service3.title'),
    description: t('service3.desc'),
    features: [t('service3.feat1'), t('service3.feat2'), t('service3.feat3')],
  },
])

// ── Process Steps ──
const processSteps = computed(() => [
  { icon: 'fa-comments', title: t('process1.title'), desc: t('process1.desc') },
  { icon: 'fa-search', title: t('process2.title'), desc: t('process2.desc') },
  { icon: 'fa-hammer', title: t('process3.title'), desc: t('process3.desc') },
  { icon: 'fa-rocket', title: t('process4.title'), desc: t('process4.desc') },
])

// ── Helpers ──
const particleStyle = (n: number) => ({
  left: `${(n * 5) % 100}%`,
  top: `${(n * 7 + 10) % 100}%`,
  animationDelay: `${n * 0.3}s`,
  animationDuration: `${4 + (n % 4)}s`,
})
</script>

<style scoped>
/* ═══════════════════════════════════════
   HERO
   ═══════════════════════════════════════ */
.hero {
  padding: 160px 0 100px;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.hero-particles {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: var(--tyrian-purple);
  border-radius: 50%;
  opacity: 0.3;
  animation: floatParticle 6s ease-in-out infinite;
}

@keyframes floatParticle {
  0%,
  100% {
    transform: translateY(0) scale(1);
    opacity: 0.2;
  }
  50% {
    transform: translateY(-40px) scale(1.5);
    opacity: 0.5;
  }
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 20px;
  background: rgba(155, 27, 109, 0.15);
  border: 1px solid var(--tyrian-purple);
  border-radius: 30px;
  font-size: 13px;
  font-weight: 600;
  color: var(--tyrian-light);
  margin-bottom: 24px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.badge-dot {
  width: 8px;
  height: 8px;
  background: var(--success);
  border-radius: 50%;
  animation: pulse-dot 2s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.3);
  }
}

.hero h1 {
  font-size: 58px;
  margin-bottom: 24px;
  line-height: 1.1;
  font-weight: 700;
}

.tyrian-text {
  color: var(--tyrian-purple);
  position: relative;
  display: inline-block;
}

.tyrian-text::after {
  content: '';
  position: absolute;
  bottom: 2px;
  left: 0;
  width: 100%;
  height: 10px;
  background: var(--tyrian-glow);
  z-index: -1;
}

.hero-sub {
  font-size: 19px;
  color: var(--text-gray);
  margin-bottom: 36px;
  max-width: 540px;
  line-height: 1.7;
}

.hero-sub strong {
  color: var(--tyrian-light);
}

.hero-btns {
  display: flex;
  gap: 16px;
  margin-bottom: 40px;
}

.btn-glow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 16px 32px;
  background: linear-gradient(135deg, var(--tyrian-purple), var(--tyrian-dark));
  color: white;
  text-decoration: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  box-shadow:
    0 4px 20px var(--tyrian-glow),
    0 0 40px rgba(155, 27, 109, 0.15);
  font-family: 'Inter', sans-serif;
}

.btn-glow:hover {
  transform: translateY(-3px);
  box-shadow:
    0 8px 30px var(--tyrian-glow),
    0 0 60px rgba(155, 27, 109, 0.25);
  background: linear-gradient(135deg, var(--tyrian-light), var(--tyrian-purple));
}

.owl-icon {
  font-size: 18px;
}

.hero-trust {
  display: flex;
  align-items: center;
  gap: 14px;
}

.trust-avatars {
  display: flex;
}

.avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--tyrian-purple), var(--tyrian-dark));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  color: white;
  border: 2px solid var(--black);
  margin-left: -8px;
}

.avatar:first-child {
  margin-left: 0;
}

.trust-text {
  font-size: 14px;
  color: var(--text-gray);
}

/* ── Code Window ── */
.code-window {
  background: var(--black-darker);
  border: 1px solid var(--black-lighter);
  border-radius: 12px;
  overflow: hidden;
  box-shadow:
    0 20px 60px rgba(0, 0, 0, 0.5),
    0 0 40px var(--tyrian-glow);
}

.code-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 18px;
  background: rgba(255, 255, 255, 0.03);
  border-bottom: 1px solid var(--black-lighter);
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dot.red {
  background: #ff5f57;
}
.dot.yellow {
  background: #febc2e;
}
.dot.green {
  background: #28c840;
}

.code-title {
  margin-left: 12px;
  font-size: 13px;
  color: var(--text-gray);
  font-family: 'Space Grotesk', monospace;
}

.code-body {
  padding: 20px 18px;
  font-family: 'Space Grotesk', monospace;
  font-size: 15px;
  line-height: 1.8;
}

.code-line {
  display: flex;
  align-items: center;
  gap: 16px;
}

.code-line.blank {
  height: 28px;
}

.line-num {
  color: var(--text-dark);
  width: 20px;
  text-align: right;
  font-size: 13px;
  user-select: none;
}

.code-comment {
  color: #6a737d;
}
.code-red {
  color: #f97583;
  text-decoration: line-through;
  opacity: 0.6;
}
.code-green {
  color: #85e89d;
}
.code-line.strike {
  opacity: 0.5;
}

/* ═══════════════════════════════════════
   STATS BAR
   ═══════════════════════════════════════ */
.stats-bar {
  padding: 50px 0;
  background: linear-gradient(180deg, var(--black-darker), var(--black));
  border-top: 1px solid var(--tyrian-dark);
  border-bottom: 1px solid var(--tyrian-dark);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  text-align: center;
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stat-number {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 42px;
  font-weight: 700;
  color: var(--tyrian-light);
  line-height: 1;
}

.stat-label {
  font-size: 15px;
  color: var(--text-gray);
  font-weight: 500;
}

/* ═══════════════════════════════════════
   THREE PILLARS
   ═══════════════════════════════════════ */
.what-we-do {
  padding: 120px 0;
}

.section-tag {
  display: inline-block;
  padding: 6px 16px;
  background: rgba(155, 27, 109, 0.15);
  border: 1px solid var(--tyrian-dark);
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  color: var(--tyrian-light);
  margin-bottom: 16px;
}

.section-title {
  text-align: center;
  margin-bottom: 60px;
}

.section-title h2 {
  font-size: 44px;
  margin-bottom: 16px;
}

.section-title h2 span {
  color: var(--tyrian-purple);
}

.section-title p {
  color: var(--text-gray);
  font-size: 18px;
  max-width: 600px;
  margin: 0 auto;
}

.pillars-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.pillar-card {
  background: var(--black-darker);
  border: 1px solid var(--black-lighter);
  border-radius: 16px;
  padding: 40px 30px;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.pillar-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--tyrian-dark), var(--tyrian-light), var(--tyrian-dark));
  opacity: 0;
  transition: opacity 0.4s ease;
}

.pillar-card:hover {
  transform: translateY(-8px);
  border-color: var(--tyrian-purple);
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.3),
    0 0 30px var(--tyrian-glow);
}

.pillar-card:hover::before {
  opacity: 1;
}

.pillar-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--tyrian-purple), var(--tyrian-dark));
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
  margin-bottom: 24px;
}

.pillar-card h3 {
  font-size: 24px;
  margin-bottom: 12px;
}

.pillar-card > p {
  color: var(--text-gray);
  margin-bottom: 24px;
  line-height: 1.6;
}

.pillar-features {
  list-style: none;
  padding: 0;
  margin-bottom: 24px;
}

.pillar-features li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 0;
  color: var(--text-gray);
  font-size: 15px;
}

.pillar-features i {
  color: var(--success);
  font-size: 12px;
}

.pillar-cta {
  color: var(--tyrian-light);
  text-decoration: none;
  font-weight: 600;
  font-size: 15px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: gap 0.3s ease;
}

.pillar-cta:hover {
  gap: 14px;
  color: var(--tyrian-purple);
}

/* ═══════════════════════════════════════
   ATHENA SHOWCASE
   ═══════════════════════════════════════ */
.athena-showcase {
  padding: 120px 0;
  background: linear-gradient(135deg, var(--black-darker), var(--black));
  border-top: 1px solid var(--tyrian-dark);
  border-bottom: 1px solid var(--tyrian-dark);
  overflow: hidden;
}

.athena-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.athena-visual {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.athena-orb {
  width: 320px;
  height: 320px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.orb-ring {
  position: absolute;
  border: 1px solid var(--tyrian-purple);
  border-radius: 50%;
  opacity: 0.3;
}

.ring-1 {
  width: 100%;
  height: 100%;
  animation: spinRing 12s linear infinite;
}

.ring-2 {
  width: 80%;
  height: 80%;
  animation: spinRing 8s linear infinite reverse;
  border-style: dashed;
}

.ring-3 {
  width: 60%;
  height: 60%;
  animation: spinRing 6s linear infinite;
}

@keyframes spinRing {
  to {
    transform: rotate(360deg);
  }
}

.orb-core {
  width: 140px;
  height: 140px;
  background: radial-gradient(circle, var(--tyrian-light), var(--tyrian-dark));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:
    0 0 60px var(--tyrian-glow),
    0 0 120px rgba(155, 27, 109, 0.15);
  animation: pulsate 4s ease-in-out infinite;
  z-index: 1;
}

.owl-emoji {
  font-size: 56px;
}

@keyframes pulsate {
  0%,
  100% {
    box-shadow: 0 0 40px var(--tyrian-glow);
  }
  50% {
    box-shadow:
      0 0 80px var(--tyrian-glow),
      0 0 120px rgba(155, 27, 109, 0.2);
  }
}

.athena-glow {
  position: absolute;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(155, 27, 109, 0.2), transparent 70%);
  border-radius: 50%;
  z-index: 0;
}

.athena-info h2 {
  font-size: 44px;
  margin-bottom: 20px;
}

.athena-desc {
  color: var(--text-gray);
  font-size: 17px;
  line-height: 1.7;
  margin-bottom: 32px;
}

.athena-capabilities {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 36px;
}

.cap-item {
  display: flex;
  gap: 14px;
  align-items: flex-start;
}

.cap-icon {
  width: 40px;
  height: 40px;
  background: rgba(155, 27, 109, 0.2);
  border: 1px solid var(--tyrian-dark);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--tyrian-light);
  font-size: 16px;
  flex-shrink: 0;
}

.cap-item h4 {
  font-size: 15px;
  margin-bottom: 4px;
}

.cap-item p {
  font-size: 13px;
  color: var(--text-gray);
  line-height: 1.4;
}

.athena-actions {
  display: flex;
  gap: 16px;
}

/* ═══════════════════════════════════════
   SERVICES PREVIEW
   ═══════════════════════════════════════ */
.services-preview {
  padding: 120px 0;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

/* ═══════════════════════════════════════
   PROCESS
   ═══════════════════════════════════════ */
.process-section {
  padding: 120px 0;
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  position: relative;
}

.process-steps::before {
  content: '';
  position: absolute;
  top: 40px;
  left: 15%;
  right: 15%;
  height: 2px;
  background: linear-gradient(90deg, var(--tyrian-dark), var(--tyrian-light), var(--tyrian-dark));
  z-index: 0;
}

.process-step {
  text-align: center;
  position: relative;
  z-index: 1;
}

.step-number {
  width: 32px;
  height: 32px;
  background: var(--tyrian-purple);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  margin: 0 auto 16px;
  border: 3px solid var(--black);
  box-shadow: 0 0 0 3px var(--tyrian-purple);
}

.step-icon {
  width: 56px;
  height: 56px;
  background: var(--black-darker);
  border: 1px solid var(--black-lighter);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  color: var(--tyrian-light);
  margin: 0 auto 16px;
}

.process-step h4 {
  font-size: 18px;
  margin-bottom: 8px;
}

.process-step p {
  color: var(--text-gray);
  font-size: 14px;
  max-width: 200px;
  margin: 0 auto;
  line-height: 1.5;
}

/* ═══════════════════════════════════════
   CTA BANNER
   ═══════════════════════════════════════ */
.cta-banner {
  padding: 100px 0;
  background: linear-gradient(
    135deg,
    var(--tyrian-dark),
    var(--black-darker) 40%,
    var(--black-darker) 60%,
    var(--tyrian-dark)
  );
  border-top: 1px solid var(--tyrian-purple);
  position: relative;
  overflow: hidden;
}

.cta-banner::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle at center, rgba(155, 27, 109, 0.1), transparent 50%);
  animation: rotateBg 20s linear infinite;
}

@keyframes rotateBg {
  to {
    transform: rotate(360deg);
  }
}

.cta-content {
  text-align: center;
  position: relative;
  z-index: 1;
}

.cta-content h2 {
  font-size: 44px;
  margin-bottom: 16px;
}

.cta-content p {
  color: var(--text-gray);
  font-size: 18px;
  margin-bottom: 36px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.cta-btns {
  display: flex;
  gap: 16px;
  justify-content: center;
}

/* ═══════════════════════════════════════
   ANIMATIONS
   ═══════════════════════════════════════ */
.animate-fade-in {
  animation: fadeIn 0.8s ease forwards;
  opacity: 0;
}

.delay-1 {
  animation-delay: 0.15s;
}
.delay-2 {
  animation-delay: 0.3s;
}
.delay-3 {
  animation-delay: 0.45s;
}
.delay-4 {
  animation-delay: 0.6s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ═══════════════════════════════════════
   RESPONSIVE
   ═══════════════════════════════════════ */
@media (max-width: 1024px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 50px;
  }

  .hero h1 {
    font-size: 44px;
  }

  .athena-grid {
    grid-template-columns: 1fr;
    gap: 60px;
  }

  .athena-visual {
    order: -1;
  }

  .pillars-grid {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto;
  }

  .process-steps {
    grid-template-columns: repeat(2, 1fr);
  }

  .process-steps::before {
    display: none;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 120px 0 60px;
    min-height: auto;
  }
  .hero h1 {
    font-size: 36px;
  }
  .hero-sub {
    font-size: 16px;
  }
  .hero-btns {
    flex-direction: column;
  }
  .hero-btns .btn,
  .hero-btns .btn-glow {
    text-align: center;
    width: 100%;
    justify-content: center;
  }
  .code-window {
    display: none;
  }
  .section-title h2 {
    font-size: 32px;
  }
  .athena-info h2 {
    font-size: 32px;
  }
  .athena-capabilities {
    grid-template-columns: 1fr;
  }
  .athena-actions {
    flex-direction: column;
  }
  .athena-actions .btn {
    text-align: center;
    justify-content: center;
  }
  .cta-content h2 {
    font-size: 32px;
  }
  .cta-btns {
    flex-direction: column;
    align-items: center;
  }
  .cta-btns .btn {
    width: 100%;
    text-align: center;
    justify-content: center;
  }
  .process-steps {
    grid-template-columns: 1fr;
    max-width: 300px;
    margin: 0 auto;
  }
}

@media (max-width: 480px) {
  .hero h1 {
    font-size: 30px;
  }
  .stat-number {
    font-size: 32px;
  }
  .stats-grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
