export default  [
    {
        path: '/register', name: 'register.index', component: () => import('../view/auth/index/Register.vue'),
        meta: {permission: [], title: 'Register',}, children: [],
    },
    {
        path: '/login', name: 'login.index', component: () => import('../view/auth/index/Login.vue'),
        meta: {permission: [], title: 'Login',}, children: [],
    }
]
