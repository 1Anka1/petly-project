import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY_PETS;
const SECRET_KEY = import.meta.env.VITE_SECRET_KEY;
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getAccessToken = async () => {
  try {
    const response = await axios.post(`${BASE_URL}/v2/oauth2/token`, {
      grant_type: 'client_credentials',
      client_id: API_KEY,
      client_secret: SECRET_KEY,
    });
    return response.data.access_token;
  } catch (error) {
    console.error('Error fetching access token:', error);
  }
};

const getAnimalsAPI = axios.create({
  baseURL: BASE_URL,
});

export async function getAnimals() {
  const token = await getAccessToken();

  try {
    const { data } = await getAnimalsAPI('/v2/animals', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data.animals;
  } catch (error) {
    console.log(error);
  }
}
