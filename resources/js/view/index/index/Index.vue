<template>
    <LayoutMaster>
        <template #HeaderMain>
            <HeaderMain></HeaderMain>
        </template>

        <template #BodyMain>
            <section  class="quicktest ">
                <div class="page-section home">
                    <div class="container">
                        <div class="row">
                            <div class="col-6">
                                <div class="big-title">
                                    <h1 class="title">Welcome to Self Discovery Quiz!</h1>
                                    <h4 class="text">Are you ready to embark on a journey of self-discovery?
                                        Look no further! Self Discovery Quiz is your ultimate destination
                                        for online quizzes designed to help you explore and understand
                                        yourself better.
                                    </h4>
                                    <button type="button" class="btn-started ">Get started</button>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="images">
                                    <img  src="../../../../../public/images/main/thumb-1.png" alt="thumb-1">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="page-section">
                    <div class="row">
                        <div class="col-6">123123</div>
                        <div class="col-6">
                            <div class="images">
                                <img  src="../../../../../public/images/main/thumb-1.png" alt="thumb-1">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </template>
    </LayoutMaster>
</template>
<script setup>
import LayoutMaster from '../_layouts/Master.vue';
import HeaderMain from '../_partials/Header.vue';
</script>
<script >
export default {

    data: function () {
        return {
            opts: {
                start: 0,
                dir: 'v',
                duration: 500,
                beforeChange: function (prev, next) {
                },
                afterChange: function (prev, next) {
                }
            }
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
