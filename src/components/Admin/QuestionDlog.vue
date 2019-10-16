<template>
<el-dialog
  title="请认真回答"
  :visible.sync="dialog.show"
  width="40%">
  <span>{{dialog.question}}</span>

  <div>  <span>回答一
              <el-input type="textarea" v-model="slove1"></el-input></span></div>

            <span>回答二</span>
          <el-input type="textarea" v-model="slove2"></el-input>
  <span slot="footer" class="dialog-footer">
    <el-button type="primary"
     @click="question_sumbit(dialog.id)"
     >确 定</el-button>
  </span>
</el-dialog>

</template>

<script>
  export default {
    data() {
      return {
        // dialogVisible: true,
        slove1:'',
        slove2:''
      };
    },
    methods:{
      question_sumbit(id){
        this.dialog.show=false;
        this.$emit("update",id,this.slove1,this.slove2);
        this.slove1="";
        this.slove2="";

      }
    },
        props: {
      dialog: Object,

    },
  };
</script>
<style scoped lang="scss">

</style>
