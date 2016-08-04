import Vue from 'vue/dist/vue';

import counter from '../components/Counter.vue';
import * as actions from '../vuex/actions';
import * as directives from '../directives';
import * as filters from '../filters';

new Vue({
    el: '#app',
    components: {
        'counter': counter
    },
    events: actions.counterEvents,
    directives: {
        'stopPro': directives.stopPro
    },
    filters: {
        'toUpperCase': filters.toUpperCase
    }
});
