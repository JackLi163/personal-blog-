import Mock from "mockjs";
import qq from "@/assets/Contact/qq.jpg";
import weixin from "@/assets/Contact/weixin.jpg";

Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar:
      "https://gss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/4afbfbedab64034f9fddff01a9c379310a551da0.jpg",
    siteTitle: "我的个人空间",
    github: "https://github.com/JackLi163",
    qq: "1146957654",
    qqQrCode: qq,
    weixin: "16620026028",
    weixinQrCode: weixin,
    mail: "liweijie1146957654@gmail.com",
    icp: "川ICP备17001719号",
    githubName: "Jack",
    favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
  },
});
