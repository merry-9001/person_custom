<template>
  <div>
    <el-dialog
      :title="dialog.title"
      :visible.sync="dialog.show"
      :close-on-click-modal="false"
      :close-on-press-escape="true"
      :modal-append-to-body="false"
    >
      <el-form :model="formData" label-width="100px" ref="form"
     >
        <el-form-item label="活动名称">
          <el-input v-model="formData.project_name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="定价">
          <el-input v-model="formData.project_price" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="介绍">
          <el-input
            type="textarea"
            autosize
            v-model="formData.project_introduce"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input type="textarea" autosize v-model="formData.project_remake" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="图片">
          <input type="file" name="file" value="上传图片" @change="handleToUpload" />
        </el-form-item>
        <el-form-item>
          <img :src="formData.project_src" class="head" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialog.show = false">取 消</el-button>
        <el-button type="primary" @click="onSubmit('form')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  props: {
    dialog: Object,
    formData: Object
  },
  methods: {
    handleToUpload(ev) {
      var file = ev.target.files[0];
      var param = new FormData();
      param.append("file", file, file.name);
      var config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };
      //   console.log('asddas');
      this.axios
        .post("/personCustom_api/picUpload.php", param, config)
        .then(res => {
          //   console.log(res);
          var stauts = res.data.stauts;

          if (stauts === "ok") {
            this.msg = res.data.address;
            this.$emit("func", this.msg);

            // console.log(this.msg);
          }
        });
    },
    onSubmit(data) {
      const f = this.dialog.option;
      var params = new URLSearchParams();
      params.append("project_name", this.formData.project_name);
      params.append("project_price", this.formData.project_price);
      params.append("project_introduce", this.formData.project_introduce);
      params.append("project_remake", this.formData.project_remake);
      params.append("project_src", this.formData.project_src);
      params.append("project_id", this.formData.project_id);
      if (f === "add") {
        this.axios.post("/personCustom_api/personAdd.php", params).then(res => {
          console.log(res);
          var stauts = res.data.stauts;
          // console.log(msg);
          // var that = this;
          if (stauts === "ok") {
            this.dialog.show = false;
            this.$emit("update");
            this.$message({
              message: "添加完成",
              type: "success"
            });
          }
        });
      }
      else{
        //   personEdit.php
        //   console.log(this.formData.project_id);
          this.axios.post("/personCustom_api/personEdit.php", params).then(res => {
          console.log(res);
          var stauts = res.data.msg;
          // console.log(msg);
          // var that = this;
          if (stauts === "ok") {
            this.dialog.show = false;
            this.$emit("update");
            this.$message({
              message: "修改完成",
              type: "success"
            });
          }
        });
      }
    }
  }
};
</script>
<style scoped>
img {
  width: 200px;
  height: 150px;
}
</style>