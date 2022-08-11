import { createRouter, createWebHashHistory } from 'vue-router'

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
      component: () => import('@/views/reports/components/Summary.vue')
    }, {
      path: '/reports/ancestry',
      name: 'Ancestry',
      component: () => import('@/views/reports/components/Ancestry.vue')
    }, {
      path: '/reports/sequencing',
      name: 'Sequencing Statistics',
      component: () => import('@/views/reports/components/Sequencing.vue')
    }, {
      path: '/reports/diseases',
      name: 'Diseases',
      component: () => import('@/views/reports/components/Diseases.vue')
    }]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router