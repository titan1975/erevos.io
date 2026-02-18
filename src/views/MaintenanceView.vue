<template>
  <main class="maintenance-page">
    <section class="maintenance-section">
      <div class="container text-center">
        <div class="maintenance-icon">�</div>
        <h1>Under <span class="tyrian-text">Maintenance</span></h1>
        <p>
          We're currently performing scheduled maintenance to improve our services. We'll be back
          shortly!
        </p>
        <div class="maintenance-note mt-4">
          <span>We're upgrading our systems...</span>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.maintenance-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.maintenance-icon {
  font-size: 80px;
  margin-bottom: 20px;
}

.maintenance-section h1 {
  font-size: 48px;
  margin-bottom: 16px;
}

.maintenance-section p {
  color: var(--text-gray);
  font-size: 18px;
  max-width: 500px;
  margin: 0 auto;
}

.maintenance-note {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: var(--text-gray);
  font-style: italic;
}
</style>
