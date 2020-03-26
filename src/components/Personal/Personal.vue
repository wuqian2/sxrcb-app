<template>
    <div>
        <div class="card">
            <van-address-edit
                    :area-list="areaList"
                    show-postal
                    show-delete
                    show-set-default
                    show-search-result
                    :search-result="searchResult"
                    :area-columns-placeholder="['请选择', '请选择', '请选择']"
                    @save="onSave"
                    @delete="onDelete"
                    @change-detail="onChangeDetail"
            />

        </div>


    </div>



</template>

<script>
    import { Toast } from 'vant';


    export default {
        data() {
            return {
                areaList: {},
                searchResult: []
            }
        },
        methods: {
            onSave() {
                Toast('save');
            },
            onDelete() {
                Toast('delete');
            },
            onChangeDetail(val) {
                if (val) {
                    this.searchResult = [{
                        name: '黄龙万科中心',
                        address: '杭州市西湖区'
                    }];
                } else {
                    this.searchResult = [];
                }
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
        margin-top: 29px;
    }

    .van-grid{
        height: 250px;
    }

</style>
