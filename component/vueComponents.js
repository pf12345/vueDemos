(function () {
    //将组件注册在全局vue上面，使用时，可以直接调用即可
    Vue.component('base-search', {
        template: '<div class="vueSearchModel"> ' +
        '<i class="common-icon search-white-icon" aria-hidden="true"></i> ' +
        '<input type="text" v-on:keydown.enter="search" placeholder="搜索" v-model="searchKey"/></div>',
        data: {
            searchKey: ''
        },
        methods: {
            search: function () {
                if (this.searchKey.trim()) {
                    this.$dispatch('base-search-msg', this.searchKey);
                    this.searchKey = '';
                }
            }
        }
    });
})();