import {ShopCart} from './Cart';

export type CartSchema = {
  cart: ShopCart[] | null;
  isLoading: boolean;
  error: string | null;
};
