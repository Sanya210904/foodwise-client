import {RootState} from '@src/app/providers/store/config/config';

export const getCartData = (state: RootState) => state.cart.cart;

export const getCartLoading = (state: RootState) => state.cart.isLoading;

export const getCartError = (state: RootState) => state.cart.error;
