import Vue from 'vue'
import Router from 'vue-router'
import adminRouter from './admin'
import userRouter from './user'
import Home from '@/views/Home.vue'
import test from '@/views/test.vue'
// import Login from '@/views/User/Login.vue'
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        adminRouter,
        userRouter,

        {
            path: '/*',
            // redirect: '/'
            component: test,
        }
    ]
})