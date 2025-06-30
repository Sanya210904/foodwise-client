import {Pagination} from '@src/shared/types/Pagination';
import {ProductProposition} from '@src/entities/product/model/types/Product';
import {ShopCart} from './Cart';

export type FetchCartRequest = {
  data: {
    shop_id: string;
    product_props: ProductProposition[];
  };
};

export type FetchCartResponse = {
  data: ShopCart[];
  pagination: Pagination;
};
