import request from "./request";

export default async function () {
  return await request("/api/banner");
}
