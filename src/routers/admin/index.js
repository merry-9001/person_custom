import Person from '@/components/Admin/PersonCenter.vue'
import Index from '@/views/Admin/index.vue'
import Order from '@/views/Admin/Order.vue'
import Question from '@/views/Admin/Question.vue'
import User from '@/views/Admin/User.vue'
import Apply from '@/views/Admin/Apply.vue'
export default {
    path: '/admin/index',
    component: Index,
    children: [{
            path: '/admin/PersonCustom',
            component: Person,
        },
        {
            path: '/admin/Order',
            component: Order,
        },
        {
            path: '/admin/question',
            component: Question,
        },
        {
            path: '/admin/user',
            component: User,
        },
        {
            path: '/admin/apply',
            component: Apply,
        }
    ]
}