<template>
    <div>
        <el-row>
            <el-col :span="4" :offset="6">
                <el-menu :default-active="index" class="el-menu-demo" mode="horizontal">
                    <el-menu-item index="1" @click="choseFunction(1)">待编辑</el-menu-item>
                    <el-menu-item index="2" @click="choseFunction(2)">已编辑</el-menu-item>
                </el-menu>
            </el-col>
            <el-col :span="3" :offset="8" class="block-col-2">
                <el-menu>
                    <el-dropdown trigger="click">
                        <p class="el-dropdown-link">
                            Kitetop<i class="el-icon-arrow-down el-icon--right"></i>
                        </p>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>个人资料</el-dropdown-item>
                            <el-dropdown-item>设置</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-menu>
            </el-col>
        </el-row>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "center",
        data() {
            return {
                id: '',
                index: '',
                uri: '',
            };
        },
        created() {
            this.uri = this.$route.path.split('/')[2];
            if (this.uri === 'edit' || !this.uri) {
                this.index = '1';
                this.choseFunction(1);
            } else {
                this.index = '2';
                this.choseFunction(2);
            }
        },
        methods: {
            choseFunction(index) {
                if (index == 1) {
                    this.$router.push('/admin/edit');
                } else {
                    this.$router.push('/admin/hasEdit');
                }
            },
        },
    }
</script>

<style scoped>
    .el-row {
        margin-bottom: 20px;
    }

    .el-col {
        border-radius: 4px;
    }
</style>