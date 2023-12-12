import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/Homepage.vue'
import Question from '../views/Question.vue'
import Paper from '../views/Paper.vue'

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: Homepage
  },
  {
    path: '/question',
    name: 'question',
    component: Question
  },
  {
    path: '/paper',
    name: 'paper',
    component: Paper
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router