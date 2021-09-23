import Vue from 'vue';
import Router from 'vue-router';

import Index from './vue/Index';
import Pessoa from './vue/Pessoa';
import Login from './vue/Login';

import NotFound from './vue/error/NotFound';

Vue.use(Router);
const router = new Router({
    linkActiveClass: 'link-active',
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index,
            meta: {
                title: 'Home',
                layout: 'l-layout',
                freeAccess: true,
            },
            alias: ['/index', '/home'],
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                title: 'Faça Login',
                layout: 'l-login',
                freeAccess: true,
            },
            alias: ['/entrar'],
        },
        {
            path: '/pessoa/:id',
            name: 'pessoa',
            component: Pessoa,
            meta: {
                title: 'Detalhes de Pessoa',
                layout: 'l-layout',
                freeAccess: true,
            },
        },
        {
            path: '**',
            name: '404',
            alias: '/404',
            meta: { title: 'Opss', layout: 'l-404', freeAccess: true },
            component: NotFound,
        },
    ],
});

var bodyClass = require('./helpers/bodyClass');
var prototype = Vue.prototype;
router.beforeEach((to, from, next) => {
    if (!to) next('/404');
    if (!prototype.$session.exists()) prototype.$session.start();
    if (!to.meta.freeAccess && !prototype.$session.has('token')) next('/');

    return next();
});

router.afterEach((to) => {
    document.title = (to.meta.title || '') + ' ';
    if (to.meta.layout) bodyClass($, to.meta.layout, to.fullPath);
    else bodyClass($, 'l-layout', to.fullPath);
});
export default router;
