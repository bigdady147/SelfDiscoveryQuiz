export default  [
    {
        path: '/administration/', name: 'administration.index', component: () => import('../view/administration/index/Index.vue'),
        meta: {permission: [], title: 'Administration',}, children: [],
    },
    {
        path: '/administration/packages-management/list-question', name: 'administration.packages_management.list_question', component: () => import('../view/administration/index/packages_management/ListQuestions.vue'),
        meta: {permission: [], title: 'List questions',}, children: [],
    },
    {
        path: '/administration/packages-management/list-question-package', name: 'administration.packages_management.question_package', component: () => import('../view/administration/index/packages_management/ListQuestionPackage.vue'),
        meta: {permission: [], title: 'List Question package',}, children: [],
    }
]
