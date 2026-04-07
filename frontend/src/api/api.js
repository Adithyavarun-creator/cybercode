import axios from "axios";

export const registerUser = async (data) => {
  const res = await axios.post("http://localhost:5000/api/auth/signup", data);
  return res.data;
};

export const loginUser = async (data) => {
  const res = await axios.post("http://localhost:5000/api/auth/signin", data, {
    withCredentials: true,
  });
  return res.data;
};

export const logoutUser = async () => {
  const res = await axios.get("http://localhost:5000/api/auth/signout", {
    withCredentials: true,
  });
  return res.data;
};
