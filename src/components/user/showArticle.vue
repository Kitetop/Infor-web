<template>
    <div>
        <el-row>
            <el-col :span="12" :offset="6" class="item">
                <el-card class="box-card">
                    <div class="clearfix">
                        <span>{{article.title}}</span>
                        <el-button style="float: right; padding: 3px 0" type="text" @click="goto(article.url)">查看原文
                        </el-button>
                    </div>
                    <div class="text item">
                        {{article.content}}
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <el-row class="item">
            <el-col :span="12" :offset="8">
                <el-button type="primary" plain icon="el-icon-star-off" @click="goBack">返回</el-button>
                <el-button type="primary" plain icon="el-icon-star-on" @click="addCount">赞 !</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import {HOST} from '../../config/httpd'

    export default {
        name: "showArticle",
        data() {
            return {
                id: '',
                article: {},
                count: '',
            }
        },
        created() {
            this.id = this.$route.params.id;
            this.getArticle();
        },
        methods: {
            getArticle() {
                this.axios({
                    url: HOST + 'news/details',
                    params: {
                        id: this.id,
                    },
                    method: 'GET'
                }).then(response => {
                    this.article = response.data;
                }).catch(error => {
                })
            },
            addCount() {
                this.axios({
                    url: HOST + 'news/count',
                    params: {
                        id: this.id,
                    },
                    method: 'GET'
                }).then(response => {
                    alert('感谢客官的赞赏~');
                    this.$emit('change');
                    this.$router.push('/news');
                }).catch(error => {
                })
            },
            goto(url) {
                window.open(url);
            },
            goBack() {
                this.$emit('change');
                this.$router.push('/news');
            }
        }
    }
</script>

<style scoped>
    .text {
        font-size: 12px;
        color: green;
    }

    .item {
        padding: 10px 0;
    }
    .box-card {
        width: 600px;
    }
</style>