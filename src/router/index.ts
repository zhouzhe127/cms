import {createRouter,createWebHashHistory, RouteRecordRaw} from 'vue-router'

const routes:Array<RouteRecordRaw> = [
    {
        path: '/',
        component:() => import('@/layout/index.vue'),
        children:[
            {
                path: 'home',
                name:'Home',
                component:() => import('@/views/home/index.vue')
            }

        ]
    }
]
const router = createRouter({
    history:createWebHashHistory(),
    routes
})


export default router
