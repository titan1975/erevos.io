<template>
  <main class="legal-page">
    <section class="page-hero">
      <div class="container">
        <h1>Cookie <span class="tyrian-text">Policy</span></h1>
        <p>Last updated: February 2026</p>
      </div>
    </section>

    <section class="legal-section">
      <div class="container">
        <article class="card legal-content">
          <h2>1. What Are Cookies</h2>
          <p>
            Cookies are small text files stored on your device when you visit our website. They help
            us provide a better user experience.
          </p>

          <h2>2. How We Use Cookies</h2>
          <p>
            We use cookies for essential website functionality, analytics, and to remember your
            preferences.
          </p>

          <h2>3. Types of Cookies We Use</h2>
          <p><strong>Essential Cookies:</strong> Required for the website to function properly.</p>
          <p>
            <strong>Analytics Cookies:</strong> Help us understand how visitors interact with our
            website.
          </p>
          <p><strong>Preference Cookies:</strong> Remember your settings and choices.</p>

          <h2>4. Managing Cookies</h2>
          <p>
            You can control and manage cookies through your browser settings. Note that disabling
            certain cookies may affect website functionality.
          </p>

          <h2>5. Questions?</h2>
          <p>
            Got questions about cookies? Reach out at
            <a href="mailto:privacy@erevos.io">privacy@erevos.io</a>.
          </p>
        </article>
      </div>
    </section>
  </main>
</template>

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

.legal-section {
  padding-bottom: 100px;
}

.legal-content {
  max-width: 800px;
  margin: 0 auto;
}

.legal-content h2 {
  font-size: 24px;
  margin: 30px 0 12px;
  color: var(--tyrian-light);
}

.legal-content h2:first-child {
  margin-top: 0;
}

.legal-content p {
  color: var(--text-gray);
  line-height: 1.8;
  margin-bottom: 16px;
}

.legal-content a {
  color: var(--tyrian-purple);
}
</style>
