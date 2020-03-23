<template>
    <div class="container">
        <van-nav-bar
                title="xxx练习题"
                fixed
                left-arrow
                @click-left="back"
        >
            <template #right>
                <div style="color: white">
                    <van-count-down style="color: white;line-height: 40px" :time="time"/>
                </div>

            </template>

        </van-nav-bar>


        <van-panel title="（单选题）1、王司马斯大林大街阿看到了阿斯顿克林顿拉斯的看见了" style="padding: 0 10px 40px 10px">
            <van-radio-group v-model="test">
                <van-radio name="1" class="radio">单选框 1</van-radio>
                <van-radio name="2" class="radio">单选框 2</van-radio>
            </van-radio-group>
        </van-panel>


        <van-tabbar v-model="active">
            <van-tabbar-item icon="arrow-left">上一题</van-tabbar-item>
            <van-tabbar-item icon="description" @click="showList">查看</van-tabbar-item>
            <van-tabbar-item icon="arrow">下一题</van-tabbar-item>
        </van-tabbar>


        <van-popup
                v-model="showFlag"
                position="bottom"
                :style="{ height: '30%' }"
        >

        </van-popup>
    </div>
</template>

<script>

    export default {
        name: "Index",
        data: function () {
            return {
                active: 'xx',
                time: 30 * 60 * 60 * 1000,
                showFlag: false,
                test: ''
            }
        },
        methods: {
            back: function () {
                this.$router.back();
            },
            showList: function () {
                this.showFlag = true
            }


        }

    }
</script>

<style scoped>
    .container {
        margin: 0;
        height: 100%;
        width: 100%;
        background-color: #f5f5f5;
        padding-top: 60px;
    }

    .van-nav-bar {
        background-color: #2c3e50;
    }

    .van-nav-bar__title {
        color: #ffffff;
    }

    .van-cell__title {
        text-align: left;
    }

    .radio {
        margin-top: 20px;
    }
</style>
