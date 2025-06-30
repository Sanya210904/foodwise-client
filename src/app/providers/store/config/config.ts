import {configureStore} from '@reduxjs/toolkit';
import {baseApi} from '@src/shared/config/api/baseApi';
import {navigate} from '../../router/model/utils/navigationRef';
import {authSlice} from '@src/entities/auth/api/authSlice';
import {userSlice} from '@src/entities/user';
import {cartSlice} from '@src/entities/cart/api/cartSlice';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: authSlice.reducer,
    user: userSlice,
    cart: cartSlice.reducer,
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
