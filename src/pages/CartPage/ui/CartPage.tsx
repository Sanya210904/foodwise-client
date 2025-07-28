import React from 'react';
import {ScreenView} from '@src/widgets/ScreenView';
import {Header} from '@src/widgets/Header';
import {View} from 'react-native';
import {useGetCartQuery} from '@src/entities/cart/api/cartApi';
import {styles} from './styles';
import {ShopCartList} from '@src/features/cart/list';

const CartPage = () => {
  const {data: cart} = useGetCartQuery(undefined);

  if (!cart?.data) {
    return null;
  }

  return (
    <ScreenView>
      <View style={styles.container}>
        <Header title="Cart" />

        <ShopCartList />
      </View>
    </ScreenView>
  );
};

export default CartPage;
