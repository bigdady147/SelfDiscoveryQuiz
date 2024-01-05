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
<!--                    <div v-html="this.result_render"></div>-->
                    <div v-html="renderMarkdown(result_render)">
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
import MarkdownIt from "markdown-it";

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
            loading: false ,
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
            },
            header_token : {},
            result : '',
            result_render : '',
        };
    },

    created() {
        // let vm = this;
        // let user = localStorage.getItem("user");
        // vm.user = JSON.parse(user).data.user;
        // let token = JSON.parse(user).data.access_token;
        // vm.url_query.packages_id = this.$route.query.packages_id;
        // vm.url_query.user_id = this.$route.query.user_id;
        // vm.header_token = {
        //     headers: {
        //         'Authorization': `Bearer ${token}`,
        //         'Content-Type': 'application/json'
        //     }
        // };

    },
    async mounted() {
        // this.getUser();
        this.secret_key =  import.meta.env.VITE_OPENAI_API_KEY;

        // this.result =  await this.requestOpenAI();

        this.result_render = this.result;

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
        async requestOpenAI(question) {
            let vm = this;
            const openai = new OpenAI({
                apiKey: vm.secret_key, // This is the default and can be omitted
                dangerouslyAllowBrowser: true
            });
            async function main() {
                const stream = await openai.chat.completions.create({
                    model: 'gpt-3.5-turbo',
                    messages: [{role: 'user', content: 'Answer return markdown format. Giải thích cho tôi về Async, Await trong Javascript và các ví dụ minh họa'}],
                    stream: false,
                });
               return stream.choices[0].message.content;
                // for await (const chunk of stream) {
                //     // process.stdout.write(chunk.choices[0]?.delta?.content || '');
                //     console.log(chunk.choices[0]?.delta?.content)
                // }
            }

            // let result = "";
            // result = await main();
            // return result;
         let rs = "";
            rs = main();
            return rs;
        },

    },
    watch: {

    }

}
</script>
<style lang="scss" scoped>

</style>
