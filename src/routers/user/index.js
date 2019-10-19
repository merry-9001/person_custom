import Home from '@/views/Home.vue'
import Login from '@/views/User/Login.vue'
import Register from '@/views/User/Register.vue'
import Index from '@/views/User/Index.vue'
import Detail from '@/views/User/Detail.vue'
import Cart from '@/views/User/Cart.vue'
import Order from '@/views/User/Order.vue'
import Question from '@/views/User/Question.vue'
import Product from '@/views/User/Product.vue'
import Qualifications from '@/views/User/Qualifications.vue'
export default {
    path: '/',
    component: Home,
    children: [{
            path: '/',
            component: Login
        },
        {
            path: 'login',
            component: Login
        },
        {
            path: 'register',
            component: Register
        },
        {
            path: 'index',
            component: Index
        },
        {
            path: 'detail/1/:id',
            component: Detail
        },
        {
            path: 'cart',
            component: Cart
        },
        {
            path: 'order',
            component: Order
        },
        {
            path: 'Question',
            component: Question
        },
        {
            path: 'Product',
            component: Product
        },
        {
            path: 'Qualifications',
            component: Qualifications
        }
    ]
}