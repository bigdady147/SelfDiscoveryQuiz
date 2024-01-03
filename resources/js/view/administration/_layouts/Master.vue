<template>
    <main id="main">
        <div class="container-fluid">
            <div class="row">
                <div style="padding-left: 0px; padding-right: 0px" class="col-md-2 sidebar">
                    <administration_sidebar></administration_sidebar>
                </div>
                <div style="padding-left: 0px; padding-right: 0px" class="col-md-10 content">
                    <admin-menu></admin-menu>
                    <slot name="BreadCrumb"></slot>
                    <slot name="BodyMain"></slot>
                    <!-- Nội dung của trang được chọn sẽ được hiển thị ở đây -->
                </div>
            </div>
        </div>
    </main>
</template>
<script setup>
import 'vue3-toastify/dist/index.css';
</script>
<script>
import AdminMenu from "@/components/administrations/AdminMenu.vue";

export default {
    name: 'MasterAdmin',
    components: {AdminMenu},

    data: function () {
        return {
            user: null
        };
    },

    created() {

    },
    mounted() {
        let vm = this;
        let user = localStorage.getItem("user");
        vm.user = JSON.parse(user).data.user;
        if (vm.user.role === 'user') {
            this.$router.push({name: 'dashboard.index'})
        } else if (vm.user.role === 'user') {
            this.$router.push({name: 'administration.index'})
        }
    },
    computed: {},
    methods: {}
}
</script>

<style lang="scss" scoped>

</style>
