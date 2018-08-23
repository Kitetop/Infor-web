<template>
    <div>
        <div>
            <el-row v-for="item in news" :key="item.id">
                <el-col :span="12" :offset="6" class="item">
                    <el-card class="box-card">
                        <div class="clearfix">
                            <span>{{item.title}}</span>
                        </div>
                        <div class="text item">
                            {{item.paragraph}}
                        </div>
                        <div class="clearfix miniText">
                            修改时间：{{item.changeTime}}
                        </div>
                    </el-card>
                </el-col>
            </el-row>
            <el-row class="item">
                <el-col :offset="8">
                    <el-button type="primary" plain icon="el-icon-refresh
" @click="goBack">返回上一页
                    </el-button>
                    <el-button type="primary" plain icon="el-icon-refresh
" @click="getMore">获得更多资讯
                    </el-button>
                </el-col>
            </el-row>
        </div>
    </div>

</template>

<script>
    import {HOST} from '../../config/httpd'

    export default {
        name: "hasEdit",
        data() {
            return {
                news: [],
                next: '',
                prev: '',
            }
        },
        created() {
            this.getEdit();
        },
        methods: {
            getEdit(url = HOST + "edit") {
                this.axios({
                    url: url,
                    method: 'GET',
                    params: {
                        'edit': true,
                    }
                }).then(response => {
                    this.news = response.data.list;
                    this.next = response.data.next;
                    this.prev = response.data.prev;
                }).catch(error => {
                    alert('服务器开小差了，我们正在尽力抢修');
                })
            },
            getMore() {
                if (this.next) {
                    this.prev = this.next;
                    this.getEdit(this.next);
                } else {
                    alert('没有更多了哦，继续努力编辑吧~~');
                }
            },
            goBack() {
                console.log(this.prev);
                if (this.prev) {
                    this.getEdit(this.prev);
                } else {
                    alert('这就是第一页吖~~');
                }
            },
        },
    }
</script>

<style scoped>
    .text {
        font-size: 12px;
        color: green;
    }

    .item {
        padding: 14px 0;
    }

    .box-card {
        width: 600px;
    }

    .miniText {
        font-size: 5px;
        color: sandybrown;
    }
</style>