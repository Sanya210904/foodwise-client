import {baseApi} from '@src/shared/config/api/baseApi';
import {shopApiUrls} from '../model/constants/shopConstants';
import {FetchShopsRequest, FetchShopsResponse} from '../model/types/FetchShops';
import {
  FetchShopByIdRequest,
  FetchShopByIdResponse,
} from '../model/types/FetchShopById';
import {Shop} from '../model/types/Shop';

export const shopApi = baseApi.injectEndpoints({
  endpoints: build => ({
    searchShops: build.query<FetchShopsResponse, FetchShopsRequest>({
      query: ({page}) => ({
        url: shopApiUrls.search,
        params: {
          page: page || 1,
        },
      }),
      merge: (currentCache, newItems) => {
        currentCache.data = [...currentCache.data, ...newItems.data];
      },
      forceRefetch({currentArg, previousArg}) {
        return currentArg?.page !== previousArg?.page;
      },
      async onQueryStarted(_, {queryFulfilled}) {
        try {
          await queryFulfilled;
        } catch (e) {
          console.error('Error fetching shops:', e);
        }
      },
    }),
    getShop: build.query<Shop, FetchShopByIdRequest>({
      query: ({shopId}) => ({
        url: shopApiUrls.search,
        params: {
          shopId,
        },
      }),
      transformResponse: (response: FetchShopByIdResponse) => {
        if (response.data.length === 1) {
          return response.data[0];
        }
        throw new Error('Expected exactly one shop');
      },
      async onQueryStarted(_, {queryFulfilled}) {
        try {
          await queryFulfilled;
        } catch (e) {
          console.error('Error fetching shop, ', e);
        }
      },
    }),
  }),
});

export const {useSearchShopsQuery, useGetShopQuery} = shopApi;
