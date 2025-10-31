// src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../../src/pages/Home.vue'
import Favorites from '../../src/pages/Favorites.vue'
import Filter from '../../src/pages/Filter.vue'
import AnimeDetail from '../../src/pages/AnimeDetail.vue'
import NotFound from '../../src/pages/NotFound.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/favorites', name: 'favorites', component: Favorites },
  { path: '/filter', name: 'filter', component: Filter },
  { path: '/anime_detail/:id', name: 'anime_detail', component: AnimeDetail },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
