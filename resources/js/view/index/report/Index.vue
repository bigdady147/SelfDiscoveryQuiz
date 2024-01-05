<template>
    <LayoutMaster>
        <template #HeaderMain>
            <HeaderV2></HeaderV2>
        </template>
        <template #loading>
            <page_loading v-if="loading"></page_loading>
        </template>
        <template #BodyMain>
            <section class="report-detail ">
                    <div class="packages-content  form-user form-report">
                        <div class="head-content">
                            <div class="title text-center"
                                 v-text="'BÁO CÁO ' + _.get(report, 'question_package.name','')">
                            </div>
                            <div class="content-packages d-flex justify-content-end">
                                <div class="content-packages-item">
                                <span class="icon">
                                    <i class="fa-solid fa-clock"></i>
                                </span>
                                    <span class="text ml-2" v-text="'Thời gian làm bài: ' + _.get(report,'time_test', 0)"></span>
                                </div>
                            </div>
                            <div class="text-left mormal-text">
                                <span class="text">Người đánh giá: </span>
                                <span class="text" v-text=" _.get(report, 'user.name','')"></span>
                            </div>
                            <div class="text-left mormal-text">
                                <span class="text">Email: </span>
                                <span class="text" v-text=" _.get(report, 'user.email','')"></span>
                            </div>
                            <hr>
                            <div class="thanks pb-5">
                                <p class="text text-left" v-text="'Đội ngũ SeLfDiscoveryQuizz xin trân trọng cảm ơn ' + _.get(report, 'user.name','') + ' Đã tham gia ' + _.get(report, 'question_package.name','') + ' Dựa vào kết quả chúng tôi ghi nhận trong quá trình thực hiện đánh giá của bạn, chúng tôi đã phân tích, đánh giá dựa vào kết quả ghi nhận được' "></p>
                            </div>
                            <div class="body-content pb-5">
                                <div class="body-content-item">
                                    <h3 class="title">I. ĐÁNH GIÁ PHÂN TÍCH</h3>
                                    <p class="text" v-html="renderMarkdown(_.get(report, 'evaluate', ''))"></p>
                                </div>
                            </div>
                            <div class="body-content pb-5">
                                <div class="body-content-item">
                                    <h3 class="title">II. ĐỀ XUẤT CẢI THIỆN</h3>
                                    <p class="text" v-html="renderMarkdown(_.get(report, 'propose', ''))"></p>
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
import HeaderV2 from '../_partials/Header_v2.vue';
import * as _ from "lodash";
import VeeInput from "@/components/form/VeeInput.vue";
import 'vue3-toastify/dist/index.css';
import OpenAI from 'openai';
</script>
<script>
import {toast} from "vue3-toastify";
import MarkdownIt from "markdown-it";

export default {

    data: function () {
        return {
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
            user: {},
            loading: false,
            header_token: {},
            url_query: {
                user_id: '',
                report_id: '',
            },
            report: []
        };
    },

    created() {
        let vm = this;

    },
    mounted() {
        let vm = this;
        let user = localStorage.getItem("user");
        let token = JSON.parse(user).data.access_token;
        vm.url_query.user_id = this.$route.query.user_id;
        vm.url_query.report_id = this.$route.query.report_id;
        vm.user = JSON.parse(user).data.user;
        vm.header_token = {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        };
        vm.loadReport();
    },
    computed: {},
    methods: {
        renderMarkdown(markdownText) {
            const md = new MarkdownIt({
                html: true,
                linkify: true,
                typographer: true,
            });
            return md.render(markdownText);
        },
        loadReport() {
            let vm = this;
            axios.get(`/api/report/${vm.url_query.report_id}`, vm.header_token)
                .then(response => {
                    vm.report = response.data;
                }).catch(error => {
                toast.error(error.message, {autoClose: 1500});
            })
        },
    },
    watch: {}

}
</script>
<style lang="scss" scoped>

</style>
