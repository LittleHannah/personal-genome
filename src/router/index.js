import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home/index.vue')
  },
  { 
    path: '/',
    redirect: { name: 'Home' }
  },
  {
    path: '/reports',
    name: 'Reports',
    redirect: '/reports/summary',
    component: () => import('@/views/reports/index.vue'),
    children: [{
      path: '/reports/summary',
      name: 'Summary',
      component: () => import('@/views/reports/pages/Summary.vue'),
      meta: { contents: ['hello', 'hi', 'okay']}
    }, {
      path: '/reports/admixture',
      name: 'Ancestry',
      component: () => import('@/views/reports/pages/Admixture.vue')
    }]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router