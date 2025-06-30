import {ProductProposition} from '@src/entities/product/model/types/Product';
import {Shop} from '@src/entities/shop/model/types/Shop';
import {DecimalNumber} from '@src/shared/types/DecimalNumber';

export type Cart = {
  daily_id: string;
  shop_id: string;
  user_id: string;
  product_props: [
    {
      product_prop_id: string;
      quantity: 0;
    },
  ];
  state: string;
  creation_date: string;
};

export type ShopCart = {
  overall_price: DecimalNumber;
  product_props: ProductProposition[];
  shop: Shop;
  user_id: string;
};
