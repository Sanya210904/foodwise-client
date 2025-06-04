import {baseApi} from '@src/shared/config/api/baseApi';
import {authApiUrls} from '../model/constants/authConstants';
import EncryptedStorage from 'react-native-encrypted-storage';
import {ES_ACCESS_TOKEN_KEY} from '@src/shared/constants/authConstants';
import {
  FetchRegisterRequest,
  FetchRegisterResponse,
} from '../model/types/FetchRegister';
import {FetchLoginRequest, FetchLoginResponse} from '../model/types/FetchLogin';
import {ExtraArgument} from '@src/shared/config/store/types';
import {RouteName} from '@src/app/providers/router/model/constants/RouteName';
import Toast from 'react-native-toast-message';
import {setIsAuth} from './authSlice';

export const authApi = baseApi.injectEndpoints({
  endpoints: build => ({
    register: build.mutation<FetchRegisterResponse, FetchRegisterRequest>({
      query: body => ({
        url: authApiUrls.register,
        method: 'POST',
        body,
      }),
      async onQueryStarted(_, {queryFulfilled, extra, dispatch}) {
        try {
          const result = await queryFulfilled;
          EncryptedStorage.setItem(
            ES_ACCESS_TOKEN_KEY,
            result.data.data.accessToken,
          );

          dispatch(setIsAuth(true));
          const typedExtra = extra as ExtraArgument;
          typedExtra.navigate(RouteName.HOME);
        } catch (error: any) {
          console.error(error?.error?.data?.error?.message);
          Toast.show({
            type: 'error',
            text1: 'Registration error',
            text2: `${error?.error?.data?.error?.message}`,
          });
        }
      },
    }),
    login: build.mutation<FetchLoginResponse, FetchLoginRequest>({
      query: body => ({
        url: authApiUrls.login,
        method: 'POST',
        body,
      }),
      async onQueryStarted(_, {queryFulfilled, extra, dispatch}) {
        try {
          const result = await queryFulfilled;
          EncryptedStorage.setItem(
            ES_ACCESS_TOKEN_KEY,
            result.data.data.accessToken,
          );

          dispatch(setIsAuth(true));
          const typedExtra = extra as ExtraArgument;
          typedExtra.navigate(RouteName.HOME);
        } catch (error: any) {
          console.error(error);
          Toast.show({
            type: 'error',
            text1: 'Login error',
            text2: `${error?.error?.data?.error?.message}`,
          });
        }
      },
    }),
    logout: build.query({
      query: () => authApiUrls.logout,
      async onQueryStarted(_, {queryFulfilled, extra, dispatch}) {
        try {
          await queryFulfilled;
          EncryptedStorage.removeItem(ES_ACCESS_TOKEN_KEY);

          dispatch(setIsAuth(false));
          const typedExtra = extra as ExtraArgument;
          typedExtra.navigate(RouteName.LOGIN);
        } catch (error) {
          console.error(error);
        }
      },
    }),
    checkAuth: build.query<FetchLoginResponse, undefined>({
      query: () => authApiUrls.refresh,
      async onQueryStarted(_, {queryFulfilled, dispatch}) {
        try {
          const result = await queryFulfilled;
          EncryptedStorage.setItem(
            ES_ACCESS_TOKEN_KEY,
            result.data.data.accessToken,
          );
          dispatch(setIsAuth(true));
        } catch (error) {
          console.error(error);
          EncryptedStorage.removeItem(ES_ACCESS_TOKEN_KEY);
          dispatch(setIsAuth(false));
        }
      },
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutQuery,
  useCheckAuthQuery,
} = authApi;
