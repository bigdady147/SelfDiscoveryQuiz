<template>
    <main id="main">

        <slot name="loading"></slot>
        <div class="container">
            <slot name="BodyMain"></slot>
        </div>
    </main>
</template>
<script setup>
    import 'vue3-toastify/dist/index.css';
</script>
<script>
export default {
    name: 'LayoutMaster',
    data: function () {
        return {};
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
