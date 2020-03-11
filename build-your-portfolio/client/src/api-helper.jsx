import axios from "axios";

const baseUrl = "http://localhost:3000";

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    authorization: localStorage.getItem("authToken")
  }
});

export const loginUser = async loginData => {
  const resp = await api.post("/auth/login", loginData);
  localStorage.setItem("authToken", resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
};

export const registerUser = async registerData => {
  const resp = await api.post("/users/", { user: registerData });
  localStorage.setItem("authToken", resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data;
};

export const verifyUser = async () => {
  const token = localStorage.getItem("authToken");
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const resp = await api.get("/auth/verify");
    return resp.data;
  }
  return false;
};

export const getAllStocks = async () => {
  let response = await api.get("/stocks");
  return response.data;
};

export const getStocksByType = async (type) => {
  let t = `/stocks_t/${type}`
  let response = await api.get(t)
  return response.data;
} 