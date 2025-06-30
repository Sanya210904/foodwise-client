import React, {useEffect} from 'react';
import {ScreenView} from '@src/widgets/ScreenView';
import {Header} from '@src/widgets/Header';
import {ShopCart} from '@src/widgets/ShopCart';
import {View} from 'react-native';
import {styles} from './styles';
import {useAppDispatch} from '@src/shared/hooks/useAppDispatch';
import {fetchCart} from '@src/entities/cart/api/services/fetchCart';
import {useAppSelector} from '@src/shared/hooks/useAppSelector';

const CartPage = () => {
  const cart = useAppSelector(state => state.cart.cart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (cart) {
      const shopIds = cart.map(item => item.product_props?.length);
      console.log(shopIds);
    }
  }, [cart]);

  useEffect(() => {
    getCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCart = async () => {
    await dispatch(fetchCart());
  };

  if (!cart) {
    return null;
  }

  return (
    <ScreenView>
      <View style={styles.container}>
        <Header title="Cart" />

        <View style={styles.body}>
          {cart.map((shopCart, idx) => (
            <ShopCart
              key={idx}
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
