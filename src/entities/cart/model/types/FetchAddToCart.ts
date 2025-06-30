import {ProductProposition} from '@src/entities/product/model/types/Product';
import {Cart} from './Cart';

export type FetchAddToCartRequest = {
  product_prop_id: string;
  quantity: number;
};

export type FetchAddToCartResponse = {
  data: Cart;
};
