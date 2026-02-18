<template>
  <main class="legal-page">
    <section class="page-hero">
      <div class="container">
        <h1>Privacy <span class="tyrian-text">Policy</span></h1>
        <p>Last updated: February 2026</p>
      </div>
    </section>

    <section class="legal-section">
      <div class="container">
        <article class="card legal-content">
          <h2>1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you fill out a contact
            form or communicate with us via email.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our services,
            communicate with you, and respond to your inquiries.
          </p>

          <h2>3. Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to third parties
            without your consent, except as described in this policy.
          </p>

          <h2>4. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information against
            unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2>5. Get In Touch</h2>
          <p>
            Got questions about this Privacy Policy? Just drop us a line at
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
