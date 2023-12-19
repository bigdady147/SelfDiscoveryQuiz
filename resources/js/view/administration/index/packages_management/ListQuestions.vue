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
                                <div v-for="(ans, i) in item_edit.answer" class="col-md-12 mb-2">
                                    <label class="fw-medium mb-1">Answer</label>
                                    <vee-input type="text" v-model="ans.text"></vee-input>
                                    <div>
                                        <label class="fw-medium mb-1">Is correct</label>
                                        <input type="checkbox" v-model="ans.is_correct">
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
        }
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

                    toast.success(response.data.message, {autoClose: 1000});

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
