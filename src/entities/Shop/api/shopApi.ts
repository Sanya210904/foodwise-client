import {baseApi} from '@src/shared/config/api/baseApi';
import {shopApiUrls} from '../model/constants/shopConstants';
import {FetchShopsRequest, FetchShopsResponse} from '../model/types/FetchShops';
import {
  FetchShopByIdRequest,
  FetchShopByIdResponse,
} from '../model/types/FetchShopById';
import {Shop} from '../model/types/Shop';
import {
  FetchShopsByRadiusRequest,
  FetchShopsByRadiusResponse,
} from '../model/types/FetchShopsByRadius';

export const shopApi = baseApi.injectEndpoints({
  endpoints: build => ({
    searchShops: build.query<FetchShopsResponse, FetchShopsRequest>({
      query: ({page}) => ({
        url: shopApiUrls.search,
        params: {
          page: page || 1,
          minProps: 1,
        },
      }),
      merge: (currentCache, newItems) => {
        if (!currentCache.data.length) {
          return newItems;
        }

        const existingIds = new Set(currentCache.data.map(item => item._id));
        const newUniqueItems = newItems.data.filter(
          item => !existingIds.has(item._id),
        );

        return {
          ...newItems,
          data: [...currentCache.data, ...newUniqueItems],
        };
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
    getShopsByRadius: build.query<
      FetchShopsByRadiusResponse,
      FetchShopsByRadiusRequest
    >({
      query: ({page, radius, coordinates}) => ({
        url: shopApiUrls.search,
        params: {
          page: page || 1,
          radius,
          coordinates,
          minProps: 1,
        },
      }),
      merge: (currentCache, newItems) => {
        if (!currentCache.data.length) {
          return newItems;
        }

        const existingIds = new Set(currentCache.data.map(item => item._id));
        const newUniqueItems = newItems.data.filter(
          item => !existingIds.has(item._id),
        );

        return {
          ...newItems,
          data: [...currentCache.data, ...newUniqueItems],
        };
      },
      forceRefetch({currentArg, previousArg}) {
        return currentArg?.page !== previousArg?.page;
      },
      async onQueryStarted(data, {queryFulfilled}) {
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

export const {useSearchShopsQuery, useGetShopsByRadiusQuery, useGetShopQuery} =
  shopApi;
