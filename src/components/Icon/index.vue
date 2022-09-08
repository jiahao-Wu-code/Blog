<template>
  <i class="iconfont icon-container" :class="fontClass"></i>
</template>

<script>
const classMap = {
  home: "icon-shouye",
  success: "icon-success",
  error: "icon-error",
  close: "icon-close",
  warn: "icon-warn",
  info: "icon-info",
  blog: "icon-blog",
  code: "icon-code",
  weixin: "icon-weixin1",
  mail: "icon-youxiang",
  github: "icon-github-fill",
  qq: "icon-QQ",
  arrowUp: "icon-arrow-up",
  arrowDown: "icon-arrow-down",
  empty: "icon-empty",
  chat: "icon-liuyanban-05",
  chart: "icon-shuju",
  project: "icon-communication",
  message: "icon-Messages",
  user: "icon-user-01",
  article: "icon-wenzhang",
};
export const types = Object.keys(classMap);
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    // 图标类样式
    fontClass() {
      return classMap[this.type];
    },
  },
};
</script>

<style scoped>
@import "//at.alicdn.com/t/c/font_3634838_f9mjt07nliw.css";
.iconfont {
  color: inherit;
  font-size: inherit;
}
</style>
