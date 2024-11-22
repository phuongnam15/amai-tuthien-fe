import { sendGet, sendPost } from "./axiosClient";

export const login = (data) => sendPost("/admin/login", data);
export const searchOrganization = (data) => sendGet("/admin/organization/search", data);
export const getListOrganization = (data) => sendGet("/admin/organization/list", data);
export const saveOrganization = (data) => sendPost("/admin/organization/create", data);