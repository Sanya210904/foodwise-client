import {configureStore} from '@reduxjs/toolkit';
import {baseApi} from '@src/shared/config/api/baseApi';
import {navigate} from '../../router/model/utils/navigationRef';
import {authSlice} from '@src/entities/auth/api/authSlice';
import {userSlice} from '@src/entities/user';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: authSlice.reducer,
    user: userSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          navigate: navigate,
        },
      },
    }).concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
