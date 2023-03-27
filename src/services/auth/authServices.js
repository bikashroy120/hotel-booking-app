import axios from "axios";
import { config } from "../../utils/axiosconfig";
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

const getProfile = async () => {
  const response = await axios.get(`${base_url}/user/profile-data`,config);
  return response.data.data;
};


const updateProfile = async(data) =>{
  const response = await axios.patch(`${base_url}/user/update`,data,config);
  console.log(response.status)
  return response.data.data;
}


const authService = {
  login,
  regester,
  getProfile,
  updateProfile,
};

export default authService;