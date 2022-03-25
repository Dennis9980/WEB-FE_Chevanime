const routes = [
    {
        path: '/',
        name: 'AppLayout',
        component: () => import('../layouts/AppLayout.vue'),
        children: [
            {
                path: '/',
                name: 'TopAnime',
                component: () => import('../views/TopAnime.vue')
            },
            {
                path: '/top-manga',
                name: 'TopManga',
                component: () => import('../views/TopManga.vue')
            },
            {
                path: '/schedule',
                name: 'Schedule',
                component: () => import('../views/ScheduleAnime.vue')
            },
            {
                path: '/forum',
                name: 'Forum',
                component: () => import('../views/forum.vue')
            },
            {
                path: '/forum/:id',
                name: 'ForumDetail',
                component: () => import('../views/forumDetail.vue')
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import ('../views/auth/login.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import ('../views/auth/register.vue')
    }
];

export default routes;
