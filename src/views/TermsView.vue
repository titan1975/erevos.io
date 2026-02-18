<template>
  <main class="legal-page">
    <section class="page-hero">
      <div class="container">
        <h1>Terms of <span class="tyrian-text">Service</span></h1>
        <p>Last updated: February 2026</p>
      </div>
    </section>

    <section class="legal-section">
      <div class="container">
        <article class="card legal-content">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using Erevos.io, you accept and agree to be bound by these Terms of
            Service.
          </p>

          <h2>2. Services</h2>
          <p>
            Erevos.io provides software development, code fixing, process automation, and technical
            consulting services as described on our website.
          </p>

          <h2>3. Intellectual Property</h2>
          <p>
            All content, code, and materials on this website are the property of Erevos.io unless
            otherwise stated. Custom work delivered to clients becomes the client's property upon
            full payment.
          </p>

          <h2>4. Limitation of Liability</h2>
          <p>
            Erevos.io shall not be liable for any indirect, incidental, special, or consequential
            damages arising from the use of our services.
          </p>

          <h2>5. Questions?</h2>
          <p>
            Got questions about these Terms? Reach out at
            <a href="mailto:legal@erevos.io">legal@erevos.io</a>.
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
