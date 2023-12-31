<template>
    <LayoutMaster>
        <template #HeaderMain>
            <HeaderV2></HeaderV2>
        </template>
        <template #loading>
            <page_loading v-if="loading"></page_loading>
        </template>
        <template #BodyMain>
            <section class="packages-detail">

            </section>
        </template>
    </LayoutMaster>
</template>
<script setup>
import LayoutMaster from '../_layouts/Master.vue';
import HeaderV2 from '../_partials/Header_v2.vue';
import * as _ from "lodash";
import VeeInput from "@/components/form/VeeInput.vue";
import 'vue3-toastify/dist/index.css';
import OpenAI from 'openai';
</script>
<script>
import {toast} from "vue3-toastify";

export default {

    data: function () {
        return {
            user: {},
            loading: false,
        };
    },

    created() {
        let vm = this;

    },
    mounted() {

    },
    computed: {},
    methods: {

    },
    watch: {

    }

}
</script>
<style lang="scss" scoped>

</style>
