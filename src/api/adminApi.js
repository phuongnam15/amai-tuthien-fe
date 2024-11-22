import { sendGet, sendPost } from "./axiosClient";

export const login = (data) => sendPost("/admin/login", data);