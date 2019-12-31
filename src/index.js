import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store/index'


new Vue({
    el: '#app',
    components: { App },
    router,
    store,
    template: '<App/>'
})