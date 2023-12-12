import {defineAsyncComponent, defineComponent} from 'vue/dist/vue.esm-bundler.js';

export default {
    //Admin
    'administration_sidebar': defineAsyncComponent(() => import('./administrations/Sidebar.vue')),
    'sidebar_item': defineAsyncComponent(() => import('./administrations/SidebarItem.vue')),
    'admin_breadcrumb': defineAsyncComponent(() => import('./administrations/AdminBreadcrumb.vue')),
    'admin_menu': defineAsyncComponent(() => import('./administrations/AdminMenu.vue')),


    //Form control (input, input number, select, select2)
    'vee_input' : defineAsyncComponent(()=> import('./form/VeeInput.vue')),

    //Base (input, input number, select, select2)
    'toast' : defineAsyncComponent(()=> import('./base/Toast.vue')),
    'page_loading' : defineAsyncComponent(()=> import('./base/PageLoading.vue')),
}

