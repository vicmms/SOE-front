import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue'
import Users from '@/views/Users.vue'
import Levels from '@/views/Levels.vue'

Vue.use(VueRouter)

var router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/users',
            name: 'users',
            component: Users,
            meta: { requiresAuth: true }
        },
        {
            path: '/levels',
            name: 'levels',
            component: Levels,
            meta: { requiresAuth: true }
        },
    ]
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(route => route.meta.requiresAuth)) {
        const token = localStorage.getItem('token');

        if (token) {
            next();
        } else {
            next('/login');
        }
    } else {
        next();
    }
});

export default router