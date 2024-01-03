<template>
    <div class="d-flex flex-column p-3 rounded bg-primary-subtle">
        <img :src="item?.image_packages" alt="" class="rounded mb-5" />
        <div class="d-flex flex-column">
            <h3 class="mb-3 font-bold text-dark fs-5" v-text="item?.name"></h3>
            <div class="d-flex align-items-center justify-content-between mb-4 fs-6 text-dark opacity-50">
                <span>
                    <span v-text="'Thời gian: '"></span>
                    <span v-text="item?.time"></span>
                </span>
                <span>
                    <span v-text="'Độ khó: '"></span>
                    <span v-text="item?.level"></span>
                </span>
                <span>
                    <span v-text="'Số câu hỏi: '"></span>
                    <span v-text="item?.number_question"></span>
                </span>
            </div>
            <button class="btn btn-success">Test Now</button>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    item: Object,
});
</script>
