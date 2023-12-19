<template>
    <paginate
        :page-count="counts"
        :page-range="1"
        :margin-pages="2"
        :click-handler="clickCallback"
        :prev-text="'Prev'"
        :next-text="'Next'"
        :container-class="'pagination'"
        :page-class="'page-item'"
    >
    </paginate>
</template>

<script>
import Paginate from 'vuejs-paginate-next';

export default {
    name: 'VeePagination',
    props: {
        pagesCount: {
            type: Number,
            default: 0,
        },
        perPage: {
            type: Number,
            default: 10,
        },
        pages: {
            type: Number,
            default: 10,
        }
    },
    data: function () {
        return {
            pages_data : 0,
            per_page_data : 0,
            counts : 0,
        }
    },
    components: {
        paginate: Paginate,
    },
    mounted() {
        let vm = this;
        vm.pages_data = vm.pages;
        vm.per_page_data = vm.perPage;
        vm.counts = vm.pagesCount;
        console.log('count', vm.counts)
    },
    methods: {
        clickCallback(pageNum) {
            this.$emit('page-changed', pageNum);
        }
    },
    watch: {
      'pagesCount' : function(val){
          console.log('s', val)
          this.counts = val;
      }
    }
}
</script>

<style lang="css">

</style>
