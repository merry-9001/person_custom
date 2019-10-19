<template>
  <el-main>
    <el-row>
      <el-col :span="12">
        <div class="leftImage"></div>
      </el-col>
      <el-col :span="12">
        <div class="login_table">

            <span>欢迎登陆</span>
            <el-form :label-position="labelPosition" label-width="80px" 
            :model="formLabelAlign"
            :rules="rules"
            ref="loginForm">
              <el-form-item label="账号" prop="name">
                <el-input v-model="formLabelAlign.name" class="input"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="formLabelAlign.password" class="input"></el-input>
              </el-form-item>
              <el-form-item label="选择类型" prop="type">
                <el-select v-model="formLabelAlign.type" placeholder="请选择" class="select">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" class="submit_btn" @click="submitForm('loginForm')">登陆</el-button>
              </el-form-item>
              <div class="tiparea">
                <p>
                  还没有账号？现在
                  <router-link to="/register">注册</router-link>
                </p>
              </div>
            </el-form>

        </div>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
export default {
  name: "user_login",
  data() {
    return {
      labelPosition: "left",
      formLabelAlign: {
        name: "",
        password: "",
        type: ""
      },
      options: [
        {
          value: "1",
          label: "会员"
        },
        {
          value: "2",
          label: "超级管理员"
        },
        {
          value: "3",
          label: "管理员"
        },
      ],
     rules: {
        name: [
          {
            required: true,
            message: "用户名不能为空",
            trigger: "blur"
          },
          {
            min: 2,
            max: 30,
            message: "长度在2-30之间",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
          },
          {
            min: 5,
            max: 30,
            message: "长度在5-30之间",
            trigger: "blur"
          }
        ],
        type: [
          {
            required: true,
            message: "请选择账号类型",
            trigger: "blur"
          },

        ]
      }
    };
  },
  methods:{
    submitForm(formName){
      this.$refs[formName].validate(valid => {
        if(valid)
        {
          var params = new URLSearchParams();
          params.append("username", this.formLabelAlign.name);
          params.append("password", this.formLabelAlign.password);
          params.append("type", this.formLabelAlign.type);
          // console.log(this.formLabelAlign.type);
         this.axios.post("/personCustom_api/login.php",params).then(res=>
          {
            var state=res.data.msg;
            console.log(res);
            if(state==="ok")
            {
              localStorage.setItem("flag", this.formLabelAlign.name);
              localStorage.setItem("isAdmin", this.formLabelAlign.type);
              this.$store.commit("admin/ADMIN_NAME", {
                adminName: this.formLabelAlign.name,
                isAdmin: this.formLabelAlign.type,
                // userHead:res.data.data.src
              });
              // console.log(this.formLabelAlign.type);
              this.$router.push("/admin/index");
            }
            else if(state==="okok")
          {
            localStorage.setItem("nickname",res.data.data.nickname);
            localStorage.setItem("headphoto",res.data.data.photo);
            localStorage.setItem("username",res.data.data.username);
            this.$store.commit("user/NAME", {
                nickname: res.data.data.nickname,
                 username: res.data.data.username,
                headphoto:res.data.data.photo,
                // userHead:res.data.data.src
              });
            // console.log(res.data.data.nickname);
            this.$router.push("/index");
          }
            else
            {
             this.$message({
                message: "有误",
                type: "warning"
              });
            }

          }
         )
        }
        else
        {
           this.$message.error('请完整填写信息后登陆');
        }
      })
    }
  },
  components: {}
};
</script>
<style scoped lang="scss">
.tiparea {
  text-align: right;
  font-size: 12px;
  color: #333;
}
.input {
  width: 90%;
  float: left;
}
.select {
  width: 60%;
  // text-align: left;
  float: left;
}
.submit_btn {
  width: 90%;
  float: left;
}
span {
  font-family: "Microsoft YaHei";
  font-weight: bold;
  font-size: 26px;
  // padding-top: 30px;
  margin-bottom: 30px;
    line-height: 80px;
}
.leftImage {
  width: 80%;
  background: url(../../assets/timg.jpg) no-repeat center center;
  position:relative;
  top:50px;
  background-size: 100% 100%;
  height: 400px;
    // border: 1px black solid;
}
.el-row {
  width: 100%;
  // border: 1px black solid;
}
.login_table {
  width: 55%;
  min-height: 30px;
  background-color: #e9eef3;
  // border: 10px black solid;
  margin: 0 auto;
  padding: 0px 20px 20px 20px;
  margin-top: 60px;
  box-sizing: border-box;
}

.el-main {
  // background-color: #e9eef3;

  width: 100%;
  // height: 100%;
  // top:30px;
  // position: absolute;
  color: #333;
  text-align: center;
  // line-height: 80px;
    min-height: 80vh;
  background-color: #061f3e;
  // background-size: 100% 100%;
  // height: 600px;
  // height:35vw;
  // padding-bottom:8%;
  // mar
  // height: 100%;
}
</style>