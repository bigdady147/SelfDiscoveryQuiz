<template>
    <div>
        <div ref="toast" class="toast" role="alert" aria-live="assertive" aria-atomic="true" data-autohide="false">
            <div class="toast-header">
                <strong class="mr-auto">Thông báo</strong>
                <button type="button" class="ml-2 mb-1 close" @click="hideToast" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="toast-body">
                {{ message }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Notification',

    data() {
        return {
            message: 'Nội dung thông báo của bạn',
        };
    },
    methods: {
        hideToast() {
            // Ẩn toast khi người dùng nhấp vào nút close
            $(this.$refs.toast).toast('hide');
        },
    },
    mounted() {
        // Hiển thị toast khi component được mount
        $(this.$refs.toast).toast('show');
    },
};
</script>

<style scoped>
.toast {
    position: absolute;
    top: 1rem;
    right: 1rem;
}
</style>
