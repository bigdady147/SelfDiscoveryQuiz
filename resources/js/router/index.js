import {createRouter, createWebHistory} from 'vue-router';
import routes_administration from './administration.js';
import routes_auth from './auth.js';
import routes_base from './base.js';


const routes = [
    ...routes_administration,
    ...routes_auth,
    ...routes_base,

]



const router = createRouter({
    mode: 'history',
    history: createWebHistory(),
    routes: routes,
    linkActiveClass: "active", // active class for non-exact links.
    linkExactActiveClass: "active" // active class for *exact* links.
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
});

export default router;
