import React from 'react';
import {ScreenView} from '@src/widgets/ScreenView';
import {Header} from '@src/widgets/Header';
import {ShopCart} from '@src/widgets/ShopCart';
import {View} from 'react-native';
import {useGetCartQuery} from '@src/entities/cart/api/cartApi';
import {styles} from './styles';

const CartPage = () => {
  const {data: cart} = useGetCartQuery(undefined);

  if (!cart?.data) {
    return null;
  }

  return (
    <ScreenView>
      <View style={styles.container}>
        <Header title="Cart" />

        <View style={styles.body}>
          {cart.data.map((shopCart, idx) => (
            <ShopCart
              key={idx}
              shopId={shopCart.shop._id}
              shopName={shopCart.shop.name}
              totalPrice={Number(shopCart.overall_price.$numberDecimal)}
              products={shopCart.product_props}
            />
          ))}
        </View>
      </View>
    </ScreenView>
  );
};

export default CartPage;
