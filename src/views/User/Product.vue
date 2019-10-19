<template>
  <div class="contaniner">
    <el-row>
      <el-col>
        <div class="contaniner1">
          <div>
            <span class="question">提出你的问题</span>

            <el-carousel :interval="4000" type="card" height="400px">
              <el-carousel-item>
                <img class="width" src="../../assets/product/q2.jpg" alt />
              </el-carousel-item>
              <el-carousel-item>
                <img class="width" src="../../assets/product/q3.jpg" alt />
              </el-carousel-item>
              <el-carousel-item>
                <img class="width" src="../../assets/product/q4.jpg" alt />
              </el-carousel-item>
            </el-carousel>

            <span
              class="block"
            >世间百问，我最知道；知识江湖，谁主沉浮？ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 在这里，你可以和共同爱好、专长和理想的知友组建团队~</span>
            <span
              class="block"
            >通过专业知识帮助数亿网友！ &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 回答内容客观真实， 有来源可查证</span>

            <span class="block"></span>
            <span class="block">回答全面有详略，详细介绍重点内容</span>
            <span class="block">
              回答内容通俗易懂 &nbsp;&nbsp;&nbsp;
              <el-button type="success" @click="question()">提问</el-button>
            </span>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="18">
        <div class="col_center1">
          <span class="question person_title">私人订制服务展示</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="col_center1">
          <el-input placeholder="搜索"  v-model="input" clearable maxlength="10" width="100"></el-input>
          <el-button  @click="search()" icon="el-icon-search"></el-button>
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="6" v-for="item in data" :key="item.project_id">
        <el-card class="card">
          <img :src="item.project_src" class="image" />
          <div style="padding: 14px;">
            <span class="price">{{item.project_name}}</span>
            <div class="bottom clearfix">
              <span class="price">¥{{item.project_price}}起</span>
              <span class="price">共有{{item.project_num}}人付款</span>
              <el-button class="button" @click="ToDetail(item.project_id)">查看详情</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      input: ""
    };
  },
  methods: {
    question() {
      this.$router.push("/question");
    },
    product_show() {
      this.axios
        .get("/personCustom_api/PersonTp5/public/admin/index/product_show")
        .then(res => {
          // console.log(res);
          this.data = res.data.data;
          console.log(this.data);
        });
    },
    ToDetail(id) {
      this.$router.push("/detail/1/" + id);
    },
    // ?id=" + cityId
    search(){
      this.axios
        .get("/personCustom_api/PersonTp5/public/admin/index/product_show?id="+this.input)
        .then(res => {
          // console.log(res);
          this.data = res.data.data;
          console.log(this.data);
        });


    }


  },
  mounted() {
    this.product_show();
  }
};
</script>
<style scoped lang="scss">
.col_center1 {
  display: flex;
  // border: 1px red solid;
    padding-top: 30px;
}
.button {
  padding-top: 10px;
}
.price {
  display: block;
  padding-bottom: 10px;
}
.image {
  width: 210px;
  height: 210px;
}
.width {
  width: 400px;
}
.pic1 {
  width: 250px;
  height: 200px;
}
.pic {
  width: 300px;
  height: 200px;
}
.block {
  display: block;
  padding: 10px;
  font-size: 16px;
  // font-family:"";
}
.question {
  display: block;
  font-size: 25px;
  font-weight: bolder;
  color: #ba55d3;
  padding-bottom: 20px;
}
.person_title {

}

.el-row {
  width: 75%;
  margin: 0 auto;
  // border: 1px red solid;
}
.contaniner {
  padding-top: 30px;
  // background: #dcdfe6;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
</style>