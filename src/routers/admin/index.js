import Person from '@/components/Admin/PersonCenter.vue'
import Index from '@/views/Admin/index.vue'
import Order from '@/views/Admin/Order.vue'
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
        }
    ]
}