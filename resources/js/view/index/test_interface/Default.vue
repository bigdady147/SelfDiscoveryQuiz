<template>
    <LayoutMaster>
        <template #HeaderMain>
            <HeaderV2></HeaderV2>
        </template>
        <template #loading>
            <page_loading v-if="loading">
                <template #textLoading>
                    <div style="font-size: 22px; font-weight: 600" class="text-center text-light">
                        Your report is currently being processed. To ensure the most accurate results, please wait for a moment...
                    </div>
                </template>
            </page_loading>
        </template>
        <template #BodyMain>
            <section class="packages-detail">
                <div v-show="!is_testing && !is_report" class="packages-content  form-user">
                    <h6 class="text-center title">Personal information</h6>
                    <span
                        class="small text-danger sub-title">Please provide personal information to start the test. (*)</span>
                    <hr>
                    <div class="form-group">
                        <div class="row">
                            <div class="col-md-6 ">
                                <label class=" mb-1 fs-label">Full name</label>
                                <vee-input disabled v-model="item_user.name"></vee-input>
                            </div>
                            <div class="col-md-6 ">
                                <label class=" mb-1 fs-label">Email</label>
                                <vee-input disabled v-model="item_user.email"></vee-input>
                            </div>
                            <div class="col-md-6 mt-2">
                                <label class=" mb-1 fs-label">Phone</label>
                                <vee-input v-model="item_user.phone"></vee-input>
                            </div>
                            <div class="col-md-6 mt-2">
                                <label class=" mb-1 fs-label">Address</label>
                                <vee-input v-model="item_user.address"></vee-input>
                            </div>
                            <div class="col-md-12 mt-5 d-flex justify-content-center">
                                <button @click="startAndUpdateUser()" class="btn btn-sm btn-testing"> START</button>
                            </div>
                        </div>

                    </div>
                </div>
                <div v-show="is_testing && !is_report" class="packages-content  form-user form-testing">
                    <div class="block-head">
                        <h6 class="text-center title" v-text="_.get(packages,'name', '')"></h6>
                        <div class="clock">
                        <span class="icon">
                            <i class="fa-regular fa-clock text-danger"></i>
                        </span>
                            <span class="text ml-2 text-danger" v-text="displayTime"></span>
                        </div>
                        <div class="mt-3">
                            <div class="progress">
                                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                                     :aria-valuenow="(current_index / list_questions.data.length) * 100"
                                     aria-valuemin="0" aria-valuemax="100"
                                     :style="`width: ${(current_index / list_questions.data.length) * 100}%`"></div>
                            </div>
                        </div>
                        <hr>
                    </div>

                    <div v-for="(ques, index) in list_questions.data" :key="index" class="group-question">
                        <div v-if="current_index == index" class="row">
                            <div class="col-md-12 pb-5"
                                 v-text="'Question ' + (index + 1) + ': ' + _.get(ques, 'content', '')"></div>
                            <div class="img pb-5">
                                <img style="display: block; max-width: 60%; margin: 0 auto"
                                     :src="_.get(ques,'image_question','')" alt="">
                            </div>
                            <div v-for="(data, i) in ques.answer" class="col-md-6 mt-2">
                                <div class="form-group">
                                    <input type="radio" :id="data.name + '-' + i" :name="'ans' + current_index"
                                           v-model="ques.answer_selected_id" :value="data.id">
                                    <label class="pl-2" :for="data.name + '-' + i"
                                           v-text="(i + 1) + '. ' + _.get(data,'text','')"></label><br>
                                </div>
                                <div class="img">
                                    <img style="display: block; max-width: 100%" :src="data.image_question" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <hr>
                        <div v-if="(current_index + 1) !== list_questions.data.length" class="block-action pt-3">
                            <button v-if="current_index > 0" class="btn btn-sm btn-testing" @click="current_index--">
                                Previous
                            </button>
                            <button class="btn btn-sm btn-testing" @click="current_index++">Next</button>
                        </div>
                        <div v-else class="block-action pt-3">
                            <button class="btn btn-sm btn-testing" @click="current_index--">Previous</button>
                            <button :disabled="flg_save" class="btn btn-sm btn-testing" @click="confirmSaveTheTest()">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
                <div v-show="is_report" class="packages-content  form-user  form-report">
