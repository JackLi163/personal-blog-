import request from "./request";
//全局设置
export default async function () {
  return await request.get("/api/setting");
}
