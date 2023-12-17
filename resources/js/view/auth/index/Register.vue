<template>
    <LayoutMaster>
        <template #loading>
            <page_loading v-if="loading"></page_loading>
        </template>
        <template #BodyMain>

            <div class="register-cover d-flex justify-content-center align-items-center">
                <div class="register-cover-block ">
                    <div class="row">
                        <div  class="col-5 block-bg">
                            <div class="block-content">
                                <h3 class="title text-center">
                                    Create a new Quick test Account
                                </h3>
                                <h3 class="title text-center pt-3 pb-3">
                                    Sign up now !
                                </h3>
                                <div class="img">
                                    <img src="../../../../../public/images/auth/register.png" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="col-7 d-flex justify-content-center align-items-center ">
                            <div class="block-form w-100">

                                <div style="margin-right: 0px; margin-left: 0px; padding: 20px 0px" class="row">
                                    <div class="col-md-12">
                                        <div  class="d-flex justify-content-center">
                                            <img style="max-width: 40%; padding: 20px 0px" src="../../../../../public/images/main/logo.png" alt="">
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-2">
                                            <label class="mb-1">Full name</label>
                                            <vee-input type="text" v-model="item_edit.name"></vee-input>
                                    </div>
                                    <div class="col-md-6 mb-2">
                                            <label class="mb-1">Username</label>
                                            <vee-input type="text" v-model="item_edit.username"></vee-input>
                                    </div>
                                    <div class="col-md-12 mb-2">
                                        <label class="mb-1">Email</label>
                                        <vee-input type="text" v-model="item_edit.email"></vee-input>
                                    </div>
                                    <div class="col-md-12 mb-2">
                                        <label class="mb-1">Password</label>
                                        <vee-input type="password" v-model="item_edit.password"></vee-input>
                                    </div>
                                    <div class="col-md-12 mb-2">
                                        <div class="styled-checkbox">
                                            <input id="privacy" class="pr-2" type="checkbox">
                                            <label for="privacy" class="m-0 pl-2"><span > I agree to the Terms of Service, General Terms and Conditions and Privacy Policy.</span></label>
                                        </div>
                                    </div>
                                    <div class="col-md-12 d-flex justify-content-center pt-3">
                                        <button type="button"  @click="submitRegister" class="button-small btn-primary bg-primary text-light w-50">Sign up</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </LayoutMaster>
</template>
<script setup>
import 'vue3-toastify/dist/index.css';
</script>
<script>

import LayoutMaster from "@/view/auth/_layouts/Master.vue";
import VeeInput from "@/components/form/VeeInput.vue";
import { toast } from 'vue3-toastify';

export default {
    name: 'RegisterTemplate',
    components: {VeeInput, LayoutMaster, toast},
    data: function () {
        return {
            item_edit: {
                name: '',
                username: '',
                email: '',
                password: '',
                role: 'user',
            },
            loading: false,
        };
    },
    created() {
        let vm = this;

    },
     mounted() {
         console.log('route', this.$route)

    },
    computed: {},
    methods: {
        submitRegister(){
            let vm = this;
            vm.loading = true;
            axios.post(`api/register`, vm.item_edit)
                .then(response => {
                    toast.success(response.data.message, {autoClose: 1000});
                    setTimeout(()=>{
                        vm.loading = false;
                        window.location.href = '/login';
                    }, 500)
                }).catch(error => {
                    toast.error(error.message, {autoClose: 1000})
                })
        }
    },
    watch: {}
}
</script>

<style lang="scss" scoped>

</style>
