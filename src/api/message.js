import request from "./request";

//分页获取留言
export function getMessage(page = 1, limit = 10) {
  return request.get("/api/message", {
    params: {
      limit,
      page,
    },
  });
}
// 提交评论
export function postMessage(messageInfo) {
  return request.post("/api/message", messageInfo);
}
