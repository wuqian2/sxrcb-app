<template>
    <div>
        <div class="card">
            <van-tabs v-model="active" style="margin-top: 29px;">
                <van-tab title="个人消息">

                    <van-card
                            num="2"
                            price="2.00"
                            desc="描述信息"
                            title="商品标题"
                            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
                    />

                    <van-card
                            num="2"
                            price="2.00"
                            desc="描述信息"
                            title="商品标题"
                            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
                    />

                    <van-card
                            num="2"
                            price="2.00"
                            desc="描述信息"
                            title="商品标题"
                            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
                    />

                </van-tab>
                <van-tab title="系统通知">
                    <van-card
                            num="2"
                            price="2.00"
                            desc="描述信息"
                            title="商品标题"
                            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
                    />

                    <van-card
                            num="2"
                            price="2.00"
                            desc="描述信息"
                            title="商品标题"
                            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
                    />
                </van-tab>
            </van-tabs>
        </div>
    </div>


</template>

<script>
    export default {
        name: "Index",
        data: function () {
            return {
                active: '0'
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
    }

    .my-swipe .van-swipe-item {
        color: #fff;
        font-size: 20px;
        line-height: 150px;
        text-align: center;
        background-color: #39a9ed;
    }

    .card {
        margin-bottom: 24px;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 8px 12px #ebedf0;
        height: 95%;
    }


</style>
