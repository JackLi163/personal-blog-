import request from "./request";
export async function getBlogtype() {
  return await request.get("/api/blogtype"); //请求所有博客分类
}
//请求分页博客内容
export async function getBlogs(option = {}) {
  const page = option.page || 1;
  const limit = option.limit || 10;
  const categoryid = option.categoryid || -1;
  return await request.get("/api/blog", {
    params: {
      // 当前页码
      page,
      // 页容量
      limit,
      // 所属分类，-1表示全部
      categoryid,
    },
  });
}

// 获取单个博客
export async function getBlog(id) {
  return await request.get(`/api/blog/${id}`);
}

// 提交评论
export async function postComments(commentsInfo) {
  console.log(commentsInfo);
  return await request.post("/api/comment", commentsInfo);
}

// 分页获取评论

export async function getComments(page = 1, limit = 10, blogid = -1) {
  return await request.get("/api/comment", {
    params: {
      page,
      limit,
      blogid,
    },
  });
}
