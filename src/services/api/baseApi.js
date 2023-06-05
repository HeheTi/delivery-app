import axios from 'axios';
import { API_ENDPOINT } from './apiEndpoint';

export const axiosInstance = axios.create({
  baseURL: 'https://delivery-app-backend-04dq.onrender.com/api',
});

// baseURL: 'http://localhost:3001/api',

export const getAllShops = async () => {
  try {
    const { data } = await axiosInstance.get(API_ENDPOINT.SHOPS);
    return data;
  } catch (error) {
    console.dir(error);
    console.log(error.response.data.message);
  }
};

export const getShopDishsById = async id => {
  try {
    const { data } = await axiosInstance.get(`${API_ENDPOINT.SHOP_MENU}/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
