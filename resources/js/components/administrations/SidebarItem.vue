<template>
    <div class="sidebar-item">
        <div class="block">
            <span class="icon">
               <i :class="icon"></i>
            </span>
            <span class="text" v-text="text"></span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SidebarItem',
    props: {
        text: {type: String, default: 'Dashboard'},
        icon: {type: String, default: 'fa-solid fa-gauge'},
    },
    data: function () {
        return {

        };
    },

    created() {

    },
    async mounted() {

    },
    computed: {
    },
    methods: {
    }
}
</script>

<style lang="scss" scoped>
.sidebar-item{
    padding: 12px 16px;
    cursor: pointer;
    transition: 0.2s ease-out;

    &:hover{
        background: #37404a;
        .block > .text{
            color: #fff;
        }
        .block > .icon{
            color: #fff;
        }
    }
    .block{
        display: flex;
        justify-content: flex-start;
        gap: 12px;
        align-items: center;
        .text{
            font-size: 14px;
            color: #ccc;
        }
        .icon{
            font-size: 14px;
            color: #ccc;
        }

    }

}
</style>
