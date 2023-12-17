<template>
    <LayoutMaster>
        <template #BreadCrumb>
            <admin-breadcrumb></admin-breadcrumb>
        </template>
        <template #BodyMain>
            <div class="app-admin">
                1111
            </div>
        </template>
    </LayoutMaster>
</template>
<script setup>
import LayoutMaster from '../../_layouts/Master.vue'
import AdminBreadcrumb from "@/components/administrations/AdminBreadcrumb.vue";
</script>
<script >
export default {
    name: 'ListQuestions',
    data: function () {
        return {

        };
    },

    created() {

    },
    async mounted() {

    },
    computed: {
    },
    methods: {
    }
}
</script>
<style lang="scss" scoped>
.app-admin{
    padding: 10px;
}
</style>
