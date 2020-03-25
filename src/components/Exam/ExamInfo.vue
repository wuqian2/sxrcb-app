<template>
    <div class="container" id="test">
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


        <div id="topicPanel">
            <van-panel  :title="topicTitle" style="padding: 0 10px 40px 10px;">
             <van-radio-group v-model="topic.answer">
                <van-radio v-for="option in topic.options" :key="option.optionId" :name="option.optionId" class="radio">{{option.content}}</van-radio>

             </van-radio-group>
         </van-panel>

        </div>

        <van-tabbar v-model="active">
            <van-tabbar-item icon="arrow-left" @click="lastTopic">上一题</van-tabbar-item>
            <van-tabbar-item icon="description" @click="showList">查看</van-tabbar-item>
            <van-tabbar-item icon="arrow" @click="nextTopic">下一题</van-tabbar-item>
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
    import examData from '../../assets/Mock/ExamMock.json';
    import { Dialog } from 'vant';
    import * as Hammer from 'hammerjs';
    import Velocity from 'velocity-animate';
    import 'velocity-animate/velocity.ui.js';



    export default {
        name: "Index",
        data: function () {
            return {
                active: 'xx',
                time: 30 * 60 * 60 * 1000,
                showFlag: false,
                topicIndex: 0,
                topic: {},
                visible: true
            }
        },
        methods: {
            back: function () {
                this.$router.back();
            },
            showList: function () {
                // 查看答题情况
                this.showFlag = true
            },
            nextTopic: function () {
                // 下一题
                if (this.topicIndex === examData.length -1) {
                    Dialog.alert({message:"已是最后一题！"})
                }else {
                    this.topicIndex = this.topicIndex+1;
                    this.topic = examData[this.topicIndex];
                    Velocity(document.getElementById("topicPanel"), "transition.slideRightIn",{ duration: 500});
                }
            },
            lastTopic: function () {
                // 上一题
                if (this.topicIndex === 0) {
                    Dialog.alert({message:"已是第一题！"})
                }else {
                    this.topicIndex = this.topicIndex-1;
                    this.topic = examData[this.topicIndex];
                    Velocity(document.getElementById("topicPanel"), "transition.slideLeftIn",{ duration: 500});
                }
            }
        },
        computed: {
            topicTitle: function () {
                // 拼接题目的题干
                var topic = this.topic;
                var type = topic.type == "01" ? "单选题" : "多选题";
                var title = "(" + type + ")" + (this.topicIndex + 1) + "、" + topic.title;
               return  title;
            }
        },
        mounted() {
            this.topic = examData[this.topicIndex];
            let that = this;

            var hammertime = new Hammer(document.getElementById("test"));
            // 左滑监听事件
            hammertime.on('swipeleft', function() {
                that.nextTopic();
            });

            // 右滑监听事件
            hammertime.on('swiperight', function() {
                that.lastTopic();
            });

        }
    }
</script>

<style scoped>
    .container {
        margin: 0;
        height: 90%;
        width: 100%;
        background-color: #f5f5f5;
        padding-top: 15%;
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

    .van-tabbar--fixed{
        position: absolute;
    }
    .van-nav-bar--fixed{
        position: absolute;
    }
</style>
