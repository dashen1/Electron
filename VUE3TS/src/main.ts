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
        path: '/Webview',
        name: 'Webview',
        component: () => import('./components/Webview.vue'),
        meta:{
            keepAlive: true, //此页面需要缓存
          },
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
const app = createApp(App)
app.config.errorHandler = (err,instance,info) => {
    console.log("err:"+info)
}
app.use(router).use(eventBus).mount('#app')
