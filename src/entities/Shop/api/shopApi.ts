import {baseApi} from '@src/shared/config/api/baseApi';
import {shopApiUrls} from '../model/constants/shopConstants';
import {FetchShopsRequest, FetchShopsResponse} from '../model/types/FetchShops';

export const shopApi = baseApi.injectEndpoints({
  endpoints: build => ({
    searchShops: build.query<FetchShopsResponse, FetchShopsRequest>({
      query: ({page}) => ({
        url: shopApiUrls.search,
        params: {
          page: page || 1,
        },
      }),
      serializeQueryArgs: ({endpointName}) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        currentCache.data = [...currentCache.data, ...newItems.data];
      },
      forceRefetch({currentArg, previousArg}) {
        return currentArg?.page !== previousArg?.page;
      },
      async onQueryStarted(_, {queryFulfilled}) {
        try {
          const result = await queryFulfilled;
          console.log(result);
          console.log(result);
        } catch (e) {
          console.error('Error fetching shops:', e);
        }
      },
    }),
  }),
});

export const {useSearchShopsQuery} = shopApi;
