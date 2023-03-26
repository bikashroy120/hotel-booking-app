import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";



const creactPlace = async (data) => {
  const response = await axios.post(`${base_url}/place`, data,config);
  console.log(response)
    return response.data;
};

const getOwnerPlace = async () => {
  const response = await axios.get(`${base_url}/place/owner`,config);
    return response.data;
};

const getPlace = async () => {
  const response = await axios.get(`${base_url}/place`,config);
    return response.data.data;
};

const getSingalPlace = async (id) => {
  const response = await axios.get(`${base_url}/place/${id}`,config);
  return response.data.data;
}


const placeService = {
    creactPlace,
    getOwnerPlace,
    getPlace,
    getSingalPlace,
  };
  
  export default placeService;
