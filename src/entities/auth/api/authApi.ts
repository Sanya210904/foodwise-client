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
import {clearUser, setUser} from '@src/entities/user/api/userSlice';

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

          const user = result.data.data.user;

          dispatch(setIsAuth(true));
          dispatch(setUser(user));
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

          const user = result.data.data.user;
          console.log(user);
          dispatch(setUser(user));
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
    logout: build.mutation({
      query: () => ({url: authApiUrls.logout, method: 'GET'}),
      async onQueryStarted(_, {queryFulfilled, extra, dispatch}) {
        try {
          await queryFulfilled;
          EncryptedStorage.removeItem(ES_ACCESS_TOKEN_KEY);

          dispatch(clearUser());
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

          const user = result.data.data.user;
          dispatch(setUser(user));
          dispatch(setIsAuth(true));
        } catch (error: any) {
          EncryptedStorage.removeItem(ES_ACCESS_TOKEN_KEY);
          dispatch(setIsAuth(false));
          Toast.show({
            type: 'error',
            text1: 'Login error',
            text2: `${error?.error?.data?.error?.message}`,
          });
        }
      },
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useCheckAuthQuery,
} = authApi;
