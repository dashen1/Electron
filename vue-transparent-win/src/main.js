import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component:Home
    },
    {
        path: '/Helloworld',
        name: 'Helloworld',
        component: () => import('./components/HelloWorld.vue')
    },
    {
        path: '/Installation',
        name: 'Installation',
        component: () => import('./components/Installation.vue')
    },
    {
        path: '/Installation2',
        name: 'Installation2',
        component: () => import('./components/Installation_2.vue')
    },
    {
        path: '/Downloading',
        name: 'Downloading',
        component: () => import('./components/Downloading.vue')
    },
    {
        path: '/ChildWindow',
        name: 'ChildWindow',
        component: () => import('./components/ChildWindow.vue')
    },
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

createApp(App).use(router).mount('#app')
