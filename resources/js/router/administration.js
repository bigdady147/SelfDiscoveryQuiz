export default  [
    {
        path: '/administration/', name: 'administration.index', component: () => import('../view/administration/index/Index.vue'),
        meta: {permission: [], title: 'Administration',}, children: [],
    }
]
