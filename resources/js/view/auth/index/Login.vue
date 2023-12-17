<template>
    <LayoutMaster>
        <template #loading>
            <page_loading v-if="loading"></page_loading>
        </template>
        <template #BodyMain>
            <div class="register-cover d-flex justify-content-center align-items-center">
                <div class="register-cover-block ">
                    <div class="row">
                        <div class="col-5 block-bg">
                            <div class="block-content">
                                <h3 class="title text-center">
                                    Explore myself with QuickTest
                                </h3>
                                <h3 class="title text-center pt-3 pb-3">
                                    Sign In now!
                                </h3>
                                <div class="img">
                                    <img src="../../../../../public/images/auth/login.png" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="col-7 d-flex justify-content-center align-items-center ">
                            <div class="block-form w-100">
                                <div style="margin-right: 0px; margin-left: 0px" class="row">
                                    <div class="col-md-12">
                                        <div class="d-flex justify-content-center">
                                            <img style="max-width: 40%; padding: 20px 0px"
                                                 src="../../../../../public/images/main/logo.png" alt="">
                                        </div>
                                    </div>
                                    <div class="col-md-12 mb-2">
                                        <label class="mb-1">Username</label>
                                        <vee-input type="text" v-model="item_edit.username"></vee-input>
                                    </div>
                                    <div class="col-md-12 mb-2">
                                        <label class="mb-1">Password</label>
                                        <vee-input type="password" v-model="item_edit.password"></vee-input>
                                    </div>
                                    <div class="col-md-12 d-flex justify-content-center pt-3">
                                        <button type="button" @click="submitLogin"
                                                class="button-small btn-primary bg-primary text-light w-50">Sign in
                                        </button>
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

<script>

import LayoutMaster from "@/view/auth/_layouts/Master.vue";
import VeeInput from "@/components/form/VeeInput.vue";
import {toast} from 'vue3-toastify';

export default {
    name: 'RegisterTemplate',
    components: {VeeInput, LayoutMaster, toast},
    data: function () {
        return {
            item_edit: {
                username: '',
                password: '',
            },
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
        submitLogin() {
            let vm = this;
            vm.loading = true;
            axios.post(`api/login`, vm.item_edit)
                .then(response => {
                    toast.success(response.data.message, {autoClose: 1000});
                    let user_storages = localStorage.getItem('user');
                    if (!user_storages) {
                        localStorage.setItem("user", (JSON.stringify(response)));
                        setTimeout(() => {
                            vm.loading = false;
                            if (response.data.user.role === 'user') {
                                this.$router.push({name: 'dashboard.index'})
                            } else {
                                this.$router.push({name: 'administration.index'})
                            }
                        }, 500)
                    } else {
                        if (response.data.user.role === 'user') {
                            this.$router.push({name: 'dashboard.index'})
                        } else {
                            this.$router.push({name: 'administration.index'})
                        }
                    }
                })
                .catch(error => {
                    console.log('err', error);
                    toast.error(error.message, {autoClose: 1000})
                })
        }
    },
    watch: {}
}
</script>

<style lang="scss" scoped>

</style>
