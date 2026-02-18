<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
    <AthenaBot />
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import AthenaBot from './components/AthenaBot.vue'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');
</style>
