export default  [
    {
        path: '/', name: 'dashboard.index', component: () => import('../view/index/index/Index.vue'),
        meta: {permission: [], title: 'Dashboard',}, children: [],
    },

]
