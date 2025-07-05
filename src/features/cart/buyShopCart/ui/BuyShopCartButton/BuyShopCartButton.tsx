import {useBuyShopCartMutation} from '@src/entities/cart/api/cartApi';
import {FetchBuyShopCartRequest} from '@src/entities/cart/model/types/FetchBuyShopCart';
import {ShortProductProposition} from '@src/entities/product/model/types/Product';
import CustomButton from '@src/shared/ui/CustomButton/CustomButton';
import React, {FC} from 'react';

type BuyShopCartButtonProps = {
  shopId: string;
  products: ShortProductProposition[];
  totalPrice: number;
};

const BuyShopCartButton: FC<BuyShopCartButtonProps> = props => {
  const {totalPrice, shopId, products} = props;
  const [buyShopCart, {isLoading}] = useBuyShopCartMutation();

  const handleBuyShopCart = () => {
    const serverData: FetchBuyShopCartRequest = {
      shop_id: shopId,
      product_props: products,
    };

    buyShopCart(serverData);
  };

  return (
    <CustomButton
      onPress={handleBuyShopCart}
      title={`Pay $${totalPrice}`}
      height={54}
      isLoading={isLoading}
    />
  );
};

export default BuyShopCartButton;
