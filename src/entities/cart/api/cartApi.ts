import {baseApi} from '@src/shared/config/api/baseApi';
import {FetchCartResponse} from '../model/types/FetchCart';
import {cartConstants} from '../model/constants/cartConstants';
import {FetchRemoveProductFromCartRequest} from '../model/types/FetchRemoveProductFromCart';
import {
  FetchAddToCartRequest,
  FetchAddToCartResponse,
} from '../model/types/FetchAddToCart';
import {
  FetchBuyShopCartRequest,
  FetchBuyShopCartResponse,
} from '../model/types/FetchBuyShopCart';
import Toast from 'react-native-toast-message';

export const cartApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getCart: build.query<FetchCartResponse, undefined>({
      query: () => ({
        url: cartConstants.getCart,
        method: 'GET',
      }),
      providesTags: ['Cart'],
      async onQueryStarted(_, {queryFulfilled}) {
        try {
          await queryFulfilled;
        } catch (error: any) {
          console.error(error?.error?.data?.error?.message);
        }
      },
    }),

    addToCart: build.mutation<FetchAddToCartResponse, FetchAddToCartRequest>({
      query: body => ({
        url: cartConstants.addToCart,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Cart'],
      async onQueryStarted(_, {queryFulfilled}) {
        try {
          await queryFulfilled;
        } catch (error: any) {
          console.error(error?.error?.data?.error?.message);
        }
      },
    }),

    removeFromCart: build.mutation<
      undefined,
      FetchRemoveProductFromCartRequest
    >({
      query: ({id}) => ({
        url: `${cartConstants.removeFromCart}/${id}`,
        method: 'DELETE',
      }),

      async onQueryStarted({id}, {queryFulfilled, dispatch}) {
        const patchResult = dispatch(
          cartApi.util.updateQueryData('getCart', undefined, draft => {
            const shopCarts = draft.data;
            if (!shopCarts) return;

            for (let i = 0; i < shopCarts.length; i++) {
              const shopCart = shopCarts[i];

              const foundProductIndex = shopCart.product_props.findIndex(
                product => product.basket_item_id === id,
              );

              if (foundProductIndex !== -1) {
                if (shopCart.product_props.length === 1) {
                  shopCarts.splice(i, 1);
                  return;
                }

                shopCart.product_props.splice(foundProductIndex, 1);

                console.log(shopCart.product_props);
                const overallPrice = shopCart.product_props.reduce(
                  (sum, product) =>
                    (sum +=
                      Number(product.discount_price.$numberDecimal) *
                      product.quantity),
                  0,
                );
                shopCart.overall_price.$numberDecimal = overallPrice.toFixed(2);

                return;
              }
            }
          }),
        );

        try {
          await queryFulfilled;
        } catch (error: any) {
          patchResult.undo();
          console.error(error?.error?.data?.error?.message);
        }
      },
    }),

    buyShopCart: build.mutation<
      FetchBuyShopCartResponse,
      FetchBuyShopCartRequest
    >({
      query: data => ({
        url: cartConstants.buyShopCart,
        method: 'POST',
        body: data,
      }),

      invalidatesTags: ['Cart'],

      async onQueryStarted(data, {queryFulfilled}) {
        try {
          await queryFulfilled;
          Toast.show({
            type: 'success',
            text1: 'Your order has been successfully placed!',
            text2: 'Wait for shop to confirm your order',
          });
        } catch (error: any) {
          console.error(error?.error?.data?.error?.message);
        }
      },
    }),
  }),
});

export const {
  useGetCartQuery,
  useAddToCartMutation,
  useRemoveFromCartMutation,
  useBuyShopCartMutation,
} = cartApi;
