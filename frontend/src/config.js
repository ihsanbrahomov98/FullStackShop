import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://ecommerce-conte.herokuapp.com',
});
