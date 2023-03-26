import axios from "axios";
// import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";



const regester = async (data) => {
  const response = await axios.post(`${base_url}/user`, data);
    return response.data;
};




const login = async (data) => {
  const response = await axios.post(`${base_url}/user/login`, data);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};


const authService = {
  login,
  regester
};

export default authService;