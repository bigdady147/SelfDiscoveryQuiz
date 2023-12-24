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
                <h2>List Question packages</h2>
                <hr>
                <div class="app-data-table">
                    <!--                    <table class="table table-striped">-->
                    <!--                        <thead>-->
                    <!--                        <tr>-->
                    <!--                            <th scope="col">#</th>-->
                    <!--                            <th scope="col">Content</th>-->
                    <!--                            <th scope="col">Time(s)</th>-->
                    <!--                            <th scope="col">Type</th>-->
                    <!--                            <th scope="col">Level</th>-->
                    <!--                            <th scope="col">Category</th>-->
                    <!--                            <th scope="col">Created at</th>-->
                    <!--                            <th scope="col">Updated at</th>-->
                    <!--                            <th scope="col">Status</th>-->
                    <!--                            <th scope="col">Action</th>-->
                    <!--                        </tr>-->
                    <!--                        </thead>-->
                    <!--                        <tbody>-->
                    <!--                        <tr v-for="(item, index) in list.data">-->
                    <!--                            <th scope="row" v-text="index + 1"></th>-->
                    <!--                            <td v-text="_.get(item,'content','')"></td>-->
                    <!--                            <td v-text="toCurrency(_.get(item,'time',''))"></td>-->
                    <!--                            <td>-->
                    <!--                                <div v-for="(val, ti) in type_questions">-->
                    <!--                                    <span v-if="val.value == item.type_question" v-text="_.get(val,'text','')"></span>-->
                    <!--                                </div>-->
                    <!--                            </td>-->
                    <!--                            <td>-->
                    <!--                                <div v-for="(val, ti) in levels">-->
                    <!--                                    <span v-if="val.value == item.level" v-text="_.get(val,'text','')"></span>-->
                    <!--                                </div>-->
                    <!--                            </td>-->
                    <!--                            <td>-->
                    <!--                                <div v-for="(val, ti) in categories">-->
                    <!--                                    <span v-if="val.value == item.category" v-text="_.get(val,'text','')"></span>-->
                    <!--                                </div>-->
                    <!--                            </td>-->
                    <!--                            <td v-text="formattedTime(_.get(item,'created_at',''))"></td>-->
                    <!--                            <td v-text="formattedTime(_.get(item,'updated_at',''))"></td>-->
                    <!--                            <td >-->
                    <!--                                <span :class="item.status == 'active' ? 'text-success' : 'text-warning' " v-text="_.get(item,'status','')"></span>-->
                    <!--                            </td>-->
                    <!--                            <td>-->
                    <!--                                <div class="btn-group btn-table">-->
                    <!--                                    <button type="button" class="btn btn-sm btn-primary dropdown-toggle"-->
                    <!--                                            data-bs-toggle="dropdown" aria-expanded="false">-->
                    <!--                                        Action-->
                    <!--                                    </button>-->
                    <!--                                    <ul class="dropdown-menu">-->
                    <!--                                        <li @click="viewItem(item)"><a class="dropdown-item" href="#">-->
                    <!--                                            <span><i class="fa-regular fa-eye text-primary"></i></span>-->
                    <!--                                            <span class="pl-2">View</span>-->
                    <!--                                        </a></li>-->
                    <!--                                        <li @click="editItem(item)"><a class="dropdown-item" href="#">-->
                    <!--                                            <span><i class="fa-regular fa-pen-to-square text-warning"></i></span>-->
                    <!--                                            <span class="pl-2">Edit</span>-->
                    <!--                                        </a></li>-->
                    <!--                                        <li @click="activeItem(item)"><a class="dropdown-item" href="#">-->
                    <!--                                            <span><i class="fa-solid fa-circle-check text-success"></i></span>-->
                    <!--                                            <span class="pl-2">Active</span>-->
                    <!--                                        </a></li>-->
                    <!--                                        <li @click="removeItem(item)"><a class="dropdown-item" href="#">-->
                    <!--                                            <span><i class="fa-solid fa-trash-can text-danger"></i></span>-->
                    <!--                                            <span class="pl-2">Delete</span>-->
                    <!--                                        </a></li>-->
                    <!--                                        &lt;!&ndash;                                        <li>&ndash;&gt;-->
                    <!--                                        &lt;!&ndash;                                            <hr class="dropdown-divider">&ndash;&gt;-->
                    <!--                                        &lt;!&ndash;                                        </li>&ndash;&gt;-->
                    <!--                                        &lt;!&ndash;                                        <li><a class="dropdown-item" href="#">Separated link</a></li>&ndash;&gt;-->
                    <!--                                    </ul>-->
                    <!--                                </div>-->
                    <!--                            </td>-->
                    <!--                        </tr>-->
                    <!--                        </tbody>-->
                    <!--                    </table>-->
                    <!--                    <vee_pagination @page-changed="handlePageChange" :pagesCount="list.last_page"></vee_pagination>-->
                </div>
            </div>

            <div id="modalAddNew" class="modal modal-xl fade" tabindex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Create new question packages</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-md-12 mb-2">
                                    <label class="fw-medium mb-1 fs-label">Packages name</label>
                                    <vee-input type="text" v-model="item_edit.name"></vee-input>
                                </div>
                                <div class="col-md-4">
                                    <label class="fw-medium mb-1 fs-label">Image</label>
                                    <div>
                                        <input type="file" ref="fileInput" @change="handleFileUpload">
                                    </div>
                                </div>
                                <div class="col-md-4 mb-2 ">
                                    <label class="fw-medium mb-1 fs-label">List Category</label>
                                    <select v-model="item_edit.category" class="form-control form-control-sm w-100px"
                                            name="" id="">
                                        <option v-for="(type, typei) in categories" :key="typei + 'type'"
                                                :value="type.value" v-text="_.get(type,'text','')"></option>

                                    </select>
                                </div>
                                <div class="col-md-4 mb-2 ">
                                    <label class="fw-medium mb-1 fs-label">Type of question</label>
                                    <select v-model="item_edit.level" class="form-control form-control-sm w-100px"
                                            name="" id="">
                                        <option v-for="(type, typei) in levels" :key="typei + 'type'"
                                                :value="type.value" v-text="_.get(type,'text','')"></option>
                                    </select>
                                </div>
                                <div class="fw-medium col-md-4 mb-3">
                                    <label class="fw-medium mb-1 fs-label">Time packages (second)</label>
                                    <vee-input-number type="text" v-model.number="item_edit.time"></vee-input-number>
                                </div>
                                <div class="col-md-4 mb-2 ">
                                    <label class="fw-medium mb-1 fs-label">Test interface</label>
                                    <select v-model="item_edit.test_interface"
                                            class="form-control form-control-sm w-100px"
                                            name="" id="">
                                        <option v-for="(type, typei) in interfaces" :key="typei + 'type'"
                                                :value="type.value" v-text="_.get(type,'text','')"></option>

                                    </select>
                                </div>
                                <hr>
                                <div class="col-md-12">
                                    <div class="box-table-modal">
                                        <h4 class="txt-md">List question</h4>
                                        <table class="table table-striped">
                                            <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Content</th>
                                                <th scope="col">Type</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr v-for="(ques, i) in list_questions.data" :key="'ques' + i">
                                                <td style="width: 50px" v-text=" i + 1"></td>
                                                <td v-text="_.get(ques, 'content' , '')"></td>
                                                <td style="width: 120px"
                                                    v-text="_.get(ques, 'type_question' , '')"></td>
                                                <td style="width: 100px">
                                                    <button v-if="!ques.selected " @click="addQuestions(ques)"
                                                            style="gap: 10px" type="button"
                                                            class="btn btn-sm bg-primary w-100 text-light d-flex align-items-center">
                                                        <span>
                                                            <i class="fa-solid fa-plus"></i>
                                                        </span>
                                                        <span>
                                                            Add
                                                        </span>
                                                    </button>
                                                    <button v-else @click="removeQuestion(ques)" style="gap: 10px"
                                                            type="button"
                                                            class="btn btn-sm bg-danger w-100 text-light d-flex align-items-center">
                                                        <span>
                                                            <i class="fa-solid fa-trash"></i>
                                                        </span>
                                                        <span>
                                                            Remove
                                                        </span>
                                                    </button>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        <vee_pagination @page-changed="handlePageChangeQuestion"
                                                        :pagesCount="list_questions.last_page"></vee_pagination>

                                    </div>
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
            <!--            <div id="modalView" class="modal modal-xl fade" tabindex="-1" aria-labelledby="exampleModalLabel"-->
            <!--                 aria-hidden="true">-->
            <!--                <div class="modal-dialog">-->
            <!--                    <div class="modal-content">-->
            <!--                        <div class="modal-header">-->
            <!--                            <h5 class="modal-title" id="exampleModalLabel">Edit question</h5>-->
            <!--                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>-->
            <!--                        </div>-->
            <!--                        <div class="modal-body">-->
            <!--                            <div class="row">-->
            <!--                                <div class="col-md-12 mb-2">-->
            <!--                                    <label class="fw-medium mb-1 fs-label">Packages name</label>-->
            <!--                                    <vee-input type="text" v-model="item_edit.name"></vee-input>-->
            <!--                                </div>-->
            <!--                                <div class="col-md-4 mb-2 ">-->
            <!--                                    <label class="fw-medium mb-1 fs-label">List Category</label>-->
            <!--                                    <select v-model="item_edit.category" class="form-control form-control-sm w-100px"-->
            <!--                                            name="" id="">-->
            <!--                                        <option v-for="(type, typei) in categories" :key="typei + 'type'"-->
            <!--                                                :value="type.value" v-text="_.get(type,'text','')"></option>-->

            <!--                                    </select>-->
            <!--                                </div>-->
            <!--                                <div class="col-md-4 mb-2 ">-->
            <!--                                    <label class="fw-medium mb-1 fs-label">Type of question</label>-->
            <!--                                    <select v-model="item_edit.level" class="form-control form-control-sm w-100px"-->
            <!--                                            name="" id="">-->
            <!--                                        <option v-for="(type, typei) in levels" :key="typei + 'type'"-->
            <!--                                                :value="type.value" v-text="_.get(type,'text','')"></option>-->

            <!--                                    </select>-->
            <!--                                </div>-->
            <!--                                <div class="col-md-4 mb-2 ">-->
            <!--                                    <label class="fw-medium mb-1 fs-label">Type of question</label>-->
            <!--                                    <select v-model="item_edit.test_interface"-->
            <!--                                            class="form-control form-control-sm w-100px"-->
            <!--                                            name="" id="">-->
            <!--                                        <option v-for="(type, typei) in interfaces" :key="typei + 'type'"-->
            <!--                                                :value="type.value" v-text="_.get(type,'text','')"></option>-->

            <!--                                    </select>-->
            <!--                                </div>-->
            <!--                                <div class="fw-medium col-md-4 mb-3">-->
            <!--                                    <label class="fw-medium mb-1 fs-label">Time (second)</label>-->
            <!--                                    <vee-input-number type="text" v-model.number="item_edit.time"></vee-input-number>-->
            <!--                                </div>-->
            <!--                                <div class="col-md-4">-->
            <!--                                    <label class="fw-medium mb-1 fs-label">Image</label>-->
            <!--                                    <div>-->
            <!--                                        <input type="file" id="files" ref="fileInput" @change="handleFileUpload"-->
            <!--                                               style="display: none">-->
            <!--                                        <label for="files">-->
            <!--                                            <p class="btn-sm btn btn-primary" type="button"-->
            <!--                                               v-text="truncateString(_.get(item_edit,'image_packages', 'Choose file'), 20)"></p>-->
            <!--                                        </label>-->
            <!--                                    </div>-->
            <!--                                    <div class="img">-->
            <!--                                        <img style="max-width: 60%" :src="item_edit.image_packages" alt="">-->
            <!--                                    </div>-->
            <!--                                </div>-->
            <!--                                <div class="col-md-12">-->
            <!--                                    <table class="table table-striped">-->
            <!--                                        <thead>-->
            <!--                                        <tr>-->
            <!--                                            <th></th>-->
            <!--                                            <th scope="col">#</th>-->
            <!--                                            <th scope="col">Content</th>-->
            <!--                                            <th scope="col">Actionss</th>-->
            <!--                                        </tr>-->
            <!--                                        </thead>-->
            <!--                                    </table>-->
            <!--                                </div>-->
            <!--                            </div>-->
            <!--                        </div>-->
            <!--                        <div class="modal-footer">-->
            <!--                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>-->
            <!--                            <button type="button" @click="saveEditItem" class="btn btn-primary">Save</button>-->
            <!--                        </div>-->
            <!--                    </div>-->
            <!--                </div>-->
            <!--            </div>-->
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
import VeeMultipleSelect from "@/components/form/VeeMultipleSelect.vue";

