import { ShortProductProposition } from '@src/entities/product/model/types/Product';
import {Cart} from './Cart';

export type FetchAddToCartRequest = ShortProductProposition;

export type FetchAddToCartResponse = {
  data: Cart;
};
