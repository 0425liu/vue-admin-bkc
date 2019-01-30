<template>
  <div id="app">
    <Header></Header>
    <Menu></Menu>
    <div class="container">
      <mulit-page></mulit-page>
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Menu from "@/components/layout/Menu";
import MulitPage from "@/components/layout/MulitPage";
export default {
  components: {
    Header,
    Footer,
    Menu,
    MulitPage
  }
};
</script>
<style lang="scss" scoped>
.container {
  position: absolute;
  top: 50px;
  left: 200px;
  bottom: 30px;
  right: 0;
  overflow: auto;
}
</style>
