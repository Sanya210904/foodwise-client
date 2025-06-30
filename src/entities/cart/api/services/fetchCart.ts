import {createAsyncThunk} from '@reduxjs/toolkit';
import {axiosApi} from '@src/shared/config/api/axiosApi';
import {cartConstants} from '../../model/constants/cartConstants';
import {FetchCartResponse} from '../../model/types/FetchCart';

export const fetchCart = createAsyncThunk<
  FetchCartResponse,
  undefined,
  {rejectValue: undefined}
>('cart/getCart', async (_, {rejectWithValue}) => {
  try {
    const response = await axiosApi.get(`${cartConstants.getCart}`);

    if (response.status !== 200) {
      throw new Error('Error while fetching cart');
    }

    console.log(response.data);
    return response.data;
  } catch (error: any) {
    console.log(error);
    return rejectWithValue(error.response.data);
  }
});
