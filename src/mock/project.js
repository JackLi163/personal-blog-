import Mock from "mockjs";

Mock.mock("/api/project", "get", {
  code: 0,
  msg: "",
  "data|10-20": [
    {
      id: "@guid",
      name: "@ctitle(1, 10)",
      "url|1": ["@url", null],
      "github|1": ["@url", null],
      "description|1-4": ["@cparagraph(1, 5)"],
      "thumb|1": ["@image('180x150', '@color','@color','@province' )", null],
      "order|+1": 1,
    },
  ],
});
