
<template>
  <div class="chart-container">
    <div class="info">
      <div
        class="card"
        v-for="item in chartData"
        :key="item.id"
        @click="handleClick(item.route)"
      >
        <img :src="item.url" class="icon" :alt="item.title" />
        <div class="desc">
          <span class="title">{{ item.title }}</span>
          <span class="num">{{ item.total }}</span>
        </div>
      </div>
    </div>
    <div id="chart"></div>
  </div>
</template>

<script>
import * as charts from "echarts";
import Icon from "../../components/Icon/index.vue";
import chartData from "./data";
export default {
  data() {
    return {
      chartOption: {
        backgroundColor: "#202020",
        title: {
          top: 20,
          text: "View",
          textStyle: {
            fontWeight: "normal",
            fontSize: 16,
            color: "#F1F1F3",
          },
          left: "1%",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          top: 20,
          icon: "rect",
          itemWidth: 14,
          itemHeight: 5,
          itemGap: 13,
          data: ["Visitor", "Message", "Project", "Artical"],
          right: "4%",
          textStyle: {
            fontSize: 12,
            color: "#F1F1F3",
          },
        },
        grid: {
          top: 100,
          left: "2%",
          right: "2%",
          bottom: "5%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisLine: {
              lineStyle: {
                color: "#57617B",
              },
            },
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          },
        ],
        yAxis: [
          {
            type: "value",
            // name: "(%)",
            axisTick: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                color: "#57617B",
              },
            },
            axisLabel: {
              margin: 10,
              fontSize: 14,
            },
            splitLine: {
              lineStyle: {
                color: "#57617B",
              },
            },
          },
        ],
        series: [
          {
            name: "Visitor",
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              width: 1,
            },
            areaStyle: {
              color: new charts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "rgba(137, 189, 27, 0.3)",
                  },
                  {
                    offset: 0.8,
                    color: "rgba(137, 189, 27, 0)",
                  },
                ],
                false
              ),
              shadowColor: "rgba(0, 0, 0, 0.1)",
              shadowBlur: 10,
            },
            itemStyle: {
              color: "rgb(137,189,27)",
              borderColor: "rgba(137,189,2,0.27)",
              borderWidth: 12,
            },
            data: [230, 215, 330, 255, 240, 279, 266],
          },
          {
            name: "Artical",
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              width: 1,
            },
            areaStyle: {
              color: new charts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "rgba(0, 136, 212, 0.3)",
                  },
                  {
                    offset: 0.8,
                    color: "rgba(0, 136, 212, 0)",
                  },
                ],
                false
              ),
              shadowColor: "rgba(0, 0, 0, 0.1)",
              shadowBlur: 10,
            },
            itemStyle: {
              color: "rgb(0,136,212)",
              borderColor: "rgba(0,136,212,0.2)",
              borderWidth: 12,
            },
            data: [220, 180, 195, 165, 172, 165, 122],
          },
          {
            name: "Project",
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              width: 1,
            },
            areaStyle: {
              color: new charts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "rgba(219, 50, 51, 0.3)",
                  },
                  {
                    offset: 0.8,
                    color: "rgba(219, 50, 51, 0)",
                  },
                ],
                false
              ),
              shadowColor: "rgba(0, 0, 0, 0.1)",
              shadowBlur: 10,
            },
            itemStyle: {
              color: "rgb(219,50,51)",
              borderColor: "rgba(219,50,51,0.2)",
              borderWidth: 12,
            },
            data: [220, 182, 165, 175, 162, 191, 154],
          },
          {
            name: "Message",
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              width: 1,
            },
            areaStyle: {
              color: new charts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "rgba(173, 10, 186 , 0.3)",
                  },
                  {
                    offset: 0.8,
                    color: "rgba(173, 10 ,186 , 0)",
                  },
                ],
                false
              ),
              shadowColor: "rgba(173, 10 ,186, 0.1)",
              shadowBlur: 10,
            },
            itemStyle: {
              color: "rgb(173, 10 ,186)",
              borderColor: "rgba(173, 10 ,186,0.2)",
              borderWidth: 12,
            },
            data: [120, 132, 145, 140, 133, 141, 144],
          },
        ],
      },
      chartData: chartData,
    };
  },
  methods: {
    initChart() {
      const articleChart = charts.init(document.getElementById("chart"));
      articleChart.setOption(this.chartOption);
    },
    handleClick(e) {
      this.$router.push(e);
    },
  },
  mounted() {
    this.initChart();
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
  #chart {
    width: 100%;
    height: calc(100% - 200px);
  }
}
</style>
