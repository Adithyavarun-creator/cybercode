import axios from "axios";

// const api = "http://localhost:5000/api/";

//cybercode-n2cp.onrender.com/
const api = "https://cybercode-n2cp.onrender.com/api/";

export const registerUser = async (data) => {
  const res = await axios.post(`${api}auth/signup`, data);
  return res.data;
};

export const loginUser = async (data) => {
  const res = await axios.post(`${api}auth/signin`, data, {
    withCredentials: true,
  });
  return res.data;
};

export const logoutUser = async () => {
  const res = await axios.get(`${api}auth/signout`, {
    withCredentials: true,
  });
  return res.data;
};
