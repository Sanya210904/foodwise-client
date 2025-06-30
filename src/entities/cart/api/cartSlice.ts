import {createSlice} from '@reduxjs/toolkit';
import {fetchCart} from './services/fetchCart';
import {CartSchema} from '../model/types/CartSchema';
import {fetchAddToCart} from './services/fetchAddToCart';

const initialState: CartSchema = {
  cart: null,
  isLoading: false,
  error: null,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchCart.pending, state => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.isLoading = false;

      state.cart = action.payload.data;
    });
    builder.addCase(fetchCart.rejected, (state, action) => {
      state.isLoading = false;
    });

    builder.addCase(fetchAddToCart.pending, state => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchAddToCart.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(fetchAddToCart.rejected, (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
    });
  },
});
