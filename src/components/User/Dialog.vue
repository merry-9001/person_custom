

<template>
  <el-dialog title="提示" :visible.sync="dialog.show" width="30%">
    <span>请对服务进行评价</span>
    <div>
      <span>请打分</span>
      <el-rate v-model="value1"></el-rate>
    </div>
    <!-- <span>{{dialog.order_id}}</span> -->
    <el-input type="text" v-model="apprise_content"></el-input>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="onSubmit(dialog.order_id,dialog.project_product_id)">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      value1: 0,
      apprise_content: ""
    };
  },
  methods: {
    onSubmit(order_id, project_product_id) {
      console.log(order_id, project_product_id);
      // data={
      //   'getPerson':order_id
      // };
      this.dialog.show = false;
      this.$emit(
        "update",
        order_id,
        project_product_id,
        this.value1,
        this.apprise_content,
        this.dialog.orderId
      );
      this.value1 = 0;
      this.apprise_content = "";
    }
  },
  props: {
    dialog: Object
  }
};
</script>
<style scoped lang="scss">
</style>
