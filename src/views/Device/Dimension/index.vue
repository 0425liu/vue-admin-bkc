<template>
  <div class="wrap">
    <div class="page_container content">
      <div class="form-wrap">
        <el-form
          ref="form"
          :model="form"
          label-width="150px"
        >
          <el-form-item label="选择评估维度:">
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="安全性影响(SA)"></el-checkbox>
              <el-checkbox label="失效对系统功能的影响(SF)"></el-checkbox>
              <el-checkbox label="设备失效概率(FF)"></el-checkbox>
              <el-checkbox label="维修费用(MC)"></el-checkbox>
              <el-checkbox label="停运损失(OC)"></el-checkbox>
              <el-checkbox label="可监测性(DE)"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">保存</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="form-wrap">
        <el-form
          ref="form"
          :model="form"
          label-width="150px"
        >
          <el-form-item label="评测标准:">

            <el-row class="inline">
              <el-checkbox>设备状态</el-checkbox>
              <el-select
                v-model="value"
                placeholder="请选择"
                class="w200"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-row>
            <el-row class="inline">
              <el-checkbox label="设备CRI"></el-checkbox>
              <el-input
                class="w200"
                v-model="input"
                placeholder="请输入内容"
              ></el-input>
            </el-row>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">保存</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      input: "",
      options: [
        {
          value: "1",
          label: "极度"
        }
      ],
      form: {
        checkList: ["选中且禁用", "复选框 A"]
      }
    };
  },
  components: {}
};
</script>

<style lang="scss" scoped >
.form-wrap {
  width: 50%;
  float: left;
}
.form-wrap /deep/ .el-form-item__label {
  font-size: 18px;
  padding-bottom: 10px;
  color: #049cd3;
  flex: 0 0 150px;
}
.form-wrap .el-checkbox-group .el-checkbox {
  margin-left: 0;
  width: 200px;
}
.form-wrap .el-checkbox {
  margin-left: 0;
  width: 100px;
}
.inline {
  .w200 {
    width: 200px;
  }
}
</style>
