import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView'
import CategoryView from '@/views/CategoryView'
import ForumsView from '@/views/ForumsView'
import ThreadsView from '@/views/ThreadsView'
import ThreadPosts from '@/views/ThreadPosts'
import ProfileView from '@/views/ProfileView'

const routes = [
  {
    name: 'HomeView',
    path: '/',
    component: HomeView
  },
  {
    name: 'CategoryView',
    path: '/category',
    component: CategoryView
  },
  {
    name: 'ForumsView',
    path: '/forums',
    component: ForumsView
  },
  {
    name: 'ThreadsView',
    path: '/threads',
    component: ThreadsView
  },
  {
    name: 'ThreadPosts',
    path: '/threads/:id',
    component: ThreadPosts
  },
  {
    name: 'ProfileView',
    path: '/me',
    component: ProfileView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
