<template>
  <div class="container">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="username" label="用户名" width="120"></el-table-column>
      <el-table-column prop="nickname" label="昵称" width="120"></el-table-column>
      <el-table-column prop="register_time" label="创建时间" width="180"></el-table-column>
      <el-table-column prop="Introduction" label="介绍" width="320"></el-table-column>
      <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
        v-if=" scope.row.freeze==1"
          size="mini"
          @click="handleEdit(scope.row)">冻结</el-button>
                  <el-button 
        v-else
          size="mini"
          @click="handleEdit(scope.row)">解冻</el-button>
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
      handleEdit(row){
      
      var params = new URLSearchParams();
      params.append("username",row.username);
      var f=row.freeze*-1
      params.append("freeze",f);
      this.axios
        .post("/personCustom_api/PersonTp5/public/admin/index/user_edit", params)
        .then(res => {

            this.$message({
              message: "操作成功",
              type: "success"
            })
            this.getPerson();
        });

      },
      getPerson(){
      this.axios.get("/personCustom_api/PersonTp5/public/admin/index/user_select")
      .then(res=>{
          console.log(res);
          this.tableData=res.data.data;
      })
      }
  }
};
</script>
<style scoped lang="scss">
.container {
  width: 70%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
  margin:0 auto;
}
</style>