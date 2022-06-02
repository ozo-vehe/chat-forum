import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView'
import CategoryView from '@/views/CategoryView'
import ForumsView from '@/views/ForumsView'
import ThreadsView from '@/views/ThreadsView'
import ThreadPosts from '@/views/ThreadPosts'
import EditThreadView from '@/views/EditThreadView'
import CreateThreadView from '@/views/CreateThreadView'
import ProfileView from '@/views/ProfileView'
import ListView from '@/views/ListView'

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
    name: 'ListView',
    path: '/category/:id',
    component: ListView
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
    name: 'EditThreadView',
    path: '/threads/:id/edit',
    component: EditThreadView
  },
  {
    name: 'CreateThreadView',
    path: '/threads/create',
    component: CreateThreadView
  },
  {
    name: 'ProfileView',
    path: '/me',
    component: ProfileView
  },
  {
    name: 'EditProfile',
    path: '/me/edit',
    component: ProfileView,
    props: { editProfile: true }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to) {
    return {
      top: 0,
      behavior: 'smooth'
    }
  }
})

export default router
