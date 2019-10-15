<template>
  <div>
   <el-row>
      <el-col :span="12">
        <div class="headwidth">
          <img src="../../assets/register/register_pic.jpg" alt />
          <div class="headspan">
              <slot name="name">
                <span >用户注册</span>
              </slot>
          </div>

        </div>
      </el-col>
    </el-row>
   </div>
</template>


<script>
  export default {
    // name: 'logo',
   
  }
</script>
<style scoped lang="scss">
.el-row
{
  // border: 1px blue solid;
}
.headwidth {
  width: 50%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  font-size: 18px;
  // border: 1px black solid;
}
img {
  width: 150px;
  height: 70px;
  //   border: 1px black solid;
}
</style>
