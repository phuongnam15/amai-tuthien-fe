import { sendGet, sendPost } from "./axiosClient";

export const getTargets = (data) => sendGet("/user/products", data);