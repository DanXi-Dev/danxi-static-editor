import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/home', component: () => import('../views/HomeView.vue') },
    { path: '/', component: () => import('../views/HelloView.vue') },
    { path: '/editor', component: () => import('../views/EditorView.vue') }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
