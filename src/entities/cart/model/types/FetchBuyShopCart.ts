import {ShortProductProposition} from '@src/entities/product/model/types/Product';

export type FetchBuyShopCartRequest = {
  shop_id: string;
  product_props: ShortProductProposition[];
};

export type FetchBuyShopCartResponse = {
  daily_id: string;
  shop_id: string;
  user_id: string;
  product_props: ShortProductProposition[];
};
