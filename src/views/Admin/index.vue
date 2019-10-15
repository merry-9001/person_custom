<template>
  <div class="index">
    <HeadNav></HeadNav>
    <LeftMenu></LeftMenu>
    <el-main>
      <router-view></router-view>
    </el-main>
  </div>
</template>

<script>
import HeadNav from "@/components/Admin/HeadNav.vue";
import LeftMenu from "@/components/Admin/LeftMenu.vue";
export default {
  name: "adminIndex",
  components: {
    HeadNav,
    LeftMenu
  },
  methods: {

  },
      beforeRouteEnter(to, from, next) {
        const isLogin = localStorage.flag ? true : false;
        if(isLogin)
        {
          next();
        }
        else{
          next("/");
        }
    }
};
</script>
<style scoped lang="scss">
    .el-main {
        position: relative;
        top: 20px;
        left: 180px;
        width: calc(100% - 180px);
        // height: calc(100% - 71px);
        // overflow: auto;
    }
</style>
