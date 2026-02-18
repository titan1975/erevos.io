<template>
  <header :class="{ scrolled: isScrolled }">
    <div class="container">
      <nav class="navbar">
        <router-link to="/" class="logo"> erevos<span>.io</span> </router-link>

        <ul class="nav-links" :class="{ active: isMenuOpen }">
          <li v-for="item in navItems" :key="item.path">
            <router-link :to="item.path" @click="closeMenu">
              {{ item.name }}
            </router-link>
          </li>
        </ul>

        <div class="mobile-toggle" @click="toggleMenu">
          <i :class="isMenuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import type { NavItem } from '../types'

// Navigation items with TypeScript type safety
const navItems: NavItem[] = [
  { path: '/', name: 'Home' },
  { path: '/services', name: 'Services' },
  { path: '/about', name: 'About' },
  { path: '/projects', name: 'Projects' },
  { path: '/contact', name: 'Contact' },
]

// State with TypeScript inference
const isScrolled = ref<boolean>(false)
const isMenuOpen = ref<boolean>(false)

// Methods with explicit return types
const toggleMenu = (): void => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = (): void => {
  isMenuOpen.value = false
}

const handleScroll = (): void => {
  isScrolled.value = window.scrollY > 50
}

// Lifecycle hooks
onMounted((): void => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted((): void => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 20px 0;
  background-color: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #2a2a2a;
  transition: all 0.3s ease;
}

header.scrolled {
  padding: 15px 0;
  background-color: var(--black-darker);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 28px;
  font-weight: 700;
  color: white;
  text-decoration: none;
}

.logo span {
  color: var(--tyrian-purple);
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 40px;
}

.nav-links a {
  color: var(--text-light);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: var(--tyrian-purple);
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--tyrian-purple);
  transition: width 0.3s ease;
}

.nav-links a:hover::after,
.nav-links a.router-link-active::after {
  width: 100%;
}

.mobile-toggle {
  display: none;
  font-size: 24px;
  cursor: pointer;
  color: var(--tyrian-purple);
}

@media (max-width: 768px) {
  .mobile-toggle {
    display: block;
  }

  .nav-links {
    position: fixed;
    top: 80px;
    left: 0;
    width: 100%;
    background-color: var(--black-darker);
    flex-direction: column;
    align-items: center;
    padding: 40px 0;
    gap: 25px;
    transform: translateY(-150%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    border-top: 2px solid var(--tyrian-purple);
    border-bottom: 2px solid var(--tyrian-purple);
  }

  .nav-links.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
}
</style>
