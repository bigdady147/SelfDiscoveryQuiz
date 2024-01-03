<template>
    <LayoutMaster>
        <template #BreadCrumb>
            <admin-breadcrumb></admin-breadcrumb>
        </template>
        <template #BodyMain>
            <div class="app-admin">
                <div class="list-action d-flex justify-content-end">
                    <button @click="addItem()" class="btn btn-sm btn-success">Create new</button>
                </div>
                <h2>List Report</h2>
                <hr>
                <div class="app-data-table">

                    <table class="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">User</th>
                            <th scope="col">Packages</th>
                            <th scope="col">Created at</th>
                            <th scope="col">Updated at</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item, index) in list.data">
                            <th scope="row" v-text="index + 1"></th>
                            <td v-text="_.get(item,'user.email','')"></td>
                            <td v-text="_.get(item,'question_package.name','')"></td>
                            <td v-text="formattedTime(_.get(item,'created_at',''))"></td>
                            <td v-text="formattedTime(_.get(item,'updated_at',''))"></td>
                            <td>
                                <div class="btn-group btn-table">
                                    <button type="button" class="btn btn-sm btn-primary dropdown-toggle"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                        Action
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li @click="viewItem(item)"><a class="dropdown-item" href="#">
                                            <span><i class="fa-regular fa-eye text-primary"></i></span>
                                            <span class="pl-2">View</span>
                                        </a></li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <vee_pagination @page-changed="handlePageChange" :pagesCount="list.last_page"></vee_pagination>
                </div>
            </div>
        </template>
    </LayoutMaster>
</template>
<script setup>
import LayoutMaster from '../../_layouts/Master.vue'
import AdminBreadcrumb from "@/components/administrations/AdminBreadcrumb.vue";
import VeeInput from "@/components/form/VeeInput.vue";
import * as _ from "lodash";
import VeeInputNumber from "@/components/form/VeeInputNumber.vue";

</script>
<script>
import {toast} from "vue3-toastify";
import VeeInput from "@/components/form/VeeInput.vue";

export default {
    name: 'ListQuestions',
    components: {VeeInput, toast},
    data: function () {
        return {
            item_edit: {
                content: '',
                type_question: '',
                level: null,
                category: null,
                time: 0,
                status: 'inactive',
                answer: [],
                created_by: '',
                updated_by: '',
            },
            selectedFile: '',
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
            header_token: {},
            list: {
                data: [],
                page: 1,
                per_page: 10,
                last_page: 0,
                order: 'desc',
            },
            customFileText: 'Choose file',
            fileInputData: null,
            user: {},
        };
    },

    created() {

    },
    mounted() {
        let vm = this;
        let user = localStorage.getItem("user");
        let token = JSON.parse(user).data.access_token;

        vm.user = JSON.parse(user).data.user;
        vm.header_token = {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        };
        vm.loadList();
    },
    computed: {},
    methods: {
        addAnswer(item) {
            let vm = this;
            let count = 0;
            if ( item.answer.length == 0) {
                item.answer.push({
                    id: count + 1,
                    text: '',
                    value: count + 1,
                    is_correct: false,
                })
            } else {
                item.answer.push({
                    id: item.answer.length + 1,
                    text: '',
                    value: item.answer.length + 1,
                    is_correct: false,
                })
            }
        },

        viewItem(item) {
            let vm = this;
            this.$router.push({ name: 'report.index', query: { user_id: item.user.id , report_id: item.id } });
        },


        toCurrency: function (value) {
            if (value >= 1000 || value <= -1000) {
                return (value === undefined) ? '' : Math.round(value, 0).toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            } else {
                return value;
            }
        },
        formattedTime(time) {
            let formattedTime = moment(time).format('HH:mm DD/MM/YYYY');
            return formattedTime;
        },
        loadList() {
            let vm = this;
            axios.get(`/api/report?page=${vm.list.page}&per_page=${vm.list.per_page}`, vm.header_token)
                .then(response => {
                    vm.list.data = response.data.data;
                    vm.list.last_page = response.data.last_page;
                }).catch(error => {
                toast.error(error.message, {autoClose: 1500});
            })
        },

        truncateString(str, maxLength) {
            if (str.length > maxLength) {
                return str.substring(0, maxLength) + "...";
            } else {
                return str;
            }
        },

        removeItem(item){
          let vm = this;
            axios.delete(`/api/report/${item.id}`, vm.header_token)
                .then(response => {
                    toast.success(response.data.message, {autoClose: 1500});
                    vm.loadList();
                    vm.clearData();
                }).catch(error => {
                toast.error(error.message, {autoClose: 1000});
            })
        },


    }
}
</script>
<style lang="scss" scoped>
.app-admin {
    padding: 10px;
    background: #fff;
}
</style>
