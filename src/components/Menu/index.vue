<template>
 <div>
   <template v-for="list in menuList">
    <el-submenu :index="list.name" v-if="list.children" :key="list.name">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{list.name}}</span>
        </template>
        <Menu :menuList = "list.children"></Menu>
      </el-submenu>
      <el-menu-item @click="handleClick(list)" v-else :index="list.path" :key="list.path">
        <i class="el-icon-menu"></i>
        <span slot="title">{{list.name}}</span>
      </el-menu-item>
    </template>
 </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Menu",
  data() {
    return {};
  },
  props: {
    menuList: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleClick(page) {
      this.selectPage(page);
    },
    ...mapActions("layout", ["selectPage"])
  }
};
</script>

<style lang="scss" scoped >
</style>
