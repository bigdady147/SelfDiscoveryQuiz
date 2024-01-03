<template>
    <LayoutMaster>
        <template #HeaderMain>
            <HeaderMain></HeaderMain>
        </template>

        <template #BodyMain>
            <section class="quicktest">
                <div class="page-section home">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="big-title">
                                    <h1 class="title">Welcome to Self Discovery Quiz!</h1>
                                    <h4 class="text">
                                        Are you ready to embark on a journey of self-discovery? Look no further! Self Discovery Quiz is
                                        your ultimate destination for online quizzes designed to help you explore and understand
                                        yourself better.
                                    </h4>
                                    <button type="button" class="btn-started">Get started</button>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="images">
                                    <img src="../../../../../public/images/main/thumb-1.png" alt="thumb-1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="about-top">
                    <div class="container-fluid">
                        <div class="about-head">
                            <div class="row">
                                <div class="col-md-4 about-head-item">
                                    <div class="title text-center">About Self Discovery Quiz!</div>
                                    <div class="dot-head"></div>
                                </div>
                                <div class="col-md-4 about-head-item">
                                    <div class="title text-center">Why Choose Self Discovery Quiz?</div>
                                    <div class="dot-head"></div>
                                </div>
                                <div class="col-md-4 about-head-item">
                                    <div class="title text-center">Our Team</div>
                                    <div class="dot-head"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="about-body">
                    <div class="container-fluid">
                        <div class="about-body-data">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="item">
                                        <div class="image">
                                            <img src="../../../../../public/images/main/dsq.png" alt="" />
                                        </div>
                                        <div class="text pt-3">
                                            <div class="d-flex align-items-center block">
                                                <div class="dot">
                                                    <i class="fa-solid fa-circle-dot"></i>
                                                </div>
                                                <p class="des">
                                                    At Self Discovery Quiz, we offer online quiz solutions to help you explore and
                                                    understand yourself better.
                                                </p>
                                            </div>
                                            <div class="d-flex align-items-center block">
                                                <div class="dot">
                                                    <i class="fa-solid fa-circle-dot"></i>
                                                </div>
                                                <p class="des">
                                                    Our quizzes are carefully crafted and cover a wide range of topics, including IQ,
                                                    EQ, personality traits, job suitability, and more.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="item">
                                        <div class="image">
                                            <img src="../../../../../public/images/main/why.png" alt="" />
                                        </div>
                                        <div class="text pt-3">
                                            <div class="d-flex align-items-center block">
                                                <div class="dot">
                                                    <i class="fa-solid fa-circle-dot"></i>
                                                </div>
                                                <p class="des">
                                                    Accurate and Insightful Results: Our quizzes are designed by field experts to
                                                    provide you with accurate and insightful results.
                                                </p>
                                            </div>
                                            <div class="d-flex align-items-center block">
                                                <div class="dot">
                                                    <i class="fa-solid fa-circle-dot"></i>
                                                </div>
                                                <p class="des">
                                                    By answering a series of thought-provoking questions, our quizzes help you gain
                                                    valuable insights into your cognitive abilities, emotional intelligence,
                                                    personality traits, and job suitability.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="item">
                                        <div class="image">
                                            <img src="../../../../../public/images/main/our-team.png" alt="" />
                                        </div>
                                        <div class="text pt-3">
                                            <div class="d-flex align-items-center block">
                                                <div class="dot">
                                                    <i class="fa-solid fa-circle-dot"></i>
                                                </div>
                                                <p class="des">
                                                    Dedicated Team of Professionals: Behind Self Discovery Quiz is a team of experts in
                                                    IQ testing, psychology, and quiz design.
                                                </p>
                                            </div>
                                            <div class="d-flex align-items-center block">
                                                <div class="dot">
                                                    <i class="fa-solid fa-circle-dot"></i>
                                                </div>
                                                <p class="des">
                                                    Our Passion for Personal Growth: We are passionate about helping individuals
                                                    discover their true potential and achieve personal growth through self-awareness.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="package-test container-fluid">
                    <div class="title text-center fw-bold fs-1 mb-3">Popular tests</div>
                    <div class="test-list row">
                        <div class="col-3 mt-2">
                            <TestCard :item="item"></TestCard>
                        </div>
                        <div class="col-3 mt-2">
                            <TestCard :item="item"></TestCard>
                        </div>
                        <div class="col-3 mt-2">
                            <TestCard :item="item"></TestCard>
                        </div>
                        <div class="col-3 mt-2">
                            <TestCard :item="item"></TestCard>
                        </div>
                    </div>
                </div>
            </section>
        </template>

        <template #FooterMain>
            <Footer></Footer>
        </template>
    </LayoutMaster>
</template>
<script setup>
import TestCard from "../../../components/base/TestCard.vue";
import LayoutMaster from "../_layouts/Master.vue";
import HeaderMain from "../_partials/Header.vue";
import Footer from "../_partials/Footer.vue";
</script>
<script>
export default {
    data: function () {
        return {
            opts: {
                start: 0,
                dir: "v",
                duration: 500,
                beforeChange: function (prev, next) {},
                afterChange: function (prev, next) {},
            },
            item: {
                name: "DISC",
                image_packages: "https://cdn.jobtest.vn/web/images/single-test/pa3.png",
                time: 30,
                status: "active",
                level: "Khó", // Cấp độ của câu hỏi từ 1 => 3
                number_question: 20,
            },
        };
    },

    created() {},
    async mounted() {},
    computed: {},
    methods: {},
};
</script>
<style lang="scss" scoped></style>
