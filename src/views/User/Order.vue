<template>
  <div class="contaniner">
    <Logo>
      <span slot="name">订单中心</span>
    </Logo>
    <el-row>
      <el-col>
        <div class="contaniner_table">
          <div class="title">
            <div class="title_name table_head">项目名称</div>
            <div class="title_img table_head">图片</div>
            <div class="title_price table_head">原始价格</div>
            <div class="title_remake table_head">备注</div>
            <div class="title_endprice table_head">最终定价</div>
            <div class="title_endprice table_head">操作</div>
          </div>

          <div v-for="item in tableOrder" :key="item.orderId" class="yyy">
            <div class="border">
              <div class="title_person1">{{ item.orderId }}</div>
              <div class="title_person1">{{ item.orderDate }}</div>
              <div class="title_person1 money">总价￥{{ item.totalPrice }}</div>
              <div class="title_person1">
                <el-button
                  v-if="item.status=='待付款'"
                  type="primary"
                  @click="sumbit_order(item.orderId,item.totalPrice)"
                >付款</el-button>

                <el-button
                  disabled
                  v-else
                  type="primary"
                  @click="sumbit_order(item.orderId,item.totalPrice)"
                >{{ item.status }}</el-button>
              </div>
            </div>
            <div v-for="(items,index) in tableDetail" :key="index" class="content">
              <div v-if="item.orderId==items.orderId" class="content">
                <div class="inner_table">
                  <div class="title_name table_content">{{ items.project_name }}</div>
                  <div class="title_img table_content">
                    <img :src="items.project_src" class="img" />
                  </div>
                  <div class="title_price table_content">{{ items.project_price }}</div>
                  <div class="title_remake table_content">{{ items.project_product_remake }}</div>
                  <div class="title_endprice table_content">{{ items.project_product_price }}</div>
                  <div class="title_endprice table_content" v-if="item.status=='待评价'">
                    <el-button
                      v-if="items.state=='0'"
                      type="primary"
                      @click="order_apprise1(items.project_product_id,items.order_id,item.orderId)"
                    >评价</el-button>
                    <el-button
                      disabled
                      v-else
                      type="primary"
                      @click="sumbit_order(item.orderId,item.totalPrice)"
                    >已评价</el-button>
                    <!-- :dialog="dialog" -->

                    <!-- <el-dialog title="订单评价" :visible.sync="dialogVisible" width="30%">
                      <span>请对服务进行评价</span>
                          <span>{{ items.project_price }}</span>
                      <div>
                        <span>请打分</span>
                        <el-rate v-model="value1"></el-rate>
                      </div>
                      <span>请评价</span>
                      <el-input type="text" v-model="apprise_content"></el-input>
                      <span slot="footer" class="dialog-footer">
                      
                        <el-button type="primary" @click="order_apprise(items.project_product_id,items.order_id)">确 定</el-button>
                      </span>
                    </el-dialog> -->
                  </div>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
      <dialog1 :dialog="dialog" @update="getPerson"></dialog1>
      <!-- <12></12> -->
  </div>
</template>

<script>
import Logo from "@/components/User/Logo.vue";
import Dialog1 from "@/components/User/Dialog.vue";
export default {
  components: { Logo,Dialog1 },
  data() {
    return {
      tableDetail: [],
      tableOrder: [],
      sum: 0,
      dialogVisible: false,

      apprise_content: "",
      dialog:{
        show: false,
        project_product_id: "",
        order_id: "",
        orderId:''
      },
      f:-1
    };
  },
  mounted() {
    this.renderData();
  },
  methods: {
    order_apprise1(project_product_id,order_id,orderId)
    {
     this.dialog = {
        show: true,
        project_product_id:project_product_id,
        order_id:order_id,
        orderId:orderId
      };
      // this.dialogVisible = true;
      // console.log(order_id);
          this.renderData();
    },
    order_apprise(id,order_id) {
      console.log(order_id);
      this.dialogVisible = false;
      // this.dialog=true;

      // var params = new URLSearchParams();
      // params.append("content", this.apprise_content);
      // params.append("rate", this.value1);
      // params.append("username", this.$store.state.user.username);
      // params.append("proId", id);
      // params.append("proTypeId", '1');
      // params.append("order_id", order_id);
      // params.append("orderId", orderId);
      // this.axios.post("/personCustom_api/PersonTp5/public/admin/index/apprise_order", params).
      // then(res=>{
      //     console.log(res);
      // })

      // params.append("WIDtotal_amount", price);

      // console.log(this.value1);
       this.renderData();
    },
    sumbit_order(order, price) {
      // console.log(id);
      var params = new URLSearchParams();
      params.append("WIDout_trade_no", order);
      params.append("WIDsubject", "私人订制服务");
      params.append("WIDtotal_amount", price);

      this.axios
        .post("/personCustom_api/pay/pagepay/pagepay.php", params)
        .then(res => {
          const div = document.createElement("div");
          div.innerHTML = res.data;
          document.body.appendChild(div);
          document.forms[0].submit();
          // console.log(res);
        });
      var params = new URLSearchParams();
      params.append("status", "待评价");
      params.append("orderId", order);
      this.axios
        .post(
          "/personCustom_api/PersonTp5/public/admin/index/order_edit",
          params
        )
        .then(res => {});
    },
    renderData() {
      var params = new URLSearchParams();
      params.append("username", this.$store.state.user.username);
      this.axios
        .post("/personCustom_api/PersonTp5/public/admin/index/order", params)
        .then(res => {
          console.log(res);
          this.tableDetail = res.data.orderDetail.dataOrder;
          this.tableOrder = res.data.order.dataOrder;
          // console.log(this.tableDetail);
        });



    },
    getPerson(order_id,project_product_id,value1,apprise_content,orderId){
      // console.log(order_id,project_product_id,value1,apprise_content);
      // this.f=-1;
      var params = new URLSearchParams();
      params.append("content",apprise_content);
      params.append("rate", value1);
      params.append("username", this.$store.state.user.username);
      params.append("proId", project_product_id);
      params.append("proTypeId", '1');
      params.append("order_id", order_id);
      params.append("orderId", orderId);
      this.axios.post("/personCustom_api/PersonTp5/public/admin/index/apprise_order", params).
      then(res=>{
      })

      this.dialog = {
        show: false,
        project_product_id: "",
        order_id: "",
        orderId:''
      };
      this.renderData();

    }
  }
};
</script>

<style scoped lang="scss">
.table_content {
  text-align: center;
}
.table_head {
  font-size: 20px;
  text-align: center;
}
.money {
  font-weight: bolder;
  font-size: 24px;
  color: red;
}
.img {
  width: 150px;
  height: 150px;
}
.border {
  display: flex;
  justify-content: center;
  align-items: center;
  // border: 3px green solid;
  background: #99a9bf;
  height: 60px;
}
.yyy {
  // border: 3px yellow solid;
}
.title_remake {
  width: 35%;
}
.title_endprice {
  width: 10%;
}
.title_price {
  width: 10%;
}
.title_img {
  width: 30%;
}
.title_name {
  width: 15%;
}
.content {
  // clear: both;
  // border: 3px blue solid;
  width: 100%;
}
.title_person1 {
  width: 25%;
  //  border: 1px red solid;
  text-align: center;
  font-size: 18px;
  // float: left;
}
.inner_table {
  // float: left;
  display: flex;

  // flex-wrap: wrap;
}
.title {
  border: 1px yellow solid;
  display: flex;
}
.contaniner_table {
  width: 70%;
  margin: 0 auto;
  // background: red;
  border: 1px red solid;
}

.contaniner {
  width: 100%;
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 70%;
}
</style>
