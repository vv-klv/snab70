import ContactsAndMapView from '@/views/ContactsAndMapView';
import RentView from '@/views/RentView';
import RulesView from '@/views/RulesView';
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'rent',
    component: RentView
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsAndMapView
  },
  {
    path: '/rules',
    name: 'rules',
    component: RulesView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
