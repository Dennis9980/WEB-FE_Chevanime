const routes = [
    {
        path: '/',
        name: 'AppLayout',
        component: () => import('../layouts/AppLayout.vue'),
        children: [
            {
                path: '/',
                name: 'TopAnime',
                meta: { requiresAuth: false },
                component: () => import('../views/TopAnime.vue')
            },
            {
                path: '/top-manga',
                name: 'TopManga',
                meta: { requiresAuth: false },
                component: () => import('../views/TopManga.vue')
            },
            {
                path: '/schedule',
                name: 'Schedule',
                meta: { requiresAuth: false },
                component: () => import('../views/ScheduleAnime.vue')
            },
            {
                path: '/forum',
                name: 'Forum',
                meta: { requiresAuth: true },
                component: () => import('../views/forum.vue')
            },
            {
                path: '/forum/:id',
                name: 'ForumDetail',
                meta: { requiresAuth: true },
                component: () => import('../views/forumDetail.vue')
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        meta: { requiresAuth: false },
        component: () => import ('../views/auth/login.vue')
    },
    {
        path: '/register',
        name: 'Register',
        meta: { requiresAuth: false },
        component: () => import ('../views/auth/register.vue')
    }
];

export default routes;
