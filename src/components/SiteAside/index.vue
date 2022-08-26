<template>
  <div class="site-aside-container">
    <Avatar
      url="https://img1.baidu.com/it/u=719590741,1199723171&fm=253&fmt=auto&app=138&f=JPEG?w=375&h=500"
    />
    <h1 class="title">哆啦A梦</h1>
    <Menu />
    <Contact />
    <p class="footer"></p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "./Menu";
import Contact from "./Contact";
export default {
  components: {
    Avatar,
    Menu,
    Contact,
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.site-aside-container {
  width: 100%;
  height: 100%;
  background: @dark;
  padding: 20px 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
}
.avatar-container {
  margin: 0 auto;
}
.footer {
  text-align: center;
  font-size: 12px;
}
.title {
  font-size: 1.2em;
  color: #fff;
  text-align: center;
}
</style>
