<template>

    <router-view></router-view>
</template>
<script >
import {useRouter, useRoute} from 'vue-router'

export default {
    setup() {
        const router = useRouter();
        const route = useRoute();
        return {
            route: route,
            router: router,
        };
    },

    data: function () {
        return {
            user: null,
            staff: null,
            token: null,
            language: null,
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
