import React, {FC} from 'react';
import {FlashList} from '@shopify/flash-list';
import {ShopCart} from '@src/widgets/ShopCart';
import {useGetCartQuery} from '@src/entities/cart/api/cartApi';
import {StyleProp, View, ViewStyle} from 'react-native';
import {styles} from './styles';

type ShopCartListProps = {
  style?: StyleProp<ViewStyle>;
};

const ShopCartList: FC<ShopCartListProps> = props => {
  const {style} = props;
  const {data: cart} = useGetCartQuery(undefined);

  if (!cart?.data) {
    return null;
  }

  return (
    <FlashList
      data={cart.data}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      style={style}
      renderItem={({item, index}) => {
        return (
          <ShopCart
            key={index}
            shopId={item.shop._id}
            shopName={item.shop.name}
            totalPrice={Number(item.overall_price.$numberDecimal)}
            products={item.product_props}
          />
        );
      }}
    />
  );
};

export default ShopCartList;
