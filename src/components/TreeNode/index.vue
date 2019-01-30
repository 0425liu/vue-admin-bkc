<template>
  <div class="tree_left">
    <el-tree
      :data="data"
      node-key="id"
      highlight-current
      :props="defaultProps"
      @node-click="handleNodeClick"
      ref="tree"
    >
    <span  class="custom-tree-node" slot-scope="{ node }">
       <i class="el-icon-document"></i><span>{{ node.label }}</span>

    </span>
    </el-tree>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          cc: "111",
          label: "景德镇电厂",
          id: 1,
          children: [
            {
              cc: "111",
              label: "#1机组",
              id: 2,
              children: [
                {
                  cc: "111",
                  label: "锅炉公用",
                  id: 3
                }
              ]
            }
          ]
        },
        {
          cc: "111",
          id: "2-1",
          label: "#2机组",
          children: [
            {
              cc: "111",
              id: "2-2-1",
              label: "12",
              children: [
                {
                  cc: "111",
                  id: "2-2-1-3",
                  label: "三级 2-1-1"
                }
              ]
            },
            {
              cc: "111",
              label: "测试机组",
              children: [
                {
                  cc: "111",
                  id: "13",
                  label: "机组"
                }
              ]
            }
          ]
        },
        {
          cc: "111",
          label: "系统",
          children: [
            {
              cc: "111",
              id: "22",
              label: "系统",
              children: [
                {
                  cc: "111",
                  label: "系统"
                }
              ]
            },
            {
              cc: "111",
              label: "系统",
              children: [
                {
                  cc: "111",
                  label: "系统"
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  methods: {
    handleNodeClick(data) {
      console.log(data.id);
    }
  }
};
</script>

<style lang="scss" scoped >
</style>
