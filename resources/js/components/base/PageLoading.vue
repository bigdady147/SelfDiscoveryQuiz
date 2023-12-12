<template>
    <div class="page-loading">
        <div class="spinner-border m-5" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageLoading',
    data() {
        return {
            message: 'Nội dung thông báo của bạn',
        };
    },
    methods: {

    },
    mounted() {
    },
};
</script>

<style scoped>
    .page-loading{
        width: 100vw;
        height: 100vh;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(255,255,255,0.5);
    }
</style>
