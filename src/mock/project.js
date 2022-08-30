import Mock from "mockjs";

Mock.mock(/^\/api\/project\/?$/, "get", {
  code: 0,
  msg: "",
  "data|10-20": [
    {
      id: "@uuid",
      name: "@ctitle(1, 10)",
      url: "https://github.com/jiahao-Wu-code/Blog",
      github: "https://github.com/jiahao-Wu-code/Blog",
      "description|1-4": ["@cparagraph(1, 5)"],
      "thumb|1": ["https://img2.baidu.com/it/u=3803635102,3335465051&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        "https://img0.baidu.com/it/u=254179110,1247872551&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500",
        "https://img1.baidu.com/it/u=174447561,2827207129&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281"],
    },
  ],
});
