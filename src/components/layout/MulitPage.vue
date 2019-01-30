<template>
  <div id="mulitpage">
    <ul>
      <li v-for="(item ,key) in mulitPage" :key="item.path">
        <a :class="key==currentPage? 'active':''" @click="handleClick(item.path,key)">{{item.name}}
         
          <i v-if="key !=0" class="el-icon-close" @click.stop="handleDelete(key)"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters("layout", ["mulitPage", "currentPage"])
  },
  methods: {
    handleDelete(key) {
      this.deletPage(key);
    },
    handleClick(path, index) {
      this.setNavPath(path);
      this.setCurrentPage(index);
      this.$router.replace(path);
    },
    ...mapMutations("layout", {
      setNavPath: "SET_DEFAULT_PATH",
      setCurrentPage: "SET_CURRENT_PAGE"
    }),
    ...mapActions("layout", ["deletPage"])
  },
  components: {}
};
</script>

<style lang="scss" scoped >
#mulitpage {
  height: 40px;
  background-color: #fff;
  padding-top: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border-bottom: 1px solid #7098cc;
  ul {
    position: relative;
    z-index: 22;
    top: 1px;
    li {
      margin-right: 5px;
      display: inline-block;
      a {
        color: #4c4c4c;
        display: inline-block;
        padding: 0 15px;
        border: 1px solid #7098cc;
        line-height: 32px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        &.active {
          background-color: #f5f5f5;
          border-bottom-color: #f5f5f5;
          color: #0f7499;
          i {
            color: #049cd3;
          }
        }
        i {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
