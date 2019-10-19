<template>
  <div>
    <div class="swip">
      <swiper :options="swiperOption">
        <swiper-slide class="swiper-slide" v-for="(item,index) in slide" :key="index">
          <!-- 我是第{{item}}个轮播图 -->
          <img :src="item" alt class="img" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <!-- 分页  -->
      </swiper>
    </div>
    <div>
      <el-row>
        <el-col>
          <div class="col_center">最新上线</div>
        </el-col>
      </el-row>

      <el-row>
        <el-col>
          <div class="col_center1">私人订制服务</div>
        </el-col>
      </el-row>

      <el-row>
        <el-col>
          <div class="contaniner">
            <div @click="ToDetail(item.project_id)" to='/detail' class="min_contaniner" v-for="item in personData " :key="item.project_id">
                <img :src="item.project_src" class="img1">
                <span class="price">¥{{item.project_price}}</span><br>
                <span class="name"> {{item.project_name}}</span><br>
                <span class="num">共有{{item.project_num}}人付款</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <!-- <el-row>
        <el-col>
          <div class="col_center1">租号服务</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <div class="contaniner">
            <div class="min_contaniner"></div>
            <div class="min_contaniner"></div>
            <div class="min_contaniner"></div>
            <div class="min_contaniner"></div>
          </div>
        </el-col>
      </el-row> -->
            <el-row>
        <el-col>
          <div class="col_center1"></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: [
        "http://47.96.175.28/personCustom_api/images/user/index/l1.jpg",
        "http://47.96.175.28/personCustom_api/images/user/index/l2.jpg",
        "http://47.96.175.28/personCustom_api/images/user/index/l3.jpg"
      ],
      swiperOption: {
        //显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: false //允许分页点击跳转
        },

        //自动轮播
        autoplay: {
          delay: 2000,
          stopOnLastSlide: false /* 触摸滑动后是否继续轮播 */,
          disableOnInteraction: false
        },
        //开启循环模式
        loop: true,
        //开启鼠标滚轮控制Swiper切换
        mousewheel: true
      },
      personData:{}
    };
  },
  mounted(){
     this.axios.get("/personCustom_api/PersonTp5/public/admin/index/index").
     then(res=>{
       console.log(res);
       this.personData=res.data.data.personSelect;
      //  console.log(this.personData);
     })
  },
  methods:{
    ToDetail(id)
    {
      // console.log(id);
     this.$router.push("/detail/1/" + id);
    }
  }
};
</script>
<style scoped lang="scss">
.num{
  float: right;
    padding-right:5px;
}
.name
{

  padding-left:5px;
}
.price
{
  color:red;
  font-size: 18px;
  padding-left:5px;
}
.img1{
    width: 210px;
    max-height: 210px;
    min-height: 210px;
    // border: 1px red solid;
}
.min_contaniner:hover{
  border: 1px red solid;
  // box-sizing: border-box;
}
.min_contaniner {
  // display: inline-block;
  // z-index:10000;
      border: 1px #dfdfdf solid;
  padding:5px 5px 0px 5px;
  width: 210px;
  height: 290px;
  margin-right: 50px;
  float: left;
  background: #dfdfdf;
  // border: 1px yellow solid;
}
.contaniner {
  // background: blue;
  width: 75%;
  height: 290px;
  margin: 0 auto;
  display: flex;
  // flex-wrap: wrap;
  //  justify-content:flex-start;
  // background: red;
  // float: left;
  // border: 1px yellow solid;
}
.col_center1 {
  width: 75%;
  margin: 0 auto;
  // border: 1px yellow solid;
  font-size: 20px;
  padding-bottom: 20px;
    padding-top: 20px;
}
.col_center {
  width: 75%;
  margin: 0 auto;
  // border: 1px yellow solid;
  font-size: 30px;
}
.el-col {
  // width:60%;

  //   border: 1px green solid;
}
.el-row {
  // margin:0 auto;
}
.swip {
  // border: 1px black solid;
}
.img {
  width: 100%;
  height: 300px;
}
.swiper-slide {
  width: 100%;

  // line-height:500px;
  // font-size: 50px;
  // text-align: center;
  // background-color: rosybrown;
}
</style>
