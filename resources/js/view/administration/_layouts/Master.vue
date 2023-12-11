<template>
    <main id="main">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-3 sidebar">
                    <administration_sidebar></administration_sidebar>
                </div>
                <div class="col-md-9 content">
                    <slot name="BodyMain"></slot>
                    <!-- Nội dung của trang được chọn sẽ được hiển thị ở đây -->
                </div>
            </div>
        </div>
    </main>
</template>
<script>
export default {

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

</style>
