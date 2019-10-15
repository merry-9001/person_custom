<template>
  <el-header>
    <el-row>
      <el-col :span="12">
        <div class="grid-content headwidth">
          <router-link class="headspan" to="/index" >私人订制首页&nbsp;</router-link>
          <router-link class="headspan" to="/index1">商品介绍&nbsp;</router-link>
          <router-link class="headspan" to="/question">我要发问</router-link>
        </div>

      </el-col>
      <el-col :span="12">
        
        <div class="grid-content headwidth1" v-if="$store.state.user.nickname==''">

          <router-link  to="/login" class="headspan">
          请登录&nbsp;
          </router-link>
          <router-link  to="/register" class="headspan">
          免费注册
          </router-link>
                       <!-- <router-link to="/register">注册</router-link> -->
        </div>
        <div v-else class="headwidth1">
          <img :src="$store.state.user.headphoto" class="avatar">
          <span class=" nickname headspan ">{{$store.state.user.nickname}} &nbsp;&nbsp;&nbsp;</span>
              <!-- {{$store.state.admin.isAdmin}} -->
              <i class="el-icon-shopping-cart-full"></i>
          <!-- <span class="headspan">购物车</span> -->
          <router-link  to="/cart" class="headspan">
          购物车
          </router-link>

          <router-link  to="/order" class="headspan">
          &nbsp;&nbsp;订单
          </router-link>
          <router-link class="headspan" to="/login" @click.native="click">&nbsp;&nbsp;注销</router-link>
        </div>
      </el-col>
    </el-row>
  </el-header>
</template>

<script>
export default {
  name: "headnva",
  components: {},
  methods:{
    click(){
          localStorage.removeItem("nickname");
          localStorage.removeItem("headphoto");
          // localStorage.removeItem("eleToken");
          this.$store.commit("user/NAME", { nickname: "", headphoto: ""});
    }
  }
};
</script>
<style scoped lang="scss">
.nickname
{
  color:red !important;
}
    .avatar {
        width: 35px;
        height: 35px;
        border-radius: 50%;

    }
.headspan.router-link-active {
  color: #43b5f7;
  text-decoration : none
  // border-bottom: 2px #43b5f7 solid;
}

.headspan {
 text-decoration : none;
 color: black;
}


.headspan {
  line-height: 40px;

}
.headwidth {
  width: 50%;
  margin: 0 auto;
  text-align: left;
  //   border: 1px black solid;
}
.headwidth1 {
  width: 50%;
    // color: red;
    float:right;
    display: flex;
  align-items: center;
  //   border: 1px black solid;
}
.el-row {
  width: 100%;
  
  // border: 1px black solid;
}

.grid-content {
  // border-radius: 4px;

  min-height: 40px;
}

.el-header {
// z-index:100;
  // height: 100%;

  // position: absolute;
  // min-height: 9vh!important;
  background-color: #f5f5f5;
  // color: #333;
  // text-align: center;
  width: 100%;
  height: 40px !important;
  // height:500px;
  // border: 3px rgb(0, 4, 216) solid;
}
</style>