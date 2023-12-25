<template>
    <main id="main">
        <slot name="HeaderMain"></slot>
        <div>
            <slot name="BodyMain"></slot>
        </div>
    </main>
</template>

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
