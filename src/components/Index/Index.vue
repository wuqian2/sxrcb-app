<template>
    <div class="container">
        <van-nav-bar
                title="主页"
                fixed
                left-arrow
                @click-left="exit"
        >
            <template #right>
                <van-icon name="chat-o" dot/>
            </template>

        </van-nav-bar>

        <router-view style="height: 100%"></router-view>

        <van-tabbar route>
            <van-tabbar-item  replace to="/index/home" icon="home-o">主页</van-tabbar-item>
            <van-tabbar-item  replace to="/index/message" icon="search">消息</van-tabbar-item>
            <van-tabbar-item  replace to="/index/personal" icon="setting-o">个人中心</van-tabbar-item>
        </van-tabbar>
    </div>

</template>

<script>
    import { Dialog } from 'vant';
    import router from "../../router/router";


    export default {
        name: "Index",
        methods:{
            exit: function () {
                Dialog.confirm({
                    message: '确认退出登录吗？'
                }).then(() => {
                    router.push({name: 'login'})
                }).catch(() => {
                    // on cancel
                });
            }
        }
    }
</script>

<style scoped>
    .container {
        margin: 0;
        height: 90%;
        width: 100%;
        background-color: #f5f5f5;
        padding-top: 8%;
    }
</style>
