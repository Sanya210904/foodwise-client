import {baseApi} from '@src/shared/config/api/baseApi';
import {productConstants} from '../model/constants/productConstants';
import {
  FetchProductsRequest,
  FetchProductsResponse,
} from '../model/types/FetchProducts';

export const shopApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getProducts: build.query<FetchProductsResponse, FetchProductsRequest>({
      query: ({shopId, page}) => ({
        url: productConstants.shopProducts,
        params: {
          page: page || 1,
          shopId,
        },
      }),
      serializeQueryArgs: ({endpointName, queryArgs}) => {
        return {endpointName, shopId: queryArgs.shopId};
      },
      merge: (currentCache, newItems, {arg}) => {
        if (arg.page === 1) {
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
          console.error('Error fetching products:', e);
        }
      },
    }),
  }),
});

export const {useGetProductsQuery} = shopApi;
