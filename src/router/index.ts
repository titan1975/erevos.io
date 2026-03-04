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
const ContentStudioView = () => import('../views/ContentStudioView.vue')

// Athena Chat (hidden for now)
// const AthenaChatView = () => import('../views/AthenaChatView.vue')

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
  | 'athena'
  | 'blog'
  | 'blog-post'
  | 'blog-category'
  | 'content-studio'
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
      title: 'Code Fixing, Automation & Technical Consulting',
      description:
        'Erevos.io fixes broken code, automates your workflows, and solves tough technical problems. No BS, just solid engineering. Get a free consultation.',
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
      title: 'Services - Code Fixing, Automation & Consulting',
      description:
        'We fix broken code, automate repetitive processes, rescue legacy systems, build APIs, and provide honest tech consulting. See how we can help.',
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
      description: 'Learn more about this Erevos.io service and how we can help your project.',
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
      title: 'About Us - The Team Behind Erevos.io',
      description:
        "We're a small team of engineers who fix code, automate workflows, and solve hard technical problems. No corporate fluff — just real work.",
      requiresAuth: false,
      layout: 'default',
    },
  },
  {
    path: '/team',
    name: 'team',
    component: TeamView,
    meta: {
      title: 'Our Team - Engineers Who Get Things Done',
      description: 'Meet the people behind Erevos.io. Real engineers solving real problems.',
      requiresAuth: false,
      layout: 'default',
    },
  },
  {
    path: '/careers',
    name: 'careers',
    component: CareersView,
    meta: {
      title: 'Careers - Join the Erevos.io Team',
      description:
        'Looking for talented developers and engineers. Work on real projects, no bureaucracy.',
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
      title: "Projects - Real Work We've Done",
      description:
        "Check out our software development projects. Code fixes, automation builds, and system rescues we've shipped.",
      requiresAuth: false,
      layout: 'default',
    },
  },
  {
    path: '/projects/:id',
    name: 'project-detail',
    component: ProjectDetailView,
    meta: {
      title: 'Project Case Study',
      description: 'See how we tackled this project and the results we delivered.',
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
      title: "Let's Talk - Get a Free Consultation",
      description:
        "Got a broken codebase or a project idea? Drop us a line. We'll give you honest feedback — no sales pitch.",
      requiresAuth: false,
      layout: 'default',
    },
  },

  // === ATHENA AI CHAT (hidden for now) ===
  // {
  //   path: '/athena',
  //   name: 'athena',
  //   component: AthenaChatView,
  //   meta: {
  //     title: 'Chat with Athena - AI Assistant',
  //     description:
  //       'Ask Athena, our AI assistant, about code, automation, or any technical questions.',
  //     requiresAuth: false,
  //     layout: 'default',
  //   },
  // },

  // === BLOG SECTION ===
  {
    path: '/blog',
    name: 'blog',
    component: BlogView,
    meta: {
      title: 'Blog - Software Engineering Insights',
      description:
        'Practical tips on code fixing, automation, and software engineering. No fluff, just useful stuff.',
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
  {
    path: '/studio',
    name: 'content-studio',
    component: ContentStudioView,
    meta: {
      title: 'Content Studio',
      description: 'Add articles and YouTube video links for the site content.',
      requiresAuth: false,
      layout: 'default',
    },
  },

  // === COMPANY INFO ===
  {
    path: '/faq',
    name: 'faq',
    component: FAQView,
    meta: {
      title: 'FAQ - Common Questions Answered',
      description:
        'Got questions about how we work, what we charge, or how to get started? Here are straight answers.',
      requiresAuth: false,
      layout: 'default',
    },
  },
  {
    path: '/pricing',
    name: 'pricing',
    component: PricingView,
    meta: {
      title: 'Pricing - Transparent Plans, No Hidden Fees',
      description:
        'See what our services cost. Starter, Professional, and Enterprise plans. Straight up pricing.',
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

// Helper: set or create meta tag
function setMeta(attr: string, key: string, content: string): void {
  let el = document.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

// Helper: set or create link tag
function setLink(rel: string, href: string): void {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

// 1. Title, Meta, OG Tags & Canonical URL Guard
router.beforeEach((to, _from, next) => {
  const title = to.meta.title as string
  const baseTitle = 'Erevos.io'
  const baseUrl = 'https://erevos.io'
  const fullTitle = title ? `${title} | ${baseTitle}` : baseTitle

  // Page title
  document.title = fullTitle

  // Meta description
  const description =
    (to.meta.description as string) ||
    'Erevos.io fixes broken code, automates workflows, and solves tough technical problems. No BS, just solid engineering.'
  setMeta('name', 'description', description)

  // Canonical URL
  const canonicalUrl = `${baseUrl}${to.path === '/' ? '' : to.path}`
  setLink('canonical', canonicalUrl)

  // Open Graph tags
  setMeta('property', 'og:title', fullTitle)
  setMeta('property', 'og:description', description)
  setMeta('property', 'og:url', canonicalUrl)
  setMeta('property', 'og:type', 'website')
  setMeta('property', 'og:site_name', 'Erevos.io')
  setMeta('property', 'og:image', `${baseUrl}/og-image.png`)

  // Twitter Card tags
  setMeta('name', 'twitter:card', 'summary_large_image')
  setMeta('name', 'twitter:title', fullTitle)
  setMeta('name', 'twitter:description', description)
  setMeta('name', 'twitter:image', `${baseUrl}/og-image.png`)

  // Robots
  const noIndex = ['not-found', 'maintenance']
  if (noIndex.includes(to.name as string)) {
    setMeta('name', 'robots', 'noindex, nofollow')
  } else {
    setMeta('name', 'robots', 'index, follow')
  }

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
