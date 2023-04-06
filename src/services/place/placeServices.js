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
    return response.data.data;
};

const getPlace = async () => {
  const response = await axios.get(`${base_url}/place`,config);
    return response.data.data;
};

const getSingalPlace = async (id) => {
  const response = await axios.get(`${base_url}/place/${id}`,config);
  return response.data.data;
}

const creactRoom = async (id,data) => {
  const response = await axios.post(`${base_url}/rooms/${id}`, data,config);
    return response.data;
};

const updateRoom = async (id,data) => {
  const response = await axios.patch(`${base_url}/rooms/update/${id}`, data,config);
    return response.data;
};


const updatePlace = async (id,data) => {
  const response = await axios.patch(`${base_url}/place/update/${id}`, data,config);
    return response.data;
};

const deleteRoom = async (id) => {
  const response = await axios.delete(`${base_url}/rooms/delete/${id}`,config);
  console.log(response)
    return response.data;
};

const deleteHotal = async (id) => {
  const response = await axios.delete(`${base_url}/place/delete/${id}`,config);
  console.log(response)
    return response.data;
};


const placeService = {
    creactPlace,
    updatePlace,
    getOwnerPlace,
    deleteHotal,
    getPlace,
    getSingalPlace,
    creactRoom,
    deleteRoom,
    updateRoom
  };
  
  export default placeService;
