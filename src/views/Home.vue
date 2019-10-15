<template>
  <div class="home">
    <!-- <el-container> -->
     <UserHead></UserHead>

        <div class="rightContainer">
            <router-view></router-view>
        </div>
     <UserFooter></UserFooter>

    <!-- </el-container> -->
  </div>
</template>

<script>
import UserFooter from "@/components/User/UserFooter.vue";
import UserHead from "@/components/User/HeadNav.vue";
export default {
  name: "home",
  components: {
    UserFooter,
    UserHead
  }
};
</script>
<style scoped lang="scss">
.home{
  display: flex;
            //   display: flex;
  min-height: 100vh;
  flex-flow: column;
}
.rightContainer
{
  flex:1;
      // border: 3px black solid;

}


</style>
