<template>
    <div class="container">
        <van-nav-bar
                title="所有试题"
                left-text="返回"
                fixed
                left-arrow
                @click-left="back"
        />

        <div class="cards">
            <van-card
                    desc="银行从业资格考试习题练习"
                    title="银行从业资格考试"
                    thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
                    @click="toExam"
            />

            <van-card
                    desc="PMP考试习题"
                    title="PMP"
                    thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
            />

        </div>


        <van-tabbar>
            <van-tabbar-item icon="home-o">考试题库</van-tabbar-item>
            <van-tabbar-item icon="search">模拟考试</van-tabbar-item>
            <van-tabbar-item icon="friends-o">错题练习</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    import router from "../../router/router";

    export default {
        name: "Index",
        data: function () {
            return {
                username : '',
                password : ''
            }
        },
        methods: {
            back: function () {
                this.$router.back();
            },

            toExam: function () {
                router.push({name:'examInfo'})
            }

        }

    }
</script>

<style scoped>
    .container{
        margin: 0;
        height: 100%;
        width: 100%;
        background-color: #f5f5f5;
        padding-top: 60px;
    }
    .van-nav-bar{
     background-color: #2c3e50;
    }

    .van-nav-bar__title{
        color: #ffffff;
    }
</style>
