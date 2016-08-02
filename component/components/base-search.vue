<template>
    <div class="vueSearchModel">
        <i class="common-icon search-white-icon" aria-hidden="true"></i>
        <input type="text" v-on:keydown.enter="search" placeholder="搜索" v-model="baseSearchKey"/>
    </div>
</template>
<script>
    export default {
        data: function () {
            return {
                baseSearchKey: ''
            }
        },
        methods: {
            search: function() {
                if (this.baseSearchKey.trim()) {
                    this.$dispatch('BASE_SEARCH_KEY_ENTER', this.baseSearchKey);
                    this.baseSearchKey = '';
                }
            }
        }
    }
</script>