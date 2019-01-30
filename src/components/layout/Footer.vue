<template>
  <footer>
    <div class="f-l">
      <a href="">北京必可测科技股份有限公司</a>
      <span>© 2018Copyright</span> <span> 备案号：京ICP备14025579号</span> <span> 当前版本： 1.0.1586.20190104</span>
    </div>
    <div class="f-r">
      <span> 2019年01月16日</span>
      <span>当前用户： 喻健</span>
      <a href="">退出登录</a></div>
  </footer>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang="scss" scoped >
@import "~scss/variable.scss";
@import "~scss/extend.scss";
footer {
  width: 100%;
  height: 30px;
  background-color: $bgcolor1;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  color: #ffffff;
  position: fixed;
  bottom: 0;
  clear: both;
  font-family: "Microsoft Yahei";
  font-size: 12px;
  line-height: 30px;
  padding: 0 10px;
  z-index: 1090;
  .f-l {
    @extend %f-left;
  }
  .f-r {
    @extend %f-right;
  }
  a {
    color: $color2;
  }
  span {
    padding-right: 10px;
  }
}
</style>
