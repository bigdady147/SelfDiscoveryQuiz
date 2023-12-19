<template>
    <input v-model="clone_value" class="form-control form-control-sm" :type="type">
</template>
<script>
export default {
    name: 'VeeInput',
    props:{
        modelValue : {
            type: String,
            default: '',
        },
        type : {
            type: String,
            default: 'text',
        }
    },
    data: function () {
        return {
            clone_value : '',
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
        'modelValue' (val){
            this.clone_value = val;
        },
        'clone_value' (val){
            this.$emit('update:modelValue', val);
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
