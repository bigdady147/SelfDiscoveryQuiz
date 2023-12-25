<template>
    <LayoutMaster>
        <template #HeaderMain>
            <HeaderMain></HeaderMain>
        </template>

        <template #BodyMain>
            <section class="test_interface">
               
            </section>
        </template>
    </LayoutMaster>
</template>
<script setup>
import LayoutMaster from '../_layouts/Master.vue';
import HeaderMain from '../_partials/Header.vue';
</script>
<script>
export default {
    name: 'TestInterfaceIndex',
    data: function () {
        return {
          
        };
    },

    created() {

    },
    async mounted() {

    },
    computed: {},
    methods: {}
}
</script>
<style lang="scss" scoped>

</style>
