<template>
  <div>
    <Logo>
      <span slot="name">提问</span>
    </Logo>
    <div class="table">
      <el-form ref="form" :model="form" label-width="100px">

        <el-form-item label="疑问类别">
          <el-select v-model="form.type" placeholder="请选择类别">
            <el-option v-for="item in type" :key="item.question_type_id" 
            :label="item.question_type_nane" :value="item.question_type_id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="关键字">
          <el-input v-model="form.key"></el-input>
        </el-form-item>
        <el-form-item label="悬赏金额">
          <el-input v-model="form.price"></el-input>
        </el-form-item>
        <el-form-item label="问题及简介" >
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提问</el-button>
          <!-- <el-button>取消</el-button> -->
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/User/Logo.vue";
export default {
  data() {
    return {
      form: {
        type: "",
        key: "",
        desc: "",
        price:""
      },
      type:[],
    };
  },
  components: { Logo },
  mounted(){
    this.axios.get("/personCustom_api/PersonTp5/public/admin/index/question")
    .then(res=>{
      // console.log(res);
      this.type=res.data.data;
      // console.log(this.type);
    })

  },

  methods:{
      onSubmit(){
        // console.log(this.form.type);
        // console.log(this.form.desc);
        // console.log(this.form.key);
        // console.log(this.form.price);
        var params=new URLSearchParams();
        params.append("username",this.$store.state.user.username);
        params.append("question_type_id", this.form.type);
        params.append("question_content", this.form.desc);
        params.append("question_key", this.form.key);
        params.append("question_price", this.form.price);
        // params.append("sum", this.sum);
    this.axios.post("/personCustom_api/PersonTp5/public/admin/index/question_sumbit",params)
    .then(res=>{
      console.log(res);
      // this.type=res.data.data;
      // console.log(this.type);
    })
        this.$notify({
          title: '提问',
          message: '您的提问已上交，请耐心等候回复',
          duration: 0
        });

       this.$router.push('/index');
      }
  }
};
</script>
<style scoped lang="scss">
.table{
  width:50%;
  margin: 0 auto;
}
</style>
