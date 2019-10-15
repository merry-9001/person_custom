<template>
  <div>
    <div class="logo">
      <Logo>
        <span slot="name">商品详情</span>
      </Logo>
    </div>
    <div class="contaniner">
      <el-row>
        <el-col>
          <div class="left">
            <img :src="personDetail.project_src" class="imgSize" />
          </div>
          <div class="right">
            <span class="title">{{personDetail.project_name}}</span>
            <div class="price">
              <span>价格：</span>
              <span class="price1">¥{{personDetail.project_price}}起</span>
            </div>
            <div class="introduce">
              <span>介绍：</span>
              <span>{{personDetail.project_introduce}}</span>
            </div>

            <div class="introduce">
              <span>注意事项及备注：</span>
              <span>{{personDetail.project_remake}}</span>
            </div>
            <div class="button">
              <el-button type="primary" plain @click="dialogVisible = true">备注</el-button>

              <el-button class="button_cart" type="danger" @click="add_cart">加入购物车</el-button>

              <el-dialog title="私人订制" :visible.sync="dialogVisible" width="30%">
                <div class="remake">
                  <span>请写下你的要求和备注，你要的样子我们都有（必填）</span>
                </div>
                <el-input type="textarea" v-model="remake" placeholder="请输入内容"></el-input>

                <div class="remake">
                  <span>自定义价格（价格不能低于标价，可不填）</span>
                </div>
                <el-input v-model="price"></el-input>

                <span slot="footer" class="dialog-footer">
                  <el-button @click="dialogVisible = false">取 消</el-button>
                  <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                </span>
              </el-dialog>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/User/Logo.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      personDetail: {},
      dialogVisible: false,
      remake: "",
      price: ""
    };
  },
  mounted() {
    //   console.log(this.id);
    this.axios
      .get(
        "/personCustom_api/PersonTp5/public/admin/index/personDetail?id=" +
          this.id
      )
      .then(res => {
        //    console.log(res);
        this.personDetail = res.data.data.detail;
        console.log(this.personDetail);
        //    this.personData=res.data.data.personSelect;
        //  console.log(this.personData);
      });
  },
  methods: {
    add_cart() {
      if (this.remake == "") {
        this.$message.error("请先填写备注");
      } else if (
        this.price != "" &&
        this.price < this.personDetail.project_price
      ) {
        this.$message.error("不能输入价格低于标价");
      } else {
        if (this.price == "") this.price = this.personDetail.project_price;

        // console.log(this.remake);
        // console.log(this.$store.state.user.username);

        var params = new URLSearchParams();
        params.append("project_product_remake", this.remake);
        params.append("project_product_price", this.price);
        params.append("username", this.$store.state.user.username);
        params.append("project_id", this.id);
        params.append("project_type_id", 1);
        this.axios
          .post(
            "/personCustom_api/PersonTp5/public/admin/index/add_cart",
            params
          )
          .then(res => {
            console.log(res);
          });
        this.remake = "";
        this.price = "";

        this.$alert("已成功将商品加入购物车中", "购物车", {
          confirmButtonText: "确定"
        });
      }
      //   console.log(this.remake);
    }
  },
  components: { Logo }
};
</script>
<style scoped lang="scss">
.remake {
  padding-bottom: 10px;
  padding-top: 10px;
}
.button_cart {
  padding-left: 20px;
}
.introduce {
}
.price1 {
  font-size: 20px;
  font-weight: bold;
  color: red;
}
.price {
  background: rgba($color: pink, $alpha: 0.3);
  width: 50%;
}
.price,
.introduce,
button {
  margin-top: 10px;
  margin-bottom: 10px;
  // border: 1px blue solid;
  // width:100%;
}
.title {
  font-size: 20px;
}
.right {
  padding-left: 50px;
  width: 100%;
  // border: 1px pink solid;
}
.imgSize {
  width: 400px;
  height: 400px;
  // border: 1px yellow solid;
}
.logo {
  //   border: 1px yellowgreen solid;
  padding-bottom: 10px;
}
.contaniner {
  padding-top: 10px;
  width: 73%;
  //   border: 1px red solid;
  margin: 0 auto;
  // padding-bottom: 0px;
}
.el-col {
  display: flex;
  // border: 1px green solid;
}
</style>
