import Vue from 'vue/dist/vue';

import BaseSeach from './components/base-search.vue'; //基本搜索控件
new Vue({
    el: '#app',
    components: {
        'base-search': BaseSeach
    },
    events: {
        'BASE_SEARCH_KEY_ENTER': (key) => {
            alert(key);
        }
    }
});