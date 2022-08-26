import Mock from "mockjs";

Mock.mock("/api/banner", "get", {
  code: 0,
  msg: "",
  data: [
    {
      id: "2",
      midImg: "https://img2.baidu.com/it/u=3986441321,4079404563&fm=253&fmt=auto&app=138&f=JPEG?w=450&h=253",
      bigImg: "https://img2.baidu.com/it/u=3986441321,4079404563&fm=253&fmt=auto&app=138&f=JPEG?w=450&h=253",
      title: "快乐时光",
      description: "你受伤的时候，我永远都在"
    },
    {
      id: "1",
      midImg:
        "https://img0.baidu.com/it/u=697189480,103991079&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=307",
      bigImg:
        "https://img0.baidu.com/it/u=697189480,103991079&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=307",
      title: "积极乐观",
      description: "生活百般滋味，人生需要笑对！",
    },
    {
      id: "3",
      midImg: "https://img0.baidu.com/it/u=3466054758,3329756729&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281",
      bigImg: "https://img0.baidu.com/it/u=3466054758,3329756729&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281",
      title: "不舍天真",
      description: "虽然不是世界第一,不过我的确是猫型机器人的前两三名",
    },
  ],
});
