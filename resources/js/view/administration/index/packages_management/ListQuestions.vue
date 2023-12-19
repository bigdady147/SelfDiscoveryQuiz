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
                <h2>List Question</h2>
                <hr>
                <div class="app-data-table">

                    <table class="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Content</th>
                            <!--                            <th scope="col">Image</th>-->
                            <!--                            <th scope="col">Answer</th>-->
                            <th scope="col">Time(s)</th>
                            <th scope="col">Type</th>
                            <th scope="col">Level</th>
                            <th scope="col">Category</th>
                            <th scope="col">Created at</th>
                            <th scope="col">Updated at</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item, index) in list.data">
                            <th scope="row" v-text="index + 1"></th>
                            <td v-text="_.get(item,'content','')"></td>
                            <!--                            <td>-->
                            <!--                                <div class="img-data">-->
                            <!--                                    <img :src="_.get(item, 'image_question', '')" alt="">-->
                            <!--                                </div>-->
                            <!--                            </td>-->
                            <!--                            <td>-->
                            <!--                                <ul v-if="item.answer.length > 0">-->
                            <!--                                    <li class="mt-1" v-for="(ans, i) in item.answer" v-text="   ans.text"></li>-->
                            <!--                                </ul>-->
                            <!--                                <span v-else>N/A</span>-->
                            <!--                            </td>-->
                            <td v-text="toCurrency(_.get(item,'time',''))"></td>
                            <td>
                                <div v-for="(val, ti) in type_questions">
                                    <span v-if="val.value == item.type_question" v-text="_.get(val,'text','')"></span>
                                </div>
                            </td>
                            <td>
                                <div v-for="(val, ti) in levels">
                                    <span v-if="val.value == item.level" v-text="_.get(val,'text','')"></span>
                                </div>
                            </td>
                            <td>
                                <div v-for="(val, ti) in categories">
                                    <span v-if="val.value == item.category" v-text="_.get(val,'text','')"></span>
                                </div>
                            </td>
                            <td v-text="formattedTime(_.get(item,'created_at',''))"></td>
                            <td v-text="formattedTime(_.get(item,'updated_at',''))"></td>
                            <td v-text="_.get(item,'status','')"></td>
                            <td v-text="_.get(item,'status','')"></td>
                        </tr>
                        </tbody>
                    </table>
                    <vee_pagination @page-changed="handlePageChange" :pagesCount="list.last_page"></vee_pagination>
                </div>
            </div>

            <div id="modalAddNew" class="modal modal-xl fade" tabindex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Create new question</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-md-12 mb-2">
                                    <label class="fw-medium mb-1">Question name</label>
                                    <vee-input type="text" v-model="item_edit.content"></vee-input>
                                </div>
                                <div class="col-md-4 mb-2 ">
                                    <label class="fw-medium mb-1">Type</label>
                                    <select v-model="item_edit.type_question"
                                            class="form-control form-control-sm w-100px" name="" id="">
                                        <option v-for="(type, typei) in type_questions" :key="typei + 'type'"
                                                :value="type.value" v-text="_.get(type,'text','')"></option>

                                    </select>
                                </div>
                                <div v-if="item_edit.type_question == 'image' " class="col-md-4">
                                    <label class="fw-medium mb-1">Image</label>
                                    <div>
                                        <input type="file" ref="fileInput" @change="handleFileUpload">
                                    </div>
                                </div>
                                <div class="col-md-4 mb-2 ">
                                    <label class="fw-medium mb-1">List Category</label>
                                    <select v-model="item_edit.category" class="form-control form-control-sm w-100px"
                                            name="" id="">
                                        <option v-for="(type, typei) in categories" :key="typei + 'type'"
                                                :value="type.value" v-text="_.get(type,'text','')"></option>

                                    </select>
                                </div>
                                <div class="col-md-4 mb-2 ">
                                    <label class="fw-medium mb-1">Type of question</label>
                                    <select v-model="item_edit.level" class="form-control form-control-sm w-100px"
                                            name="" id="">
                                        <option v-for="(type, typei) in levels" :key="typei + 'type'"
                                                :value="type.value" v-text="_.get(type,'text','')"></option>

                                    </select>
                                </div>
                                <div class="fw-medium col-md-4 mb-3">
                                    <label class="fw-medium mb-1">Time (second)</label>
                                    <vee-input-number type="text" v-model.number="item_edit.time"></vee-input-number>

                                </div>
                                <hr>
                                <div class="d-flex mb-2">
                                    <button @click="addAnswer(item_edit)" type="button" class="btn btn-sm btn-primary">
                                        Add answer
                                    </button>
                                </div>
                                <div v-for="(ans, i) in item_edit.answer" class="col-md-6 mb-2">
                                    <div>
                                        <div class="d-flex justify-content-between">
                                            <div>
                                                <label class="fw-medium mb-1" v-text="'Answer' + ' ' + (i + 1)"></label>
                                            </div>
                                            <div class="d-flex align-items-center mb-1">
                                                <div class="fw-medium  pe-2">Is correct</div>
                                                <input type="checkbox" v-model="ans.is_correct">
                                            </div>
                                        </div>
                                    </div>
                                    <vee-input type="text" v-model="ans.text"></vee-input>

                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" @click="saveItem" class="btn btn-primary">Save</button>
                        </div>
                    </div>
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
            }
        };
    },

    created() {

    },
    mounted() {
        let vm = this;
        let user = localStorage.getItem("user");
        let token = JSON.parse(user).data.access_token;
        vm.header_token = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };
        vm.loadList();
    },
    computed: {},
    methods: {
        addAnswer(item) {
            let vm = this;
            let count = 0;
            if (item.answer.length == 0) {
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
        addItem() {
            let vm = this;
            let myModal = new bootstrap.Modal(document.getElementById('modalAddNew'));
            myModal.show();

        },
        handleFileUpload(event) {
            let vm = this;
            this.selectedFile = event.target.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(this.selectedFile);
            reader.onload = function () {
                vm.item_edit.image_question = reader.result;
            };
            console.log(vm.item_edit);
        },
        uploadImage() {
            const formData = new FormData();
            formData.append('image', this.selectedFile);

        },
        handlePageChange(page){
            let vm = this;
            vm.list.page = page;
            vm.loadList();
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
            axios.get(`/api/questions?page=${vm.list.page}&per_page=${vm.list.per_page}`, vm.header_token)
                .then(response => {
                    vm.list.data = response.data.data;
                    console.log(response.data.last_page);
                    vm.list.last_page = response.data.last_page;
                    _.map(vm.list.data, (val) => {
                        val.answer = JSON.parse(val.answer);
                    })
                }).catch(error => {
                toast.error(error, {autoClose: 1500});
            })
        },
        saveItem() {
            let vm = this;
            // let myModal = new bootstrap.Modal(document.getElementById('modalAddNew'));
            if (vm.item_edit.answer.length > 0) {
                vm.item_edit.answer = JSON.stringify(vm.item_edit.answer);
            } else {
                vm.item_edit.answer = null;
            }
            axios.post(`/api/questions`, vm.item_edit, vm.header_token)
                .then(response => {

                    toast.success(response.data.message, {autoClose: 1500});

                    let myModalEl = document.getElementById('modalAddNew');
                    let modal = bootstrap.Modal.getInstance(myModalEl)
                    modal.hide();

                }).catch(error => {
                toast.error(error, {autoClose: 1000});
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
