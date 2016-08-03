import Vue from 'vue/dist/vue';

import counter from '../components/Counter.vue';
import * as actions from '../vuex/actions';

new Vue({
    el: '#app',
    components: {
        'counter': counter
    },
    events: actions.counterEvents
});
