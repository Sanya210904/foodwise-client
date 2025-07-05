import Card from '@src/shared/ui/Card/Card';
import React, {FC} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import ExpandIcon from '@src/shared/assets/icons/expand-icon.svg';
import Animated from 'react-native-reanimated';
import {styles} from './styles';
import {
  ProductProposition,
  ShortProductProposition,
} from '@src/entities/product/model/types/Product';
import {useAnimateExpandCard} from '../../model/hooks/useAnimateExpandCard';
import {SwipeToRemoveCartProduct} from '@src/features/cart/removeFromCart';
import {BuyShopCartButton} from '@src/features/cart/buyShopCart';

type ShopCartProps = {
  shopName: string;
  totalPrice: number;
  products: ProductProposition[];
  shopId: string;
};

const ShopCart: FC<ShopCartProps> = props => {
  const {shopName, totalPrice, products, shopId} = props;

  const {handleChangeExpand, animatedIconStyle, animatedContentStyle} =
    useAnimateExpandCard();

  const productPropositions = products.map(product => {
    const productProposition: ShortProductProposition = {
      product_prop_id: product._id,
      quantity: product.quantity,
    };

    return productProposition;
  });

  return (
    <Card padding={16}>
      <TouchableWithoutFeedback onPress={handleChangeExpand}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>{shopName}</Text>
          <Animated.View style={animatedIconStyle}>
            <ExpandIcon style={styles.buttonIcon} width={24} height={24} />
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>

      <Animated.View style={animatedContentStyle}>
        <View style={styles.productWrapper}>
          {products.map((product, idx) => (
            <View key={product._id} style={styles.productBlock}>
              <SwipeToRemoveCartProduct
                id={product.basket_item_id}
                title={product.title}
                price={Number(product.price.$numberDecimal)}
                discountPrice={Number(product.discount_price.$numberDecimal)}
                expDate={product.expiration_date}
                image={product.image}
                quantity={product.quantity}
              />
              {idx !== products.length - 1 && <View style={styles.divider} />}
            </View>
          ))}
        </View>

        <BuyShopCartButton
          shopId={shopId}
          totalPrice={totalPrice}
          products={productPropositions}
        />
      </Animated.View>
    </Card>
  );
};

export default ShopCart;
