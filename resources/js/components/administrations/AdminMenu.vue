<template>
    <div class="admin-menu">
     <div class="admin-menu-block">
         <div class="item">
             <div class="icon">
                 <i class="fa-solid fa-bars"></i>
             </div>
         </div>
         <div class="item">
             <div class="icon">
                 <i class="fa-solid fa-user"></i>
             </div>
             <div class="text" v-text="_.get(user,'name', '')"></div>
         </div>
     </div>
    </div>
</template>
<script setup>
import * as _ from "lodash";

</script>
<script>

export default {
    name: 'AdminMenu',
    data() {
        return {
            has_user: false,
            user: {},
        };
    },
    methods: {

    },
    mounted() {
        let vm = this;
        let user_storage = localStorage.getItem('user');
        if(user_storage){
            vm.has_user = true;
            vm.user = JSON.parse(user_storage).data.user;
        }else{
            vm.has_user = false;
        }
    },
};
</script>

<style scoped>
.admin-menu{
    background: #fff;
    .admin-menu-block{
        display: flex;
        justify-content: space-between;
        padding: 12px 12px;
    }
    .icon{
        font-size: 12px;
        color: #212b36;
    }
    .text{
        font-size: 14px;
        font-weight: 600;
    }
    .item{
        display: flex;
        justify-content: flex-start;
        gap: 8px;
        align-items: center;
        cursor: pointer;
        transition: all 0.2s ease-out;
        &:hover{
            .text{
                color: #4b4305;
            }
            .icon{
                color: #4b4305;
            }
        }
    }
}
</style>
