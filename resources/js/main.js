import('./bootstrap.js');
import './bootstrap';
import './jQuery';

import moment from 'moment';
import * as _ from 'lodash';
import axios from 'axios';
import $ from 'jquery';
// window.jQuery = window.$ = $;
import Vue3Toastify from 'vue3-toastify';
import 'animate.css'
import 'vue-fullpage/vue-fullpage.css'
import VueFullpage from 'vue-fullpage'

import OpenAI from 'openai';
const openai = new OpenAI({
    apiKey: "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", // This is the default and can be omitted
    dangerouslyAllowBrowser: true
});


window.moment = moment;
window._ = _;
window.axios = axios;
window.jQuery = window.$ = $;



//Import & use Libary





import {createApp} from 'vue';
import App from './App.vue';
const app = createApp(App)


//Config router
import router from './router';
app.use(router);
app.use(VueFullpage);
app.use(openai);
//config components
import {component} from "./components";
_.map(component, function (v, i) {
    app.component(i, v);
});



app.mount('#quick_test')
export {app};



// createApp(App).mount("#app")
