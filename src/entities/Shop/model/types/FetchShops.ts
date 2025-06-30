import {Pagination} from '@src/shared/types/Pagination';
import {Shop} from './Shop';

export type FetchShopsRequest = {
  page: number;
};

export type FetchShopsResponse = {
  data: Shop[];
  pagination: Pagination;
};
