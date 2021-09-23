import router from './router';
import Vue from 'vue';
import App from './App';
import VueResource from 'vue-resource';
import VueSession from 'vue-session';

window.$ = $;
window.jQuery = $;
require('./helpers/collapseControl')();

const loginModel = require('./vue/model/login.model');
const QRCode = require('qrcode');

import { SimpleAlerts } from '@filipedp/simple_dialog';
import { SimpleConfirms } from '@filipedp/simple_dialog';

Vue.mixin({
    data: function () {
        return {
            model: {
                login: loginModel,
            },
            SimpleAlerts: SimpleAlerts,
            SimpleConfirms: SimpleConfirms,
            QRCode: QRCode,
            apiUrl:
                window.location.origin == 'https://teste.fdru.com.br'
                    ? 'https://api.fdru.com.br'
                    : 'http://localhost'+ ':510',
        };
    },
});

var globalMixFilter = require('./vue/mix/filters.mix');
Vue.mixin(globalMixFilter);

var globalApiMethods = require('./vue/controllers/loginControler');
Vue.mixin(globalApiMethods);

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(VueSession);

window.Vue = new Vue({
    el: '#vue-app',
    router,
    components: { App },
    template: '<App/>',
    created: function () {
        this.$session.start();
    },
});
