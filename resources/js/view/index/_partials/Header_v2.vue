<template>
    <nav id="navbar" class="navbar navbar-expand-lg navbar-light  quick_nav">
        <div class="container">
            <a class="navbar-brand" href="#"><img style="max-width: 110px" src="../../../../../public/images/main/logo.png" alt="Logo"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li v-if="has_user" class="nav-item">
                        <div class="login d-flex justify-content-start">
                            <a class="nav-link" href="#">
                                <i class="fa-solid fa-user"></i>
                            </a>
                            <a class="nav-link" href="#" v-text="_.get(user,'name', '')"></a>
                        </div>
                    </li>
                    <li v-else class="nav-item">
                        <div class="d-flex justify-content-between">
                            <div class="login d-flex justify-content-start">
                                <a href="#" class="nav-link">|</a>
                                <a class="nav-link" href="#">
<!--                                    <i class="fa fa-user nav-link" aria-hidden="true"></i>-->
                                    <i class="fa-solid fa-user"></i>
                                </a>
                                <a class="nav-link" href="#">Login</a>
                            </div>
                            <p class="nav-link nav-link-disable" href="">/</p>
                            <button type="button" class="nav-link btn-started" >Get started</button>
                        </div>
                    </li>
                    <li class="nav-item">
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</template>
<script setup>
 import * as _ from 'lodash';

</script>
<script >
export default {
    name: 'HeaderMain',
    data: function () {
        return {
            has_user: false,
            user: {},
        };
    },

    created() {

    },
    mounted() {


        let vm = this;

        let navbar = document.getElementById('navbar');

        // Bắt sự kiện khi bắt đầu cuộn trang
        window.addEventListener('scroll', function() {
            // Kiểm tra vị trí cuộn
            if (window.pageYOffset > 50) {
                // Thay đổi màu nền thành màu đỏ
                navbar.classList.add('nav-active')
            } else {
                // Nếu không cuộn, trở lại màu nền ban đầu
                navbar.classList.remove('nav-active')
            }
        });



        let user_storage = localStorage.getItem('user');
        if(user_storage){
            vm.has_user = true;
            vm.user = JSON.parse(user_storage).data.user;
        }else{
            vm.has_user = false;
        }
    },
    computed: {
    },
    methods: {
    }
}
</script>
<style lang="scss" scoped>
.nav-active{
    background: #212b36;
}
</style>
