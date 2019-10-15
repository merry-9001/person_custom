<template>
  <header class="head-nav">
    <el-row>
      <el-col :span="6" class="logo-container">
        <img src="@/assets/logo.png" class="logo" alt />
        <span class="title">私人订制后台系统</span>
      </el-col>
      <el-col :span="6" class="user">
 
          <!-- <i style="font-size: 30px;" class="far fa-user-circle">
            <img :src="$store.state.user.userHead" class="avatar" alt />
          </i> -->
          <div class="welcome">
            <span class="name comename">欢迎</span>
            <span class="name avatarname">{{$store.state.admin.adminName}}
              <!-- {{$store.state.admin.isAdmin}} -->
            </span>
          </div>
          <span class="username">
            <el-dropdown trigger="click" @command="setDialogInfo">
              <span >
                <i class="el-icon-caret-bottom el-icon--right"></i>
              </span>
              <el-dropdown-menu>
                <el-dropdown-item command="info">个人信息</el-dropdown-item>
                <el-dropdown-item command="logout">退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </span>
 
      </el-col>
    </el-row>
  </header>
</template>
<script>
export default {
  name: "head-nav",
  methods: {
    setDialogInfo(cmdItem){
      if(cmdItem=='info')
      {
        this.showInfoList();
      }
      else
      {
        this.logout();
      }
    },
    showInfoList(){
      // this.$router.push('/infoshow');
    },
    logout()
    {
          localStorage.removeItem("isAdmin");
          localStorage.removeItem("flag");
          // localStorage.removeItem("eleToken");
          this.$store.commit("admin/ADMIN_NAME", { adminName: "", isAdmin: 0});
          this.$router.push("/");
    }
  }
};
</script>
<style scoped>
.head-nav {
  width: 100%;
  height: 60px;
  min-width: 600px;
  padding: 5px;
  background: #e0e0d7;
  color: #101006;
  border-bottom: 1px solid #9c9c96;
  box-sizing: border-box;
  position: fixed;
  top:0;
  z-index:100;
}

.logo-container {
  line-height: 50px;
  min-width: 400px;
    /* border: 1px solid blue; */
  height: 53px;
    box-sizing: border-box;
}

.logo {
  height: 50px;
  width: 50px;
  margin-right: 5px;
  vertical-align: middle;
  display: inline-block;
  /* border: 1px solid red; */
      /* box-sizing: border-box; */
}

.title {
  /* border: 1px solid blue; */
  vertical-align: middle;
    display: inline-block;
  font-size: 22px;
  font-family: "Microsoft YaHei";
  letter-spacing: 3px;
}

.user {
    
  /* line-height: 50px; */
  text-align: right;
  float: right;
  padding-right: 10px;
  /* border: 1px solid red; */
  height: 50px;
}
/* 
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  vertical-align: middle;
  display: inline-block;
} */

.welcome {

  display: inline-block;
  width: auto;
  vertical-align: middle;
  padding: 0 5px;
  /* border: 1px solid blue; */
  height: 100%;
    position: relative;
}

.name {
  position: relative;
  top: 20%; /*偏移*/
  text-align: center;
  font-size: 14px;
  display:block;
}

.comename {
  font-size: 12px;
  /* display:block; */
}

.avatarname {
  color: #409eff;
  font-weight: bolder;
  /* display:inline-block; */
}

.username {
  cursor: pointer;
  margin-right: 5px;
}

/* .el-dropdown {
  color: #fff;
} */
</style>