<template>
    <div class="sidebar-admin">
        <div class="logo">
            <img src="../../../../public/images/main/logo.png" alt="logo">
        </div>
        <div class="list">
            <sidebar-item></sidebar-item>
            <h4 class="side_title pt-4 pb-1">Packages management</h4>
            <sidebar-item :link="'administration.packages_management.list_question'" :text="'List question'" :icon="'fa-solid fa-circle-question'"></sidebar-item>
            <sidebar-item :link="'administration.packages_management.question_package'" :text="'List packages'" :icon="'fa-solid fa-cube'"></sidebar-item>
            <h4 class="side_title pt-4 pb-1">Account Management</h4>
            <sidebar-item :text="'List user'" :icon="'fa-solid fa-circle-question'"></sidebar-item>
            <sidebar-item :text="'List admin'" :icon="'fa-solid fa-cube'"></sidebar-item>
        </div>
    </div>

</template>
<script>
import SidebarItem from "@/components/administrations/SidebarItem.vue";

export default {
    name: 'AdministrationSidebar',
    components: {SidebarItem},
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
.side_title{
    font-size: 14px;
    color: #fff;
    padding-left: 16px;
}
</style>
