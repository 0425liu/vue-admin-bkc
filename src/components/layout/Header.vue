<template>
  <header>
    <img src="./logo.png"/>
    优化检修诊断平台
  </header>
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
header {
  height: 50px;
  background: $bgcolor1;
  padding-right: 10px;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 800;
  font-size: 28px;
  color: $color1;
}
</style>
