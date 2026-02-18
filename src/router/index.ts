import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

// ---- VIEW IMPORTS ----
// Home
import HomeView from '../views/HomeView.vue'

// Services
import ServicesView from '../views/ServicesView.vue'

// About
import AboutView from '../views/AboutView.vue'

// Projects
import ProjectsView from '../views/ProjectsView.vue'

// Contact
import ContactView from '../views/ContactView.vue'

// ---- LAZY-LOADED VIEWS (for better performance) ----

// Service Details
const ServiceDetailView = () => import('../views/ServiceDetailView.vue')

// Project Details
const ProjectDetailView = () => import('../views/ProjectDetailView.vue')

// Blog
const BlogView = () => import('../views/BlogView.vue')
const BlogPostView = () => import('../views/BlogPostView.vue')
const BlogCategoryView = () => import('../views/BlogCategoryView.vue')

// Legal
const PrivacyView = () => import('../views/PrivacyView.vue')
const TermsView = () => import('../views/TermsView.vue')
const CookiesView = () => import('../views/CookiesView.vue')

// Company
const CareersView = () => import('../views/CareersView.vue')
const TeamView = () => import('../views/TeamView.vue')

// Static Pages
const FAQView = () => import('../views/FAQView.vue')
const PricingView = () => import('../views/PricingView.vue')

// Utilities
const NotFoundView = () => import('../views/NotFoundView.vue')
const MaintenanceView = () => import('../views/MaintenanceView.vue')

// ---- ROUTE TYPE DEFINITIONS ----
export type RouteNames =
  | 'home'
  | 'services'
  | 'service-detail'
  | 'about'
  | 'team'
  | 'careers'
  | 'projects'
  | 'project-detail'
  | 'contact'
  | 'blog'
  | 'blog-post'
  | 'blog-category'
  | 'privacy'
  | 'terms'
  | 'cookies'
  | 'faq'
  | 'pricing'
  | 'not-found'
  | 'maintenance'

// ---- ROUTE CONFIGURATION ----
const routes: RouteRecordRaw[] = [
  // === PUBLIC ROUTES ===
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Home',
      description: 'Erevos.io - Innovative Software Solutions',
      requiresAuth: false,
      layout: 'default',
    },
  },

  // === SERVICES SECTION ===
  {
    path: '/services',
    name: 'services',
    component: ServicesView,
    meta: {
      title: 'Services',
      description: 'Software development, code fixing, and automation services',
      requiresAuth: false,
      layout: 'default',
    },
  },
  {
    path: '/services/:id',
    name: 'service-detail',
    component: ServiceDetailView,
    meta: {
      title: 'Service Details',
      description: 'Detailed information about our services',
      requiresAuth: false,
      layout: 'default',
    },
    props: true, // Pass route params as props
  },

  // === ABOUT SECTION ===
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: {
      title: 'About Us',
      description: 'Learn about Erevos.io and our mission',
      requiresAuth: false,
      layout: 'default',
    },
  },
  {
    path: '/team',
    name: 'team',
    component: TeamView,
    meta: {
      title: 'Our Team',
      description: 'Meet the experts behind Erevos.io',
      requiresAuth: false,
      layout: 'default',
    },
  },
  {
    path: '/careers',
    name: 'careers',
    component: CareersView,
    meta: {
      title: 'Careers',
      description: 'Join the Erevos.io team',
      requiresAuth: false,
      layout: 'default',
    },
  },

  // === PROJECTS SECTION ===
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView,
    meta: {
      title: 'Projects',
      description: 'Our successful software development projects',
      requiresAuth: false,
      layout: 'default',
    },
  },
  {
    path: '/projects/:id',
    name: 'project-detail',
    component: ProjectDetailView,
    meta: {
      title: 'Project Details',
      description: 'Detailed case study of our projects',
      requiresAuth: false,
      layout: 'default',
    },
    props: true,
  },

  // === CONTACT SECTION ===
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    meta: {
      title: "Let's Talk",
      description: "Got a project or a problem? Let's chat.",
      requiresAuth: false,
      layout: 'default',
    },
  },

  // === BLOG SECTION ===
  {
    path: '/blog',
    name: 'blog',
    component: BlogView,
    meta: {
      title: 'Blog',
      description: 'Latest insights on software development and automation',
      requiresAuth: false,
      layout: 'blog',
    },
  },
  {
    path: '/blog/category/:category',
    name: 'blog-category',
    component: BlogCategoryView,
    meta: {
      title: 'Blog Category',
      description: 'Blog posts by category',
      requiresAuth: false,
      layout: 'blog',
    },
    props: true,
  },
  {
    path: '/blog/:slug',
    name: 'blog-post',
    component: BlogPostView,
    meta: {
      title: 'Blog Post',
      description: 'Read our latest articles',
      requiresAuth: false,
      layout: 'blog',
    },
    props: true,
  },

  // === COMPANY INFO ===
  {
    path: '/faq',
    name: 'faq',
    component: FAQView,
    meta: {
      title: 'FAQ',
      description: 'Frequently asked questions',
      requiresAuth: false,
      layout: 'default',
    },
  },
  {
    path: '/pricing',
    name: 'pricing',
    component: PricingView,
    meta: {
      title: 'Pricing',
      description: 'Our service pricing plans',
      requiresAuth: false,
      layout: 'default',
    },
  },

  // === LEGAL SECTION ===
  {
    path: '/privacy',
    name: 'privacy',
    component: PrivacyView,
    meta: {
      title: 'Privacy Policy',
      description: 'Our privacy policy and data handling practices',
      requiresAuth: false,
      layout: 'default',
    },
  },
  {
    path: '/terms',
    name: 'terms',
    component: TermsView,
    meta: {
      title: 'Terms of Service',
      description: 'Terms and conditions for using our services',
      requiresAuth: false,
      layout: 'default',
    },
  },
  {
    path: '/cookies',
    name: 'cookies',
    component: CookiesView,
    meta: {
      title: 'Cookie Policy',
      description: 'How we use cookies',
      requiresAuth: false,
      layout: 'default',
    },
  },

  // === UTILITY ROUTES ===
  {
    path: '/maintenance',
    name: 'maintenance',
    component: MaintenanceView,
    meta: {
      title: 'Maintenance',
      description: 'Site under maintenance',
      requiresAuth: false,
      layout: 'minimal',
    },
  },

  // === 404 CATCH-ALL ===
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundView,
    meta: {
      title: 'Page Not Found',
      description: 'The page you are looking for does not exist',
      requiresAuth: false,
      layout: 'default',
    },
  },
]

