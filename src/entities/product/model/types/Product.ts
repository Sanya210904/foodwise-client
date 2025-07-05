import {DecimalNumber} from '@src/shared/types/DecimalNumber';

export type Product = {
  __v: number;
  _id: string;
  category_id: string | null;
  description: string;
  discount: number;
  discount_price: DecimalNumber;
  expiration_date: string;
  image: string;
  price: DecimalNumber;
  product_id: string;
  quantity: number | null;
  title: string;
  user_id: string;
};

export type CartProduct = {
  id: string;
  discount: number;
  discountPrice: string;
  expirationDate: string;
  image: string;
  price: string;
  quantity: number | null;
  title: string;
};

export type ProductProposition = {
  basket_item_id: string;
  category_id: string | null;
  description: string;
  discount: number;
  discount_price: DecimalNumber;
  expiration_date: string;
  image: string;
  price: DecimalNumber;
  product_id: string;
  quantity: number;
  title: string;
  _id: string;
};

export type ShortProductProposition = {
  product_prop_id: string;
  quantity: number;
};
