import axios from "axios";

const API_URL = "http://localhost:8080/api/auth"; // adjust if backend path is different

// Register a new user
export const signup = async (userData) => {
  const response = await axios.post(`${API_URL}/signup`, userData);
  return response.data;
};

// Login user
export const login = async (credentials) => {
  const response = await axios.post(`${API_URL}/login`, credentials);
  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
  }
  return response.data;
};

// Logout
export const logout = () => {
  localStorage.removeItem("token");
};
