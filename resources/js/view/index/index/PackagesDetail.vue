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
                <div class="packages-content">
                    <div class="list-hashtag">
                        <div class="hashtag">#Quizz</div>
                        <div class="hashtag">#Resolve problem</div>
                    </div>
                    <h1 class="packages-title" v-text="_.get(packages, 'name', '')"></h1>
                    <div class="more">
                        <div style="padding-top: 0px !important;" class="more-item">
                            <span class="icon">
                                <i class="fas fa-suitcase"></i>
                            </span>
                            <div v-for="(val , i) in categories">
                                <span v-if="packages.category == val.id" v-text="'Category: ' +  _.get(val,'text', '')"
                                      class="text"></span>
                            </div>
                        </div>
                        <div class="more-item">
                            <span class="icon">
                                <i class="fas fa-level-up-alt"></i>
                            </span>
                            <div v-for="(val , i) in levels">
                                <span v-if="packages.level == val.id" v-text="'Level: ' + _.get(val,'text', '')"
                                      class="text"></span>
                            </div>
                        </div>
                        <div class="more-item">
                            <span class="icon">
                               <i class="fas fa-clock"></i>
                            </span>
                            <span v-text="getTime(packages.time)" class="text"></span>
                        </div>
                        <div class="more-item">
                            <span class="icon">
                                <i class="fas fa-question-circle"></i>
                            </span>
                            <span v-text="packages.number_question + ' questions'" class="text"></span>
                        </div>
                        <div class="more-item">
                            <span class="icon">
                              <i class="fas fa-sort-numeric-up"></i>
                            </span>
                            <span v-text="'Tested: ' + packages.tested " class="text"></span>
                        </div>
                    </div>
                    <hr>
                    <div class="action">
                        <button @click="testing()" type="button" class="btn btn-sm btn-testing">Test now</button>
                    </div>
                </div>
            </section>
        </template>
    </LayoutMaster>
</template>
<script setup>
import LayoutMaster from '../_layouts/Master.vue';
import HeaderV2 from '../_partials/Header_v2.vue';
import * as _ from "lodash";

</script>
<script>
import {toast} from "vue3-toastify";

export default {

    data: function () {
        return {
            list: {
                data: [],
                page: 1,
                per_page: 10,
                last_page: 0,
                order: 'desc',
            },
            user: {},
            loading: true,
            _id: '',
            packages: {},
            type_questions: [
                {
                    id: 1,
                    text: 'Image',
                    value: 'image'
                },
                {
                    id: 2,
                    text: 'Text',
                    value: 'text'
                },
            ],
            interfaces: [
                {
                    id: 1,
                    text: 'Default',
                    value: 'default'
                },
            ],
            levels: [
                {
                    id: 1,
                    text: 'Easy',
                    value: 1
                },
                {
                    id: 2,
                    text: 'Moderate',
                    value: 2
                },
                {
                    id: 3,
                    text: 'Challenging',
                    value: 3
                },
                {
                    id: 4,
                    text: 'Difficult',
                    value: 4
                },
                {
                    id: 5,
                    text: 'Expert',
                    value: 5
                },
            ],
            categories: [
                {
                    id: 1,
                    text: 'Career Interest Assessment',
                    value: 1
                },
                {
                    id: 2,
                    text: 'Vocational Interest Test',
                    value: 2
                },
            ],
            list_answer: [
                {
                    id: 1,
                    text: '',
                    value: 1,
                    is_correct: false,
                }
            ],
        };
    },

    created() {
        let vm = this;
        let user = localStorage.getItem("user");
        if(!user) {
            this.$router.push({name: 'login.index'})
        }else{
            let token = JSON.parse(user).data.access_token;
            vm._id = this.$route.params.id
            vm.user = JSON.parse(user).data.user;
            vm.header_token = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            };
            vm.loadList();
        }

    },
    mounted() {

    },
    computed: {},
    methods: {
        loadList() {
            let vm = this;
            axios.get(`/api/question-packages/${vm._id}`, vm.header_token)
                .then(response => {
                    vm.packages = response.data;
                    vm.packages.question_ids = JSON.parse(vm.packages.question_ids);
                    vm.loading = false;
                }).catch(error => {
                toast.error(error.message, {autoClose: 1500});
            })
        },
        testing(){
          let vm = this;

          this.$router.push({ name: 'default.index', query: { user_id: vm.user.id , packages_id: vm._id } });
        },
        getTime(val) {
            let vm = this;
            let minutes = Math.floor(val / 60);
            let seconds = val % 60;
            return `Time: ${minutes} minutes - ${seconds}s `
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
