import axios from 'axios';
import EncryptedStorage from 'react-native-encrypted-storage';
import {API_MAIN_URL} from '@env';
import {ES_ACCESS_TOKEN_KEY} from '@src/shared/constants/authConstants';

export const axiosApi = axios.create({
  baseURL: API_MAIN_URL,
  withCredentials: true,
});

axiosApi.interceptors.request.use(async config => {
  config.headers.Authorization = `Bearer ${await EncryptedStorage.getItem(
    ES_ACCESS_TOKEN_KEY,
  )}`;

  return config;
});

axiosApi.interceptors.response.use(
  config => {
    return config;
  },
  async error => {
    const originalRequest = error.config;
    if (
      error.response?.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      console.log('Getting refresh tokens');
      originalRequest._isRetry = true;
      try {
        const response = await axios.get(`${API_MAIN_URL}/users/refresh`, {
          withCredentials: true,
        });
        console.log(response.data);
        await EncryptedStorage.setItem(
          ES_ACCESS_TOKEN_KEY,
          response.data.accessToken,
        );
        return axiosApi.request(originalRequest);
      } catch (e) {
        console.log('Not auth');
      }
    }
    throw error;
  },
);
