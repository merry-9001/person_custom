
<template>
  <div class="container">
     <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="name" label="用户名" width="120"></el-table-column>
      <el-table-column prop="phone" label="电话号码" width="180"></el-table-column>
      <el-table-column prop="education" label="学历" width="120"></el-table-column>
      <el-table-column prop="field" label="擅长领域" width="220"></el-table-column>
      <el-table-column prop="introduce" label="介绍" width="320"></el-table-column>
      <el-table-column label="操作">
      <template slot-scope="scope" v-if=" scope.row.state==0">
        <el-button
          size="mini"
          @click="handleEdit(scope.row,1)">通过</el-button>
        <el-button
          size="mini"
          @click="handleEdit(scope.row,-1)">驳回</el-button>
      </template>
    </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
  data() {
    return {
      tableData: [

      ]
    };
  },
    mounted(){
    this.getPerson();
  },
  methods:{
      handleEdit(row,f){
      var params = new URLSearchParams();
      params.append("id",row.id);
      params.append("state",f);
      params.append("username",row.username);
      this.axios
        .post("/personCustom_api/PersonTp5/public/admin/index/apply_edit", params)
        .then(res => {
            console.log(res);
            this.$message({
              message: "操作成功",
              type: "success"
            })
            this.getPerson();
        });
      },
      getPerson(){
      this.axios.get("/personCustom_api/PersonTp5/public/admin/index/apply_select")
      .then(res=>{
          // console.log(res);
          this.tableData=res.data.data;
      })
      }
  }
  }
</script>
<style scoped lang="scss">
.container{

  width: 100%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;

}
</style>