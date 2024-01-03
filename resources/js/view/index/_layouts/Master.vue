<template>
    <main id="main">
        <slot name="HeaderMain"></slot>
        <slot name="loading"></slot>
        <div>
            <slot name="BodyMain"></slot>
        </div>
        <slot name="FooterMain"></slot>
    </main>
</template>

<script>
export default {
    name: "LayoutMaster",
    data: function () {
        return {};
    },

    created() {},
    async mounted() {},
    computed: {},
    methods: {},
};
</script>

<style lang="scss" scoped></style>
