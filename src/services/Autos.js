import axios from 'axios';

const API_URL = 'http://localhost:8080/api/vehiculos/page';

const obtenerAutos = async (page, size) => {
  try {
    const response = await axios.post(API_URL, {
      params: { page, size}
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export default {
  obtenerAutos
};
