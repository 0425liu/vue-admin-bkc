<template>
  <div  class="wrap">
    <div class="page_container">
      <HeaderPanel>
        <el-row :gutter="20">
          <el-col :span="3">
            <el-input
              v-model="input"
              placeholder="请输入关键字"
            ></el-input>
          </el-col>
          <el-col :span="6">
            <el-button
              type="primary"
              icon="el-icon-search"
            >搜索</el-button>
           <el-button
              type="primary"
              icon="el-icon-plus"
            >新增</el-button>
          </el-col>
        </el-row>
      </HeaderPanel>
      <div class="content">
        <el-table
          :data="tableData"
          border
          style="width: 100%"
        >
          <el-table-column
            prop="code"
            label="字典码"
            align="center"
          >
         
      <template slot-scope="scope">
        <span><router-link to="/DictionaryManage/Code">{{scope.row.code}}</router-link></span>
      </template> 
          </el-table-column>
          <el-table-column
            prop="name" 
            label="名称"
            align="center"
          >
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
  </div>
</template>

<script>
import HeaderPanel from "@/components/HeaderPanel";
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "可用设备"
        },
        {
          value: "选项2",
          label: "无效设备"
        }
      ],
      input: "",
      value: "选项1",
      tableData: [
        {
          code: "UNIT",
          name: "图谱"
        },
        {
          code: "UNIT",
          name: "图谱"
        },
        {
          code: "UNIT",
          name: "图谱"
        },
        {
          code: "UNIT",
          name: "图谱"
        }
      ]
    };
  },
  components: {
    HeaderPanel
  },
  methods: {
    filterHandler(value, row, column) {
      const property = column["property"];
      console.log(column);
      return row[property] === value;
    },
    handleEdit(scope) {
      console.log(scope.row);
    },
    handleDelete(scope) {
      console.log(scope.column);
    }
  }
};
</script>

<style lang="scss" scoped >
</style>
