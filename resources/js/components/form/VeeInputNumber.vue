<template>
    <vue-number
        v-model="clone_value"
        v-bind="{bind_number}"
        :disabled="is_disabled"
        class="form-control form-control-sm"
    ></vue-number>
</template>
<script setup>
import {component as VueNumber} from '@coders-tm/vue-number-format';

</script>
<script>

export default {
    name: 'VeeInputNumber',
    props:{
        modelValue : {
            type: Number,
            default: 0,
        },
        type : {
            type: String,
            default: 'text',
        },
        is_disabled: {type: Boolean, default: false},
    },
    data: function () {
        return {
            clone_value : 0,
            bind_number: {
                decimal: '.',
                separator: ',',
                prefix: '',
                precision: 2,
                masked: false,
            },
        };
    },

    created() {
        let vm = this;
        vm.clone_value = vm.modelValue;
    },
    async mounted() {

    },
    computed: {
    },
    methods: {
    },
    watch: {
        'modelValue' : function (val){
            this.clone_value = val;
        },
        'clone_value' (val){
            this.$emit('update:modelValue', parseFloat(val));
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
