import axios from "axios";

const API_URL = "http://localhost:4000"; // Your backend URL

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    return error.response?.data || { error: "Something went wrong!" };
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    return error.response?.data || { error: "Invalid credentials!" };
  }
};
