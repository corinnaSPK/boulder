import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },   {
      path: '/datenschutz',
      name: 'datenschutz',
    
      component: () => import('../views/DSGVOView.vue')
    },  {
      path: '/impressum',
      name: 'impressum',
    
      component: () => import('../views/ImpressumView.vue')
    }
  ], 
  scrollBehavior(to, from, savedPosition) {
  if (to.hash) {
    // Required because our <RouterView> is wrapped in a <Transition>
    // So elements are mounted after a delay
    console.log(to.hash);
    tryScrollToAnchor(to.hash, 1000, 100);
  }
  /*  else if (savedPosition) {
    return savedPosition;
  } */
   else {
    return { top:0 };
  }
}
})

export default router
