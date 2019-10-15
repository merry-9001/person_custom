<template>
  <el-footer>
    <el-row>
      <el-col :span="24">
        <div class="grid-content">
          <div class="footer">
              <div class="footer_top">
                <span>联系我们&nbsp;</span>
                <span>加入我们&nbsp;</span>
                <span>意见反馈</span>
              </div>
              <hr />
              <div class="footer_bottom">
              <span>2019 usx.com 版权所有&nbsp;</span>
              <span>私人订制网</span>
              </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </el-footer>
</template>

<script>
export default {
  name: "user_footer",
  components: {}
};
</script>
<style scoped lang="scss">

.el-row {
  width: 100%;
  // border: 1px black solid;
}
.el-col {
  border-radius: 4px;
  // border: 3px red solid;
}
.el-footer {
  // height: 560px;
  background-color:#e7e7e7;
  height:100px;
  // border: 3px red solid;
  color: #333;
  text-align: center;
  width: 100%;
     min-height: 9vh;
  height: 100px !important;
  position: relative;
  // border: 3px rgb(0, 4, 216) solid;
  // position: relative;
  // padding-bottom: 1%;
  // padding-top: 10%;
  // height: 100%;
  
  // position: absolute;
  // bottom:0;
}
.grid-content {
  // border-radius: 4px;
  min-height: 30px;
}
.footer {
  
  //   background-color:#e7e7e7;
  // color: #333;
  width: 50%;
  margin: 0 auto;
  // border: 1px salmon solid;
  position:relative;
  // height: 500px;

}
  .footer_top
  {
    width:100%;height:40px;  /*设置div的大小*/
    // border:4px solid #beceeb; /*为了便于观察，显示出边框*/
        display: flex;            
            
        justify-content: center;            
        align-items:flex-end;        
  }
  .footer_bottom
    {
    width:100%;height:40px;  /*设置div的大小*/
    // border:4px solid #beceeb; /*为了便于观察，显示出边框*/
    // display:table-cell; 
    // vertical-align:top;
  }
</style>