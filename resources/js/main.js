import('./bootstrap.js');
import './bootstrap';
import moment from 'moment';
import * as _ from 'lodash';
import axios from 'axios';
// import $ from 'jquery';

// window.jQuery = window.$ = $;
import Vue3Toastify from 'vue3-toastify';
import 'animate.css'
import 'vue-fullpage/vue-fullpage.css'
import VueFullpage from 'vue-fullpage'

window.moment = moment;
window._ = _;
window.axios = axios;


//Import & use Libary





import {createApp} from 'vue';
import App from './App.vue';
const app = createApp(App)


//Config router
import router from './router';
app.use(router);
app.use(VueFullpage);
//config components
import {component} from "./components";

_.map(component, function (v, i) {
    app.component(i, v);
});



app.mount('#quick_test')
export {app};



// createApp(App).mount("#app")
