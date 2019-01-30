<template>
  <nav class="menu">
    <el-menu
      id="menu"
      text-color="#fff"
      active-text-color="#fff"
      router
      :default-active=defaultPath
    >
     <Menu :menuList="menu"></Menu>
    </el-menu>

  </nav>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import Menu from "@/components/Menu";
export default {
  data() {
    return {
      menu: [
        {
          name: "台账管理",
          children: [
            {
              name: "设备台账",
              path: "/DeviceAcount"
            },
            {
              name: "系统维护",
              path: "/SystemMaintenance"
            },
            {
              name: "设备评估",
              children: [
                {
                  name: "评估维度",
                  path: "/Dimension"
                },
                {
                  name: "评估标准",
                  path: "/Standard"
                },
                {
                  name: "设备重要度评估",
                  path: "/ImportAssess"
                },
                {
                  name: "设备状态评估",
                  path: "/StatusAssess"
                }
              ]
            }
          ]
        },
        {
          name: "系统管理",
          children: [
            {
              name: "字典管理",
              path: "/DictionaryManage"
            },
            {
              name: "用户",
              path: "/User"
            },
            {
              name: "权限组",
              path: "/Authority"
            },
            {
              name: "菜单管理",
              path: "/Menu"
            }
          ]
        }
      ]
    };
  },
  components: {
    Menu
  },
  computed: {
    ...mapGetters("layout", ["defaultPath"])
  },
  methods: {
    ...mapActions("layout", ["selectPage"])
  }
};
</script>

<style lang="scss" scoped >
@import "~scss/variable.scss";
.menu {
  position: fixed;
  padding-top: 0;
  bottom: 30px;
  z-index: 1080;
  top: 50px;
  margin-left: 0;

  width: 200px;
  background: #138ab7;
  overflow: auto;
}
#menu {
  background-color: #138ab7;
  border-right: none;
  min-width: 200px;
}
#menu .el-submenu .el-menu-item {
  min-width: auto;
}

#menu /deep/ .el-submenu__title,
#menu /deep/ .el-menu-item {
  line-height: 23px;
  padding: 8px 5px;
  height: 39px;
  &:hover {
    background-color: #19a9d9;
  }
}
#menu /deep/ .el-submenu__title i,
#menu /deep/ .el-menu-item i {
  color: #fff;
}
#menu /deep/ .el-menu--inline {
  background-color: #135066;
}
#menu /deep/ .el-menu-item.is-active {
  background-color: #049cd3;
}
#menu /deep/ .el-menu-item:focus,
#menu /deep/ .el-menu-item:hover {
  background-color: #049cd3;
}
</style>
