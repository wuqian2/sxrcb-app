<template>
    <div>
        <div class="card" style="height: 35%">
            <van-row style="margin-top: 30px" type="flex" justify="center" >
                <van-col span="5">
                    <img width="85" alt="Vue logo" src="../../assets/index/man.png" style="margin-top: 20px">
                </van-col>
                <van-col span="16">
                    <div style="padding: 20px 0 0 60px">
                        <span style="font-size: 22px;font-weight: 600;float: left">吴谦</span>
                    </div>
                </van-col>
            </van-row>

            <van-row style="margin-top: 30px" type="flex" justify="center" >
                <van-col span="8">
                    <div class="van-hairline--right">
                        <span style="font-size: 20px;font-weight: 400;line-height: 36px"> 机构</span>
                        <br>
                        <span style="font-size: 16px;font-weight: 300;">总行</span>
                    </div>
                </van-col>
                <van-col span="8">
                    <div class="van-hairline--right">
                        <span style="font-size: 20px;font-weight: 400;line-height: 36px">部门</span>
                        <br>
                        <span style="font-size: 16px;font-weight: 300;">科技部</span>
                    </div>
                </van-col>
                <van-col span="8">
                    <span style="font-size: 20px;font-weight: 400;line-height: 36px">职位</span>
                    <br>
                    <span style="font-size: 16px;font-weight: 300;">办事员</span>
                </van-col>
            </van-row>

        </div>

        <div class="card" style="padding: 0">
            <van-grid clickable :column-num="3">
                <van-grid-item  icon="records"   text="学习"  :to="{name: 'exam'}" />
                <van-grid-item  icon="contact"  text="人员"  />
                <van-grid-item  icon="bar-chart-o"  text="图标"  />
                <van-grid-item  icon="balance-pay"  text="文字"  />
                <van-grid-item  icon="envelop-o"  text="文字"  />
                <van-grid-item  icon="cashier-o"  text="文字"  />
            </van-grid>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Index"
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
    }

    .van-grid{
        height: 250px;
    }

</style>
