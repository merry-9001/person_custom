<template>
  <div class="contaniner">
    <Logo>
      <span slot="name">申请资质</span>
    </Logo>
    <div class="contaniner_table">
      <el-form ref="form" :model="sizeForm" label-width="80px" :rules="rules">
        <el-form-item label="真实姓名" class="input_width" prop="name">
          <el-input v-model="sizeForm.name" width="200"></el-input>
        </el-form-item>
        <el-form-item label="手机号码" class="input_width" prop="phone">
          <el-input v-model="sizeForm.phone" width="200"></el-input>
        </el-form-item>

        <el-form-item label="学历" prop="education">
          <el-select v-model="sizeForm.education"  placeholder="请选择你的学历">
            <el-option label="高中" value="高中"></el-option>
            <el-option label="本科" value="本科"></el-option>
            <el-option label="研究生" value="研究生"></el-option>
            <el-option label="博士" value="博士"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="擅长领域" >
          <el-checkbox-group v-model="sizeForm.type">
            <el-checkbox-button
              v-for="(item,index) in type"
              :key="index"
              :label="item.question_type_nane"
              name="type"
            ></el-checkbox-button>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-radio-group v-model="sizeForm.sex" size="medium">
            <el-radio border label="男"></el-radio>
            <el-radio border label="女"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="个人简介" class="input_width">
          <el-input type="textarea" placeholder="请输入内容" v-model="sizeForm.person"></el-input>
        </el-form-item>
        <el-form-item label prop="info">
          <el-switch v-model="sizeForm.delivery"></el-switch>同意并遵守本站相关规定
        </el-form-item>
        <el-form-item size="large">
          <el-button type="primary" @click="onSubmit('form')">立即申请</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/User/Logo.vue";
export default {
  components: { Logo },
  data() {
    var validateMobilePhone = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("手机号不可为空"));
      } else {
        if (value !== "") {
          var reg = /^1[3456789]\d{9}$/;
          if (!reg.test(value)) {
            callback(new Error("请输入有效的手机号码"));
          }
        }
        callback();
      }
    };

    var info = (rule, value, callback) => {
      if (this.sizeForm.delivery ==false) {
        callback(new Error('请勾选'));
      } 
      else
      {
        callback();
      }
    };

    return {
      sizeForm: {
        name: "",
        education: "",
        delivery: false,
        type: [],
        sex: "",
        phone: "",
        person: ""
      },
      type: [],
      rules: {
        name: [
          {
            required: true,
            message: "真实姓名不能为空",
            trigger: "blur"
          },
          {
            min: 2,
            max: 8,
            message: "长度在2-8之间",
            trigger: "blur"
          }
        ],
        phone: [
          {
            validator: validateMobilePhone,
            trigger: "blur"
          }
        ],
        education: [
          {
            required: true,
            message: "学历不能为空",
            trigger: "blur"
          }
        ]
        ,
        sex: [
          {
            required: true,
            message: "性别不能为空",
            trigger: "blur"
          }
        ]

       ,
        ok: [
          {
            required: true,
            message: "请勾选",
            trigger: "blur"
          }
        ],

          info: [
          {
            validator: info,
            trigger: "blur"
          }
        ],
      }
    };
  },
  methods: {
    onSubmit(form) {
      this.$refs[form].validate(valid => {
        if (valid) {
        var params = new URLSearchParams();
        params.append("name", this.sizeForm.name);
        params.append("phone", this.sizeForm.phone);
        params.append("education", this.sizeForm.education);
        params.append("field", this.sizeForm.type);
        params.append("sex", this.sizeForm.sex);
        params.append("introduce", this.sizeForm.person);
        params.append("username", this.$store.state.user.username);
        //   console.log(this.formData);
        this.axios
          .post(
            "/personCustom_api/PersonTp5/public/admin/index/apply_submit",
            params
          )
          .then(res => {
            console.log(res);
            if (res.data.msg == "no") {
              this.$message.error("您已申请，请勿重复提交");
            } else {
              this.$notify({
                title: "申请",
                message: "您的申请已发送，请耐心等待回复",
                duration: 0,
                type: "success"
              });
              this.$router.push("/index");
            }
          });
        }
        else
        {
          this.$message.error("请填写完整信息");
        }
      })
    }
  },
  mounted() {
    this.axios
      .get("/personCustom_api/PersonTp5/public/admin/index/apply_type")
      .then(res => {
        // console.log(res);
        this.type = res.data.data;
        console.log(this.type);
      });
  }
};
</script>
<style scoped lang="scss">
.input_width {
  width: 350px;
}
.contaniner {
  width: 100%;
}
.contaniner_table {
  width: 40%;
  margin: 0 auto;
}
</style>