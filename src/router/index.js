import Vue from 'vue'
import VueRouter from 'vue-router'

import index from '@/index'
import test, { test_router } from '@/test'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [{
            path: '/',
            redirect: '/index',
        }, {
            path: '/index',
            name: 'index',
            component: index
        },
        {
            path: '/test',
            name: 'test',
            component: test,
            ...test_router
        }
    ]
})