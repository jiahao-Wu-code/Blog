
<template>
  <div style="display: flex; justify-content: space-around" @click="handleClick">
    <div id="article" style="width: 500px; height: 500px" @click="handleClick"></div>
    <div id="message" style="width: 500px; height: 500px"></div>
  </div>
</template>

<script>
import * as charts from "echarts";
export default {
  data() {
    return {
      articalOption: {
        title: {
          text: "文章数据统计",
        },
        series: [
          {
            type: "pie",
            data: [
              {
                value: 330,
                name: "浏览量",
              },
              {
                value: 200,
                name: "点赞数",
              },
              {
                value: 248,
                name: "评论数",
              },
            ],
          },
        ],
      },
      messageOption: {
        title: {
          text: "留言数据统计",
        },
        series: [
          {
            type: "pie",
            data: [
              {
                value: 330,
                name: "用户",
              },
              {
                value: 200,
                name: "文章数",
              },
              {
                value: 248,
                name: "留言数",
              },
            ],
          },
        ],
      },
    };
  },
  methods: {
    initChart() {
      const articleChart = charts.init(document.getElementById("article"));
      const messageChart = charts.init(document.getElementById("message"));
      articleChart.setOption(this.articalOption);
      messageChart.setOption(this.messageOption);
    },
  },
  mounted() {
    this.initChart();
  },
};
</script>
