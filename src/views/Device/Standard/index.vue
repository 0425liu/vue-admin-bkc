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
        <el-table
          :data="tableData"
          border
          style="width: 100%"
        >
          <el-table-column
            prop="num"
            label="序号"
            sortable
            width="180"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="title"
            label="标题"
            width="180"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="category"
            label="分类"
            align="center"
          >
          </el-table-column>
          <el-table-column
            label="编辑"
            align="center"
            width="150"
          >
            <template slot-scope="scope">
              <el-button
                type="primary"
                icon="el-icon-edit"
                size="mini"
                @click="handleEdit(scope)"
              ></el-button>
              <el-button
                type="primary"
                icon="el-icon-delete"
                size="mini"
                @click="handleDelete(scope)"
              ></el-button>
            </template>

          </el-table-column>
        </el-table>
        <div class="page">
          <el-pagination
            background
            :page-sizes="[100, 200, 300, 400]"
            layout="prev, pager, next,sizes ,total"
            :total="1000"
          >
          </el-pagination>
        </div>
      </div>
    </div>
    <el-dialog
      title="新建标准项"
      :visible.sync="dialogFormVisible"
    >
      <el-form
        ref="form"
        :model="form"
        label-width="80px"
        :rules="rules"
      >
        <el-form-item
          label="序号"
          prop="num"
        >
          <el-input
            v-model="form.num"
            placeholder="请输入"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="标准名"
          prop="name"
        >
          <el-input
            v-model="form.name"
            placeholder="请输入"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="分数"
          prop="count"
        >
          <el-input
            v-model="form.count"
            placeholder="请输入"
          ></el-input>
        </el-form-item>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="handleSure"
        >确 定</el-button>
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
      tableData: [
        {
          title: "84092辊压机 EO_KKSSB001.GL-01.JZ-01.TY116",
          num: "kks-116",
          count: "6"
        },
        {
          title: "84092辊压机",
          num: "kks-116",
          count: "6"
        },
        {
          title: "EO_KKSSB001.GL-01.JZ-01.TY116",
          num: "kks-116",
          count: "6"
        },
        {
          title: "EO_KKSSB001.GL-01.JZ-01.TY116",
          num: "kks-116",
          count: "6"
        }
      ],
      dialogFormVisible: false,
      form: {
        num: "",
        name: "",
        count: ""
      },
      rules: {
        num: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        count: [
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
    handleSure() {
      this.submitForm("form", () => {
        this.dialogFormVisible = false;
      });
    }
  }
};
</script>

<style lang="scss" scoped >
</style>
