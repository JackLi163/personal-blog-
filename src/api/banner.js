import request from "./request";

export default async function getBanner() {
  return await request("/api/banner");
}
