import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';  //PORTA DO BACKEND

//Metodos POST GET PUT DELETE
export const fetchData = async (endpoint: string, id?: string) => {
  try {
    const url = id ? `${API_BASE_URL}/${endpoint}/${id}` : `${API_BASE_URL}/${endpoint}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // You might want to handle this error more gracefully
  }
};

export const postData = async (endpoint: string, data: any) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/${endpoint}`, data);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const deleteData = async (endpoint: string, id?: string) => {
  try {
    const url = id ? `${API_BASE_URL}/${endpoint}/${id}` : `${API_BASE_URL}/${endpoint}`;
    const response = await axios.delete(url);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const updateData = async (endpoint: string, data: any, id: string)  => {
  try {
    const url = `${API_BASE_URL}/${endpoint}/${id}`
    const response = await axios.put(url);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};


