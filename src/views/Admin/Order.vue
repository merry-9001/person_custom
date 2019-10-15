<template>
  <div class="container">
    
<el-table :data="tableData" style="width: 100%">
      <el-table-column label="序号" >
        <template slot-scope="scope">
    
          <span>{{ scope.row.orderId }}</span>
        </template>
      </el-table-column>
      <el-table-column label="项目名称">
        <template slot-scope="scope">
          <!-- <i class="el-icon-time"></i> -->
          <span>{{ scope.row.username }}</span>
        </template>
      </el-table-column>
      <el-table-column label="价格">
        <template slot-scope="scope">
          <!-- <i class="el-icon-time"></i> -->
          <span>¥{{ scope.row.totalPrice  }}</span>
        </template>
      </el-table-column>
      <el-table-column label="下单时间">
        <template slot-scope="scope">
          <span>{{ scope.row.orderDate }}</span>
        </template>
      </el-table-column>
      <el-table-column label="状态">
        <template slot-scope="scope">
          <span>{{ scope.row.status }}</span>
        </template>
        </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <div v-if="scope.row.status=='未审阅'">
          <el-button size="mini" @click="handleEdit(scope.row)">通过</el-button>
          <el-button size="mini" type="danger" @click="handleDelete( scope.row)">驳回</el-button>
      </div> 
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>

export default {
  name: "orders",
    data() {
    return {
      tableData:[],
    };
  },
  created() {
    this.getPerson();
  },
  methods: {
handleEdit(row)
{
      var params = new URLSearchParams();
      params.append("status",'待付款');
      params.append("orderId",row.orderId);
      this.axios
        .post("/personCustom_api/PersonTp5/public/admin/index/order_edit", params)
        .then(res => {

            this.$message({
              message: "已通过",
              type: "success"
            })
            this.getPerson();
        });
},
    handleDelete(row) {
      // console.log(row.status);
      var params = new URLSearchParams();
      params.append("status",'驳回');
      params.append("orderId",row.orderId);
      this.axios
        .post("/personCustom_api/PersonTp5/public/admin/index/order_edit", params)
        .then(res => {

            this.$message({
              message: "已驳回",
              type: "success"
            })
            this.getPerson();
        });
    },
    getPerson() {
      this.axios.get("/personCustom_api/PersonTp5/public/admin/index/admin_order").then(res => {
        console.log(res);
        // var msg = res.data.msg;

          this.tableData = res.data.order.dataOrder;
          console.log(this.tableData);
          // this.filterTableData= res.data.data.product;

      });
      // console.log('asds');
    },

    getMsgFormSon(data){
        console.log(this.formData.project_src);
        this.formData.project_src='http://47.96.175.28/personCustom_api/images/admin/person/'+data;
        console.log(this.formData.project_src);
    },

  },

};
</script>
<style scoped lang="scss">
.container{
  width: 100%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
}
</style>
