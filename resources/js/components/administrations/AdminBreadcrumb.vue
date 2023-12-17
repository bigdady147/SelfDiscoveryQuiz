<template>
    <div class="admin-menu">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Library</a></li>
                <li class="breadcrumb-item active" aria-current="page">Data</li>
            </ol>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'AdminBreadcrumb',
    data() {
        return {
        };
    },
    methods: {

    },
    mounted() {
    },
};
</script>

<style scoped>
.admin-menu{
 padding: 10px;
}
</style>
