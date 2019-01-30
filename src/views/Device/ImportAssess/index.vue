<template>
  <div  class="wrap">
    <TreeNode></TreeNode>
    <div class="page_container">
      <HeaderPanel>
        <el-row :gutter="20">
          <el-col :span="3">
            <el-select
              v-model="selectValue"
              placeholder="请选择"
            >
              <el-option
                v-for="item in select"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="3">
            <el-select
              v-model="value"
              placeholder="请选择"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="3">
            <el-input
              v-model="input"
              placeholder="请输入关键字"
            ></el-input>
          </el-col>
          <el-col :span="3">
            <el-button
              type="primary"
              icon="el-icon-search"
            >搜索</el-button>
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
            fixed
            prop="name"
            label="设备名称"
            sortable
            width="180"
            :filters="[{ text: '8', value: '84092辊压机' }, { text: '公司', value: '公司' }]"
            :filter-method="filterHandler"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="KKS"
            label="设备KKS编码"
            width="180"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="category"
            label="设备分类"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="score"
            label="设备重要度评分"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="category"
            label="规格型号"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="category"
            label="生产厂家"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="category"
            label="安装位置"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="category"
            label="出厂日期"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="category"
            label="责任人"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="category"
            label="图形查看"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="category"
            label="详情"
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
  </div>
</template>

<script>
import TreeNode from "@/components/TreeNode";
import HeaderPanel from "@/components/HeaderPanel";
export default {
  data() {
    return {
      selectValue: "",
      select: [
        {
          value: "选项1",
          label: "全部"
        },
        {
          value: "选项2",
          label: "无效设备"
        }
      ],
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
          name: "84092辊压机 EO_KKSSB001.GL-01.JZ-01.TY116",
          kks: "kks-116",
          score: "6"
        },
        {
          name: "84092辊压机",
          kks: "kks-116",
          score: "6"
        },
        {
          name: "EO_KKSSB001.GL-01.JZ-01.TY116",
          kkd: "kks-116",
          score: "6"
        },
        {
          name: "EO_KKSSB001.GL-01.JZ-01.TY116",
          kks: "kks-116",
          score: "6"
        }
      ]
    };
  },
  components: {
    TreeNode,
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
