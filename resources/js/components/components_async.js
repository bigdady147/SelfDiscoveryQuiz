import {defineAsyncComponent, defineComponent} from 'vue/dist/vue.esm-bundler.js';

export default {
    //Admin
    'administration_sidebar': defineAsyncComponent(() => import('./administrations/Sidebar.vue')),


    //Form control (input, input number, select, select2)
    'vee_input' : defineAsyncComponent(()=> import('./form/VeeInput.vue')),

    //Base (input, input number, select, select2)
    'toast' : defineAsyncComponent(()=> import('./base/Toast.vue')),
}