export default {
    name: 'ListQuestions',
    components: {VeeInput, toast},
    data: function () {
        return {
            item_edit: {
                name: '',
                type_question: '',
                level: null,
                category: null,
                time: 0,
                tested: 0,
                question_ids: [],
                number_question: 0,
                status: 'inactive',
                test_interface: '',
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
            header_token: {},
            list: {
                data: [],
                page: 1,
                per_page: 10,
                last_page: 0,
            },
            list_questions: {
                data: [],
                page: 1,
                per_page: 10,
                last_page: 0,
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
        vm.loadListQuestions();
    },
    computed: {},
    methods: {

        addItem() {
            let vm = this;
            let myModal = new bootstrap.Modal(document.getElementById('modalAddNew'));
            myModal.show();
        },
        viewItem(item) {
            let vm = this;
            vm.item_edit = _.cloneDeep(item);
            let myModal = new bootstrap.Modal(document.getElementById('modalView'));
            myModal.show();
        },
        editItem(item) {
            let vm = this;
            vm.item_edit = _.cloneDeep(item);
            vm.item_edit.updated_by = vm.user.name;
            let myModal = new bootstrap.Modal(document.getElementById('modalView'));
            myModal.show();
        },
        handleFileUpload(event) {
            let vm = this;
            this.selectedFile = event.target.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(this.selectedFile);
            reader.onload = function () {
                vm.item_edit.image_packages = reader.result;
            };
        },
        handlePageChange(page) {
            let vm = this;
            vm.list.page = page;
            vm.loadList();
        },
        handlePageChangeQuestion(page) {
            let vm = this;
            vm.list_questions.page = page;
            vm.loadListQuestions();
        },
        addQuestions(question) {
            let vm = this;
            vm.item_edit.question_ids.push(question.id);
            if (!_.has(question, 'selected')) {
                question.selected = false;
            }
            question.selected = true;
            console.log(vm.item_edit.question_ids)
        },
        removeQuestion(question) {
            let vm = this;
            let result =  _.filter(vm.item_edit.question_ids, (val) => { if(val !== question.id){ return val}});
            vm.item_edit.question_ids = result;
            question.selected = false;
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
            axios.get(`/api/question-packages?page=${vm.list.page}&per_page=${vm.list.per_page}`, vm.header_token)
                .then(response => {
                    vm.list.data = response.data.data;
                    vm.list.last_page = response.data.last_page;
                    _.map(vm.list.data, (val) => {
                        val.question_ids = JSON.parse(val.question_ids);
                    });
                }).catch(error => {
                toast.error(error, {autoClose: 1500});
            })
        },
        loadListQuestions() {
            let vm = this;
            axios.get(`/api/questions?page=${vm.list_questions.page}&per_page=${vm.list_questions.per_page}`, vm.header_token)
                .then(response => {
                    vm.list_questions.data = response.data.data;
                    vm.list_questions.last_page = response.data.last_page;
                    _.map(vm.list_questions.data, (val) => {
                        val.answer = JSON.parse(val.answer);
                    })
                }).catch(error => {
                toast.error(error, {autoClose: 1500});
            })
        },
        clearData() {
            let vm = this;
            vm.item_edit = {
                content: '',
                type_question: '',
                level: null,
                category: null,
                time: 0,
                status: 'inactive',
                answer: vm.list_answer,
                created_by: '',
                updated_by: '',
            };
        },
        truncateString(str, maxLength) {
            if (str.length > maxLength) {
                return str.substring(0, maxLength) + "...";
            } else {
                return str;
            }
        },
        handleSelectedOptions(selectedOptions) {
            // Xử lý kết quả đã chọn ở đây
            console.log('val', selectedOptions);
        },
        saveItem() {
            let vm = this;
            vm.item_edit.created_by = vm.user.name;
            vm.item_edit.updated_by = vm.user.name;
            vm.tested = 0;
            vm.number_question = vm.item_edit.question_ids.length;
            let question_ids = JSON.stringify(vm.item_edit.question_ids);
            vm.item_edit.question_ids = question_ids;
            axios.post(`/api/question-packages`, vm.item_edit, vm.header_token)
                .then(response => {
                    toast.success(response.data.message, {autoClose: 1500});
                    let myModalEl = document.getElementById('modalAddNew');
                    let modal = bootstrap.Modal.getInstance(myModalEl)
                    modal.hide();
                    vm.loadList();
                    vm.clearData();
                }).catch(error => {
                toast.error(error, {autoClose: 1000});
            })
        },
        removeItem(item) {
            let vm = this;
            axios.delete(`/api/questions/${item.id}`, vm.header_token)
                .then(response => {
                    toast.success(response.data.message, {autoClose: 1500});
                    vm.loadList();
                    vm.clearData();
                }).catch(error => {
                toast.error(error, {autoClose: 1000});
            })
        },
        activeItem(item) {
            let vm = this;
            axios.put(`/api/questions/${item.id}/active`, item, vm.header_token)
                .then(response => {
                    toast.success(response.data.message, {autoClose: 1500});
                    vm.loadList();
                    vm.clearData();
                }).catch(error => {
                toast.error(error, {autoClose: 1000});
            })
        },
        saveEditItem() {
            let vm = this;
            if (vm.item_edit.answer && vm.item_edit.answer.length > 0) {
                vm.item_edit.answer = JSON.stringify(vm.item_edit.answer);
            } else {
                vm.item_edit.answer = null;
            }
            axios.put(`/api/questions/${vm.item_edit.id}`, vm.item_edit, vm.header_token)
                .then(response => {
                    toast.success(response.data.message, {autoClose: 1500});
                    let myModalEl = document.getElementById('modalView');
                    let modal = bootstrap.Modal.getInstance(myModalEl)
                    modal.hide();
                    vm.loadList();
                    vm.clearData();
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
