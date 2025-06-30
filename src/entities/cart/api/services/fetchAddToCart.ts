import {createAsyncThunk} from '@reduxjs/toolkit';
import {axiosApi} from '@src/shared/config/api/axiosApi';
import {cartConstants} from '../../model/constants/cartConstants';
import {
  FetchAddToCartRequest,
  FetchAddToCartResponse,
} from '../../model/types/FetchAddToCart';

export const fetchAddToCart = createAsyncThunk<
  FetchAddToCartResponse,
  FetchAddToCartRequest,
  {rejectValue: undefined}
>('cart/addToCart', async (data, {rejectWithValue}) => {
  try {
    const response = await axiosApi.post(`${cartConstants.addToCart}`, data);

    if (response.status !== 200) {
      throw new Error('Error while adding to cart');
    }

    return response.data;
  } catch (error: any) {
    console.log(error);
    return rejectWithValue(error.response.data);
  }
});
