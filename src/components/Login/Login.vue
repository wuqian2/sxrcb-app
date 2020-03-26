<template>
    <div class="container">

        <van-row>
            <img width="70" alt="Vue logo" src="../../assets/logo.png">
            <br>
            <span style="line-height: 50px;font-weight: 500">歙县农村商业银行</span>
        </van-row>

        <van-row type="flex" justify="center" style="margin-top: 30px">
            <van-col span="20">

                <van-form @submit="onSubmit">
                    <van-field
                            v-model="username"
                            name="用户名"
                            label="用户名"
                            placeholder="请输入用户名"
                            :rules="[{ required: true, message: '请填写用户名' }]"
                    />
                    <van-field
                            v-model="password"
                            type="password"
                            name="密码"
                            label="密码"
                            placeholder="请输入登录密码"
                            :rules="[{ required: true, message: '请填写密码' }]"
                    />
                    <div style="margin: 16px;">
                        <van-button round block type="warning" native-type="submit">
                            登录
                        </van-button>
                    </div>
                </van-form>
            </van-col>
        </van-row>

    </div>
</template>

<script>
    import router from "../../router/router";

    export default {
        name: "Index",
        data: function () {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            onSubmit: function () {
                router.push({name: 'home'})
            }
        }

    }
</script>

<style scoped>
    .container {
        margin: 0;
        height: 70%;
        width: 100%;
        padding-top: 25%;
    }

</style>
