import {
  BaseQueryFn,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import {ES_ACCESS_TOKEN_KEY} from '@src/shared/constants/authConstants';
import EncryptedStorage from 'react-native-encrypted-storage';
import {API_MAIN_URL} from '@env';

export const baseQuery = fetchBaseQuery({
  baseUrl: API_MAIN_URL,
  credentials: 'include',
  prepareHeaders: async headers => {
    const accessToken = await EncryptedStorage.getItem(ES_ACCESS_TOKEN_KEY);

    if (accessToken) {
      headers.set('Authorization', `Bearer ${accessToken}`);
    }

    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    console.log('Getting refresh tokens');

    try {
      const refreshResult = await baseQuery(
        {
          url: '/users/refresh',
          method: 'GET',
        },
        api,
        extraOptions,
      );

      if (refreshResult.data) {
        //@ts-ignore
        const currentAccessToken = refreshResult.data.accessToken;

        await EncryptedStorage.setItem(ES_ACCESS_TOKEN_KEY, currentAccessToken);

        result = await baseQuery(args, api, extraOptions);
      } else {
        console.log('Failed to refresh token');
      }
    } catch (e) {
      console.log('Not auth', e);
    }
  }
  return result;
};

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
