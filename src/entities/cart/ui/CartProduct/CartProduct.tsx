import {View, Text, Image} from 'react-native';
import React, {FC} from 'react';
import {styles} from './styles';
import {API_MAIN_IMAGE_URL} from '@env';
import {getFormattedDate} from '@src/shared/helpers/getFormattedDate';

type CartProductProps = {
  title: string;
  expDate: string;
  discountPrice: number;
  price: number;
  image: string;
  quantity: number;
};

const CartProduct: FC<CartProductProps> = props => {
  const {title, expDate, discountPrice, price, image, quantity} = props;

  return (
    <View style={styles.wrapper}>
      <View style={styles.block}>
        <Image
          style={styles.image}
          source={{uri: `${API_MAIN_IMAGE_URL}${image}`}}
        />
        <View style={styles.infoBlock}>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
            {title} ({quantity})
          </Text>
          <Text style={styles.subtitle}>Exp: {getFormattedDate(expDate)}</Text>
        </View>
      </View>

      <View style={styles.priceBlock}>
        <Text style={styles.price}>${quantity * price}</Text>
        <Text style={styles.discountPrice}>${quantity * discountPrice}</Text>
      </View>
    </View>
  );
};

export default CartProduct;
