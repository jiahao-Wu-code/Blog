
<template>
  <div class="chart-container">
    <div class="info">
      <div class="card" v-for="item in chartData" :key="item.id">
        <img :src="item.url" class="icon" :alt="item.title" />
        <div class="desc">
          <span class="title">{{ item.title }}</span>
          <span class="num">{{ item.total }}</span>
        </div>
      </div>
      <!-- <div class="card">
        <img
          src="https://github.com/jiahao-Wu-code/Imags/blob/main/imgs/message.png?raw=true"
          class="icon"
        />
        <div class="desc">
          <span class="title">Messages</span>
          <span class="num">100240</span>
        </div>
      </div>
      <div class="card">
        <img
          src="https://github.com/jiahao-Wu-code/Imags/blob/main/imgs/aa.png?raw=true"
          class="icon"
        />
        <div class="desc">
          <span class="title">Articles</span>
          <span class="num">100240</span>
        </div>
      </div>
      <div class="card">
        <img
          src="https://github.com/jiahao-Wu-code/Imags/blob/main/imgs/project.png?raw=true"
          class="icon"
        />
        <div class="desc">
          <span class="title">Projects</span>
          <span class="num">100240</span>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import * as charts from "echarts";
import Icon from "../../components/Icon/index.vue";
import chartData from "./data";
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
      chartData: chartData,
    };
  },
  methods: {
    // initChart() {
    //   const articleChart = charts.init(document.getElementById("article"));
    //   const messageChart = charts.init(document.getElementById("message"));
    //   articleChart.setOption(this.articalOption);
    //   messageChart.setOption(this.messageOption);
    // },
  },
  mounted() {
    // this.initChart();
  },
  components: { Icon },
};
</script>
<style scoped lang="less">
.chart-container {
  width: 100%;
  height: 100%;
  background-color: #f2f7ff;
  .info {
    display: flex;
    padding: 35px 20px 20px;
    justify-content: space-between;
  }
  .card {
    display: flex;
    width: 300px;
    height: 150px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 4px 4px 40px rgb(0 0 0 / 5%);
    border-color: rgba(0, 0, 0, 0.05);
    cursor: pointer;
    .icon {
      width: 80px;
      height: 80px;
      margin: 35px;
      margin-right: 50px;
      border-radius: 20px;
    }
    .desc {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .title,
      .num {
        display: inline-block;
        width: 100px;
        height: 50px;
        text-align: center;
        line-height: 50px;
      }
      .title {
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
      }
      .num {
        font-size: 20px;
        font-weight: bold;
      }
    }
  }
}
</style>
