import axios from "axios";

const API_URL = "http://localhost:3001";

export const getTaskAll = async () => {
    const response = await axios.get(`${API_URL}/tasks`);
    return response.data;
  };

 export const createTask = async (task) => {
     const response = await axios.post(`${API_URL}/tasks`, task);
     return response.data;
 } 