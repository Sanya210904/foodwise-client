import React, {FC} from 'react';
import {CartProduct} from '@src/entities/cart';
import {styles} from './styles';
import DeleteButton from '../DeleteButton/DeleteButton';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import {useRemoveFromCartMutation} from '@src/entities/cart/api/cartApi';
import {View} from 'react-native';

type SwipeToRemoveCartProductProps = {
  id: string;
  title: string;
  expDate: string;
  discountPrice: number;
  price: number;
  image: string;
  quantity: number;
};

const END_POSITION = -54;

const SwipeToRemoveCartProduct: FC<SwipeToRemoveCartProductProps> = props => {
  const {...productProps} = props;
  const swipeXPosition = useSharedValue(0);
  const isSwiped = useSharedValue(false);

  const [removeFromCart] = useRemoveFromCartMutation();

  const panGesture = Gesture.Pan()
    .activeOffsetX([-10, 10])
    .onUpdate(e => {
      if (e.translationX < 0) {
        swipeXPosition.value = e.translationX;
      }
    })
    .onEnd(() => {
      const toShowButton = swipeXPosition.value < END_POSITION / 2;

      if (toShowButton && !isSwiped.value) {
        swipeXPosition.value = withTiming(END_POSITION, {}, () => {
          isSwiped.value = true;
        });
      } else {
        swipeXPosition.value = withTiming(0);
        isSwiped.value = false;
      }
    });

  const animatedOrderItemStyle = useAnimatedStyle(() => ({
    transform: [{translateX: swipeXPosition.value}],
  }));

  const handleDeleteProduct = () => {
    removeFromCart({id: props.id});
  };

  return (
    <View style={styles.container}>
      <DeleteButton onDelete={handleDeleteProduct} />
      <GestureDetector gesture={panGesture}>
        <Animated.View style={[animatedOrderItemStyle, styles.wrapper]}>
          <CartProduct {...productProps} />
        </Animated.View>
      </GestureDetector>
    </View>
  );
};

export default SwipeToRemoveCartProduct;
