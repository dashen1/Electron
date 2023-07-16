import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Main from './components/Main.vue'

//const electron = window.require("electron");
//Vue.prototype.$electron = electron;

const routes = [
    {
        path: '/',
        name: 'main',
        component: Main
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('./components/Home.vue')
    },
    {
        path: '/DownloadCenter',
        name: 'DownloadCenter',
        component: () => import('./components/DownloadCenter.vue')
    },
    {
        path: '/Info',
        name: 'Info',
        component: () => import('./components/Info.vue')
    },
    {
        path: '/Help',
        name: 'Help',
        component: () => import('./components/Help.vue')
    },
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

createApp(App).use(router).mount('#app')
