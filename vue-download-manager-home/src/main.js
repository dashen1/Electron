import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
import Main from './components/Main.vue'
import eventBus from 'vue3-eventbus'

//const electron = window.require("electron");
//Vue.prototype.$electron = electron;

const routes = [
    {
        path: '/',
        name: 'Main',
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
        component: () => import('./components/Info.vue'),
        children:[
            {
                path:'a',
                component:() => import('./childcomponents/ChildA.vue')
            },
            {
                path:'b',
                component:() => import('./childcomponents/ChildB.vue')
            },
            {
                path:'c',
                component:() => import('./childcomponents/ChildC.vue')
            },
            {
                path:'d',
                component:() => import('./childcomponents/ChildD.vue')
            },
            {
                path:'e',
                component:() => import('./childcomponents/ChildE.vue')
            },
            {
                path:'f',
                component:() => import('./childcomponents/ChildF.vue')
            },

        ]
    },
    {
        path: '/Help',
        name: 'Help',
        component: () => import('./components/Help.vue')
    },
    //{
    //    path: '/Test',
    //    name: 'Test',
    //    component: () => import('./components/Test.html')
    //},
]
const router = createRouter({
    //history: createWebHistory(process.env.BASE_URL),
    history: process.env.IS_ELECTRON ? createWebHashHistory() : createWebHistory(),
    routes
})

createApp(App).use(router).use(eventBus).mount('#app')
