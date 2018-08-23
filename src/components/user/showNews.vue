<template>
    <div>
        <div v-show="show">
            <el-row v-for="item in news" :key="item.id">
                <el-col :span="12" :offset="6" class="item">
                    <el-card class="box-card">
                        <div class="clearfix">
                            <span>{{item.title}}</span>
                            <el-button style="float: right; padding: 3px 0" type="text"
                                       @click="changeComponents(item.articleId)">查看详情
                            </el-button>
                        </div>
                        <div class="text item">
                            {{item.paragraph}}
                        </div>
                    </el-card>
                </el-col>
            </el-row>
            <el-row class="item">
                <el-col :offset="8">
                    <el-button type="primary" plain icon="el-icon-back
" @click="goBack">返回上一页
                    </el-button>
                    <el-button type="primary" plain icon="el-icon-refresh
" @click="getMore">获得更多资讯
                    </el-button>
                </el-col>
            </el-row>
        </div>
        <router-view @change="change"></router-view>
    </div>
</template>

<script>
    import {HOST} from '../../config/httpd';

    export default {
        name: "showNews",
        data() {
            return {
                news: [],
                url: '',
                show: true,
                next: '',
                prev: '',
            }
        },
        created() {
            this.getNews();
            let url = this.$route.path.split('/');
            this.url = url[2];
        },
        watch: {
            url() {
                if (this.url) {
                    this.show = false;
                }
            }
        },
        methods: {
            getNews(url = HOST + 'news') {
                this.axios({
                    url: url,
                    method: "GET",
                }).then(response => {
                    this.news = response.data.list;
                    this.next = response.data.next;
                    this.prev = response.data.prev;
                }).catch(error => {
                    alert('服务器开小差了，我们正在尽力抢修');
                })
            },
            changeComponents(id) {
                this.$router.push('/news/details/' + id);
                this.show = false;
            },
            change() {
                this.show = true;
            },
            getMore() {
                if (this.next) {
                    this.prev = this.next;
                    this.getNews(this.next);
                } else {
                    alert('没有更多了哦，请客官明天再来~~');
                }
            },
            goBack() {
                console.log(this.prev);
                if (this.prev) {
                    this.getNews(this.prev);
                } else {
                    alert('客官，这就是第一页吖~~');
                }
            }
        }
    }
</script>

<style scoped>
    .text {
        font-size: 11px;
        color: green;
    }

    .item {
        padding: 5px 0;
    }

    .box-card {
        width: 600px;
    }
</style>