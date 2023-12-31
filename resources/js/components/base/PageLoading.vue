<template>
    <div class="page-loading">
        <div>
            <slot name="textLoading"></slot>
        </div>
        <div class="spinner-border m-5 text-light" role="status">
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
        width: 100%;
        height: 100vh;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0,0,0,0.9);
        flex-direction: column;
    }
</style>
