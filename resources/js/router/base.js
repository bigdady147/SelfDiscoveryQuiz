export default  [
    {
        path: '/', name: 'dashboard.index', component: () => import('../view/index/index/Index.vue'),
        meta: {permission: [], title: 'Dashboard',}, children: [],
    },
    {
        path: '/packages-detail/:id', name: 'packages-detail.index', component: () => import('../view/index/index/PackagesDetail.vue'),
        meta: {permission: [], title: 'Dashboard',}, children: [],
    },
    // {
    //     path: '/default-testing/?packages:id?user:user_id', name: 'default.index', component: () => import('../view/index/test_interface/Default.vue'),
    //     meta: {permission: [], title: 'Default testing',}, children: [],
    // },
    {
        path: '/default-testing/testing', name: 'default.index', component: () => import('../view/index/test_interface/Default.vue'),
        meta: {permission: [], title: 'Default testing'}, children: [],
        query: {user_id: '', packages_id: ''},
        props: true
    },
    {
        path: '/view-report', name: 'report.index', component: () => import('../view/index/report/Index.vue'),
        meta: {permission: [], title: 'Report'}, children: [],
        query: {user_id: '', report_id: ''},
        props: true
    }
]
