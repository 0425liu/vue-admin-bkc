<template>
  <div class="wrap">
    <TreeNode></TreeNode>
    <div class="page_container">
      <HeaderPanel>
        <el-button
          type="primary"
          icon="el-icon-plus"
           @click="dialogFormVisible = true"
        >添加系统</el-button>
      </HeaderPanel>
      <div class="content">
        <div class="form-wrap">
          <el-form
            ref="formInline"
            :model="formInline"
            label-width="80px"
            :rules="rules"
          >
            <el-form-item
              label="系统编码"
              prop="code"
            >
              <el-input
                v-model="formInline.code"
                placeholder="系统编码"
              ></el-input>
            </el-form-item>
            <el-form-item label="系统名称">
              <el-input
                v-model="formInline.name"
                placeholder="系统名称"
              ></el-input>
            </el-form-item>
            <el-form-item label="序号">
              <el-input
                v-model="formInline.num"
                placeholder="序号"
              ></el-input>
            </el-form-item>
            <el-form-item label="KKS码">
              <el-input
                v-model="formInline.kks"
                placeholder="KKS码"
              ></el-input>
            </el-form-item>
            <el-form-item label="TRI">
              <el-input
                v-model="formInline.tri"
                placeholder="TRI"
              ></el-input>
            </el-form-item>
            <el-form-item label="">
              <el-button
                type="primary"
                @click="submitForm('formInline')"
              >修改</el-button>
              <el-button @click="resetForm('formInline')">重置</el-button>
              <el-button
                @click="dialogVisible  =true"
                type="danger"
              >删除</el-button>
            </el-form-item>
          </el-form>
        </div>

      </div>
    </div>
    <el-dialog
      title=""
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <span>确认删除该节点关联所有数据吗？</span>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button
          type="primary"
          @click="dialogVisible = false"
        >确 定</el-button>
        <el-button @click="dialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
    <el-dialog title="我是标题" :visible.sync="dialogFormVisible">
 <el-form
            ref="form"
            :model="formInline"
            label-width="80px"
            :rules="rules"
          >
            <el-form-item
              label="系统编码"
              prop="code"
            >
              <el-input
                v-model="formInline.code"
                placeholder="系统编码"
              ></el-input>
            </el-form-item>
            <el-form-item label="系统名称">
              <el-input
                v-model="formInline.name"
                placeholder="系统名称"
              ></el-input>
            </el-form-item>
            <el-form-item label="序号">
              <el-input
                v-model="formInline.num"
                placeholder="序号"
              ></el-input>
            </el-form-item>
            <el-form-item label="KKS码">
              <el-input
                v-model="formInline.kks"
                placeholder="KKS码"
              ></el-input>
            </el-form-item>
            <el-form-item label="TRI">
              <el-input
                v-model="formInline.tri"
                placeholder="TRI"
              ></el-input>
            </el-form-item>
         
          </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="handleSure">确 定</el-button>
  </div>
</el-dialog>
  </div>
</template>

<script>
import TreeNode from "@/components/TreeNode";
import HeaderPanel from "@/components/HeaderPanel";
export default {
  data() {
    return {
      dialogVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px",
      formInline: {
        user: "",
        name: "",
        num: "",
        kks: "",
        tri: ""
      },
      rules: {
        code: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      }
    };
  },
  components: {
    TreeNode,
    HeaderPanel
  },
  methods: {
    submitForm(formName, callback) {
      console.log(this.$refs.formInline);
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
          if (callback) {
            callback();
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(() => {
          done();
        })
        .catch(() => {});
    },
    handleSure() {
      this.submitForm("form", () => {
        this.dialogFormVisible = false;
      });
    }
  }
};
</script>

<style lang="scss" scoped >
.form-wrap {
  width: 600px;
}
</style>
