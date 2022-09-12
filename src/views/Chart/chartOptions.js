import * as charts from "echarts";
const chartOptions = {
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
};
export default chartOptions;