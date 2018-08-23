<template>
    <div>
        <el-row>
            <el-col :span="12" :offset="6" class="item">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>{{title}}</span>
                    </div>
                    <div class="text item">
                        <span>{{content}}</span>
                    </div>
                </el-card>
                <div class=" paragraph item">
                    <span>选取的段落:</span>
                </div>
                <el-input
                        type="textarea"
                        :autosize="{minRows: 5}"
                        placeholder="请输入内容"
                        v-model="paragraph" class="text">
                </el-input>
            </el-col>
            <el-col :span="12" :offset="10" class="item">
                <el-button type="warning" icon="el-icon-delete" plain @click="deleteArticle">删除文章</el-button>
                <el-button type="primary" icon="el-icon-sort" plain @click="submit">提交修改</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import {HOST} from '../../config/httpd'

    export default {
        name: "change",
        created() {
            this.id = this.$route.query.id;
            this.title = this.$route.query.title;
            this.paragraph = this.$route.query.paragraph;
            this.content = this.$route.query.content;
        },
        data() {
            return {
                id: '',
                title: '',
                paragraph: '',
                content: '',
            }
        },
        methods: {
            submit() {
                this.axios({
                    url: HOST + 'edit',
                    method: "POST",
                    params: {
                        id: this.id,
                        paragraph: this.paragraph
                    }
                }).then(response => {
                    alert('完成编辑，继续编辑吧~');
                    this.$router.push('/admin/edit');
                }).catch(error => {
                    alert('服务器开小差了，我们正在尽力抢修');
                })
            },
            deleteArticle() {
                this.axios({
                    url: HOST + 'edit/delete',
                    method: 'GET',
                    params: {
                        id: this.id,
                    }
                }).then(response => {
                    alert('删除成功！');
                    this.$router.push('/admin/edit');
                }).catch(error => {
                    alert('删除失败，请稍后重试');
                });
            }
        }
    }
</script>

<style scoped>
    .text {
        font-size: 12px;
        color: sandybrown;
    }

    .paragraph {
        font-size: 14px;;
        color: chocolate;
    }

    .item {
        padding-top: 20px;
        padding-bottom: 10px;
    }
</style>