import {Pagination} from '@src/shared/types/Pagination';
import {Shop} from './Shop';

export type FetchShopsByRadiusRequest = {
  page?: number;
  coordinates: [number, number];
  radius: number;
  name?: string;
};

export type FetchShopsByRadiusResponse = {
  data: Shop[];
  pagination: Pagination;
};