// === ROUTER INSTANCE ===
const router = createRouter({
  history: createWebHistory(), // Uses HTML5 history mode
  routes,
  scrollBehavior(to, _from, savedPosition) {
    // Smooth scroll behavior
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  },
})

// === TYPES FOR META FIELDS ===
declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    description?: string
    requiresAuth?: boolean
    layout?: 'default' | 'blog' | 'minimal'
    breadcrumb?: string
    permissions?: string[]
  }
}

// === NAVIGATION GUARDS ===

// 1. Title and Meta Tags Guard
router.beforeEach((to, _from, next) => {
  // Set page title
  const title = to.meta.title as string
  const baseTitle = 'Erevos.io'

  if (title) {
    document.title = `${title} | ${baseTitle}`
  } else {
    document.title = baseTitle
  }

  // Set meta description
  const description =
    (to.meta.description as string) ||
    'Innovative software solutions - We fix broken code, automate processes, and solve technical problems'
  let metaDescription = document.querySelector('meta[name="description"]')

  if (!metaDescription) {
    metaDescription = document.createElement('meta')
    metaDescription.setAttribute('name', 'description')
    document.head.appendChild(metaDescription)
  }

  metaDescription.setAttribute('content', description)

  next()
})

// 2. Authentication Guard (for future use)
router.beforeEach((to, _from, next) => {
  const requiresAuth = to.meta.requiresAuth
  const isAuthenticated = false // Replace with actual auth check

  if (requiresAuth && !isAuthenticated) {
    next({ name: 'home', query: { redirect: to.fullPath } })
  } else {
    next()
  }
})

// 3. Analytics Guard (optional)
router.afterEach((to, _from) => {
  // Send page view to analytics
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('config', import.meta.env.VITE_GA_ID, {
      page_path: to.fullPath,
    })
  }

  // Scroll to top on route change
  window.scrollTo(0, 0)
})

// === ERROR HANDLING ===
router.onError((error) => {
  console.error('Router error:', error)
  // You could redirect to an error page here
})

// === EXPORT ===
export default router
