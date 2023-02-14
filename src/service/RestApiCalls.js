import {  BACKEND_API_GATEWAY_URL } from '../constants/appConstants';
import axios from 'axios';



export const createClientApi = async (clientReqBody) => {
  console.log(clientReqBody)
    const axiosConfig = getAxiosConfig();
    const responseData = await axios.post(`${BACKEND_API_GATEWAY_URL}/api/v1/client`, clientReqBody, axiosConfig).then((response) => {
      return response.data;
    });
    return responseData;
  };

  export const getAllClientsApi = async (pageNumber) => {
    const responseData = axios.get(`${BACKEND_API_GATEWAY_URL}/api/v1/client/all?page=${pageNumber}&size=8`).then((response) => {
      return response.data;
    });
   
    return responseData;
  };
  
  export const contactsClientApi = async (contactsReqBody) => {
    console.log(contactsReqBody)
      const axiosConfig = getAxiosConfig();
      const responseData = await axios.post(`${BACKEND_API_GATEWAY_URL}/api/v1/contact`, contactsReqBody, axiosConfig).then((response) => {
        return response.data;
      });
      return responseData;
    };


    export const linkClientApi = async (contactsReqBody) => {
      console.log(contactsReqBody)
        const axiosConfig = getAxiosConfig();
        const responseData = await axios.post(`${BACKEND_API_GATEWAY_URL}/api/v1/contact/link`, contactsReqBody, axiosConfig).then((response) => {
          return response.data;
        });
        return responseData;
      };
  


    export const getAllContantsApi = async (pageNumber) => {
      const responseData = axios.get(`${BACKEND_API_GATEWAY_URL}/api/v1/contact/all?page=${pageNumber}&size=6`).then((response) => {
        return response.data;
      });
      return responseData;
    };

  const getAxiosConfig = () => {
    const axiosConfig = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    return axiosConfig;
  };

  