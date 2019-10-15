<template>
  <div class="centerheight">
    <!-- <el-row>
      <el-col :span="12">
        <div class="headwidth">
          <img src="../../assets/register/register_pic.jpg" alt />
          <span class="headspan">用户注册</span>
        </div>
      </el-col>
    </el-row> -->
<Logo>
         <!-- <span slot="name">菜单1</span> -->
</Logo>
    <el-row>
      <el-col :span="24">
        <div class="step">
          <el-steps :active="active" finish-status="success">
            <el-step title="账号密码"></el-step>
            <el-step title="个人信息"></el-step>
            <el-step title="头像"></el-step>
          </el-steps>
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <div v-if="step==1" class="form">

          <el-form :model="formData" label-width="100px" ref="form" :rules="rules">
            <el-form-item label="账号" prop="name">
              <el-input v-model="formData.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="formData.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="password2">
              <el-input type="password" v-model="formData.password2" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div v-else-if="step==2" class="form">

          <el-form :model="formData" label-width="120px" ref="form">
            <el-form-item label="昵称">
              <el-input v-model="formData.nickname" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="性别">
               <el-radio v-model="formData.sex" label="男">男</el-radio>
               <el-radio v-model="formData.sex" label="女">女</el-radio>
            </el-form-item>
            <el-form-item label="介绍一下自己吧">
              <el-input type="textarea" v-model="formData.Introduction" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>

        </div>
        <div v-else-if="step==3" class="form">

          <el-form :model="formData" label-width="50px" ref="form">

            <el-form-item label="头像" >
               <el-radio v-model="formData.photo" label="http://47.96.175.28/personCustom_api/images/user/register/t1.jpg">
               <img src="../../assets/register/t1.jpg" alt  class="headPhoto"/>
               </el-radio>
               <el-radio v-model="formData.photo" label="http://47.96.175.28/personCustom_api/images/user/register/t2.jpg">
                 <img src="../../assets/register/t2.jpg"  alt  class="headPhoto"/>
               </el-radio>
               <el-radio v-model="formData.photo" label="http://47.96.175.28/personCustom_api/images/user/register/t3.jpg">
                 <img src="../../assets/register/t3.jpg"  alt  class="headPhoto"/>
               </el-radio>
            </el-form-item>

          </el-form>

        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <div class="form_button">
          <el-button style="margin-top: 12px;" @click="next('form')">下一步</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Logo from "@/components/User/Logo.vue";
// import Logo from "@/components/User/Logo.vue";
export default {
  data() {
     var validatePass2 = (rule, value, callback) => {
      if (value !== this.formData.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      active: 0,
      step: 1,
      formData: {
        name: "",
        password: "",
        password2: "",
        sex:'男',
        photo:"http://47.96.175.28/personCustom_api/images/user/register/t1.jpg",
        Introduction:"",
        nickname:""

      },
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
            min: 6,
            max: 30,
            message: "长度在6-30之间",
            trigger: "blur"
          }
        ],
        password2: [
          {
            required: true,
            message: "确认密码不能为空",
            trigger: "blur"
          },
          {
            min: 6,
            max: 30,
            message: "长度在6-30之间",
            trigger: "blur"
          },
          {
            validator: validatePass2,
            trigger: "blur"
          }
        ]
      }
    };
  },

  methods: {
    next(form) {
       this.$refs[form].validate(valid => {
         if(valid)
         {
            this.active++;
            if(this.active==3)
            {
                var params = new URLSearchParams();
                params.append("username", this.formData.name);
                params.append("password", this.formData.password);
                params.append("sex", this.formData.sex);
                params.append("photo", this.formData.photo);
                params.append("Introduction", this.formData.Introduction);
                params.append("nickname", this.formData.nickname);
                console.log(this.formData);
            this.axios.post("/personCustom_api/PersonTp5/public/admin/index/userRegister"
            , params).then(res => {
              console.log(res);
            })
                    this.$message({
          message: '恭喜你，注册成功',
          type: 'success'
        });

              var that=this;
              setTimeout(function (){
              that.$router.push('/login')
              },2000);

            }
            this.step++;
         }
         else
         {
            this.$message({
              message: '请按要求填写',
              type: 'warning'
            });
         }
       });
      // if (this.active++ > 2) {
      //   this.active = 0;
      // }
      // this.step++;
    }
  },
  components:{Logo}
};
</script>
<style scoped lang="scss">
.headPhoto{
          width: 70px;
        height: 70px;
        border-radius: 50%;
}
.el-form-item{
    // display: flex;
    // align-items: center;
//  border: 1px black solid;
}
.centerheight
{
  // height: 1200px;
}
.form_button {
  width: 15%;
  margin: 0 auto;

    display: flex;
  justify-content: center;
}
.form {
  width: 30%;
  margin: 0 auto;
    // border: 1px black solid;
}
.step {
  margin: 0 auto;
  padding-bottom: 20px;
  width: 50%;
  //   text-align: cenrter;
  // display: flex;
  // justify-content: center;
  // border: 1px black solid;
}
.headspan {
  font-size: 20px;
}
img {
  width: 150px;
  height: 70px;
  //   border: 1px black solid;
}
.el-row {
  width: 100%;
    padding-bottom: 40px;
  //   padding: 0 20px;
//   border: 1px black solid;
}
.headwidth {
  width: 50%;
  margin: 0 auto;
  display: flex;
  align-items: center;

  // border: 1px black solid;
}
</style>
