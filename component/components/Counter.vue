<template>
    <div>
        Clicked: {{ count }} times
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementIfOdd">Increment if odd</button>
        <button @click="incrementAsync">Increment async</button>
    </div>
</template>

<script>
    import store from '../vuex/store';
    import * as types from '../vuex/mutation-types';

    export default {
        data: function () {
            return store;
        },
        methods: {
            increment: function () {
                this.$dispatch(types.INCREMENT);
            },
            decrement: function () {
                this.$dispatch(types.DECREMENT);
            },
            incrementIfOdd: function () {
                if ((store.count + 1) % 2 === 0) {
                    this.$dispatch(types.INCREMENT);
                }
            },
            incrementAsync: function () {
                setTimeout(function() {
                    this.$dispatch(types.INCREMENT);
                }, 1000);
            }
        }
    }
</script>