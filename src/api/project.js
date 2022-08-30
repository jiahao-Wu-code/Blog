import request from "./request";

export default async function getProjects() {
  return await request.get("/api/project");
}
