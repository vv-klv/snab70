import ContactsAndMapView from '@/views/ContactsAndMapView';
import RentView from '@/views/RentView';
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/rent'
  },
  {
    path: '/rent',
    name: 'rent',
    component: RentView
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsAndMapView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
