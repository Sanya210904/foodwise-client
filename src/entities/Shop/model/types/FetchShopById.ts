import {Pagination} from '@src/shared/types/Pagination';
import {Shop} from './Shop';

export type FetchShopByIdRequest = {
  shopId: string;
};

export type FetchShopByIdResponse = {
  data: Shop[];
  pagination: Pagination;
};