<!--                    <h6 class="text-center title">Congratulation</h6>-->
                    <div class="img pb-5">
                        <img style="max-width: 60%; display: block; margin: 0 auto" src="../../../../../public/images/main/congrat.png" alt="">
                    </div>
                    <p
                        class="small  sub-title text-center">Sincere thanks for successfully completing the quiz! <br> Your effort and
                        companionship are significant sources of motivation for us. <br> To view your results and detailed report,
                        please click on the 'View Report' button below. <br> We hope you are pleased with your outcome.
                        Keep up the effort and continuous learning! Thank you.</p>
                    <hr>
                    <div class="block-action d-flex justify-content-center">
                        <button class="btn-sm btn btn-testing" @click="viewReport()">
                            <span>
                                <i class="fa-solid fa-book-open"></i>
                            </span>
                            <span class="ml-2">View report</span>
                        </button>
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
import OpenAI from "openai";

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
            url_query: {
                user_id: '',
                packages_id: '',
            },
            item_user: {},
            time: 0,
            displayTime: "00:00",
            is_testing: false,
            item_edit: {
                score: 0,
                time_test: 0,
                question_package_id : '',
                list_questions : [],
                evaluate : '',
                propose : '',
                user_id : '',
            },
            list_questions: {
                data: []
            },
            current_index: 0,
            flg_save: false,
            question_answer_str : "",
            secret_key : "",
            is_report : false,
            data_report: null,
            report_router: {
                user_id : '',
                report_id: '',
            }
        };
    },

    created() {
        let vm = this;
        let user = localStorage.getItem("user");
        let token = JSON.parse(user).data.access_token;
        vm.url_query.packages_id = this.$route.query.packages_id;
        vm.url_query.user_id = this.$route.query.user_id;
        vm.user = JSON.parse(user).data.user;
        vm.header_token = {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        };
        vm.loadPackages();

    },
    mounted() {
        this.getUser();
        this.secret_key =  import.meta.env.VITE_OPENAI_API_KEY;

    },
    computed: {},
    methods: {
        loadPackages() {
            let vm = this;
            axios.get(`/api/question-packages/${vm.url_query.packages_id}`, vm.header_token)
                .then(response => {
                    vm.packages = response.data;
                    vm.packages.question_ids = JSON.parse(vm.packages.question_ids);
                    vm.time = vm.packages.time;
                    vm.loadListQuestion(vm.packages.question_ids);
                    // toast.success(response.data.message, {autoClose: 1500});
                    vm.loading = false;
                    vm.item_edit.question_package_id = vm.packages.id;
                }).catch(error => {
                toast.error(error.message, {autoClose: 1500});
            })
        },
        loadListQuestion(ids) {
            let vm = this;
            let item = {
                ids: JSON.stringify(ids),
            }
            axios.get(`/api/questions-ids?ids=${JSON.stringify(ids)}`, vm.header_token)
                .then(response => {
                    vm.list_questions.data = response.data;
                    _.map(vm.list_questions.data, (val) => {
                        val.answer = JSON.parse(val.answer);
                        val.answer_selected_id = "";
                    })
                    _.map(vm.list_questions.data, (val) => {
                        _.map(val.answer, (ans) => {
                            ans.checked = false;
                        })
                    })
                }).catch(error => {
                toast.error(error.message, {autoClose: 1500});
            })
        },
        async requestOpenAI(question) {
            let vm = this;
            const openai = new OpenAI({
                apiKey: vm.secret_key, // This is the default and can be omitted
                dangerouslyAllowBrowser: true
            });
            async function main() {
                const stream = await openai.chat.completions.create({
                    model: 'gpt-3.5-turbo',
                    messages: [{role: 'user', content: question}],
                    stream: false,
                });
                return stream.choices[0].message.content;
            }

            let result = "";
            result = await main();
            return result;
        },
        startAndUpdateUser() {
            let vm = this;
            axios.put(`/api/profile/${vm.item_user.id}`, vm.item_user, vm.header_token)
                .then(response => {
                    toast.success(response.data.message, {autoClose: 1500});
                    vm.is_testing = true;
                    vm.countdown();


                }).catch(error => {
                toast.error(error.message, {autoClose: 1500});
            })
        },
        countdown() {
            const interval = setInterval(() => {
                this.time--;
                const minutes = Math.floor(this.time / 60);
                const seconds = this.time % 60;
                this.displayTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
                if (this.time <= 0) {
                    clearInterval(interval);
                }
            }, 1000);
        },
        getUser() {
            let vm = this;
            axios.get(`/api/profile`, vm.header_token)
                .then(response => {
                    vm.item_user = response.data;
                }).catch(error => {
                toast.error(error.message, {autoClose: 1500});
            })
        },
        getTime(val) {
            let vm = this;
            let minutes = Math.floor(val / 60);
            let seconds = val % 60;
            return `Time: ${minutes} minutes - ${seconds}s `
        },
        saveTheTest() {
            let vm = this;
        },
        viewReport() {
            let vm = this;
            this.$router.push({ name: 'report.index', query: { user_id: vm.report_router.user_id , report_id: vm.report_router.report_id } });

        },
        async confirmSaveTheTest() {
            let vm = this;
            let text;
            if (confirm("Are you sure you want to end the exam process? ") == true) {
                text = "OK!";
                vm.item_edit.list_questions = JSON.stringify(vm.list_questions.data);
                vm.item_edit.user_id = vm.user.id;
                let evaluate = "";
                evaluate = `Dựa vào bài trắc nghiệm ${vm.packages.name} Dựa vào các câu hỏi, các câu trả lời tương ứng, ${this.question_answer_str} thì hãy cho tôi  ${vm.packages.name} nào tương ứng với câu hỏi và câu trả lời trên, phân tích chi tiết, tại sao tôi lại phù hợp với ngành nghề đó ?`
                let propose = "";
                propose = `Dựa vào bài trắc nghiệm ${vm.packages.name} Dựa vào các câu hỏi, các câu trả lời tương ứng, ${this.question_answer_str} thì hãy cho tôi  ${vm.packages.name} nào tương ứng với câu hỏi và câu trả lời trên, phân tích chi tiết, cho tôi đề xuất cải thiện bản thân để bản thân có thể phát triển hơn ?`

                vm.loading = true;
                vm.item_edit.evaluate = await vm.requestOpenAI(evaluate);
                vm.item_edit.propose = await vm.requestOpenAI(propose);
                axios.post(`/api/report`, vm.item_edit)
                    .then(response => {
                        vm.loading = false;
                        vm.is_report = true; // chuyển hướng sang tab báo cáo
                        console.log('response', response);
                        vm.data_report = response.data.data;
                        vm.report_router.user_id = vm.user.id;
                        vm.report_router.report_id = vm.data_report.id;

                    }).catch(error => {
                    toast.error(error.message, {autoClose: 1500});
                })


                vm.loading = false;

            } else {
                text = "Canceled!";
            }
        }
    },
    watch: {
        'list_questions.data': {
            deep: true,
            handler: function (val) {
                let arr_result  = [];
                _.map(this.list_questions.data, (val) => {
                    let count = 0;
                      this.question_answer_str = "";
                        if (val.answer_selected_id !== "") {
                            _.map(val.answer, (ans) => {
                                if(val.answer_selected_id == ans.id){
                                     arr_result.push(`Với câu hỏi ${val.content} tôi chọn đáp án là ${ans.text}`);
                                }
                            })
                            count++;
                        }
                    this.question_answer_str = arr_result.join(" ");
                    if (count == _.size(this.list_questions.data)) {
                        this.flg_save = true;
                    }
                })
            }
        }
    }

}
</script>
<style lang="scss" scoped>

</style>
