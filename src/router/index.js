import { createRouter, createWebHistory } from 'vue-router'
import movieRouter from './movie'
import cinemaRouter from './cinema'
import mineRouter from './mine'

const routes = [
  movieRouter,
  cinemaRouter,
  mineRouter,
  {
    path : '/*',
    redirect : '/movie'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), //与index.html中的<link rel="icon" href="<%= BASE_URL %>favicon.ico">对应
  routes
})

export default router
