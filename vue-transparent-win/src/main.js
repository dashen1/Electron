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
    //{
    //    path: '/Installation',
    //    name: 'Installation',
    //    component: () => import('./components/Installation.vue')
    //},
    {
        path: '/InstallationPrivacy',
        name: 'InstallationPrivacy',
        component: () => import('./components/InstallationPrivacy.vue')
    },
    {
        path: '/PrivacyComponent',
        name: 'PrivacyComponent',
        component: () => import('./components/PrivacyComponent.vue')
    },
    {
        path: '/InstallationChoseFile',
        name: 'InstallationChoseFile',
        component: () => import('./components/InstallationChoseFile.vue')
    },
    {
        path: '/InstallationProgress',
        name: 'InstallationProgress',
        component: () => import('./components/InstallationProgress.vue')
    },
    {
        path: '/ChoseFileComponent',
        name: 'ChoseFileComponent',
        component: () => import('./components/ChoseFileComponent.vue')
    },
    {
        path: '/ProgressComponent',
        name: 'ProgressComponent',
        component: () => import('./components/Progress.vue')
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
