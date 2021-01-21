<template>
    <div>
        <el-button type="info" @click="logout">退出</el-button>
    </div>
</template>

<script>
export default {
    data () {
      return {}
    },

    methods: {
        logout() {
            // 清空sessionStorge
            window.sessionStorage.clear();
            this.$router.push("/login");
        }
    },

    components: {},
}
</script>

<style lang="less" scoped>
</style>    