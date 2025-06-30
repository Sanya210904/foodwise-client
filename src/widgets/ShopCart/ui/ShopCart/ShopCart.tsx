import Card from '@src/shared/ui/Card/Card';
import React, {FC} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import CustomButton from '@src/shared/ui/CustomButton/CustomButton';
import {CartProduct} from '@src/entities/cart';
import ExpandIcon from '@src/shared/assets/icons/expand-icon.svg';
import Animated from 'react-native-reanimated';
import {styles} from './styles';
import {ProductProposition} from '@src/entities/product/model/types/Product';
import {useAnimateExpandCard} from '../../model/hooks/useAnimateExpandCard';

type ShopCartProps = {
  shopName: string;
  totalPrice: number;
  products: ProductProposition[];
};

const ShopCart: FC<ShopCartProps> = props => {
  const {shopName, totalPrice, products} = props;

  const {handleChangeExpand, animatedIconStyle, animatedContentStyle} =
    useAnimateExpandCard();

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
            <View key={idx} style={styles.productBlock}>
              <CartProduct
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

        <CustomButton
          onPress={() => undefined}
          title={`Pay $${totalPrice}`}
          height={54}
        />
      </Animated.View>
    </Card>
  );
};

export default ShopCart;
