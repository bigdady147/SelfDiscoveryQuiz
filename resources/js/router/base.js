export default  [
    {
        path: '/', name: 'dashboard.index', component: () => import('../view/index/index/Index.vue'),
        meta: {permission: [], title: 'Dashboard',}, children: [],
    },
    {
        path: '/packages-detail/:id', name: 'packages-detail.index', component: () => import('../view/index/index/PackagesDetail.vue'),
        meta: {permission: [], title: 'Dashboard',}, children: [],
    },
]
