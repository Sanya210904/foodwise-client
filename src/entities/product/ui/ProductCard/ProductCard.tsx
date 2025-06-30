import {View, Text, Image, ViewStyle, StyleProp} from 'react-native';
import React, {FC} from 'react';
import Card from '@src/shared/ui/Card/Card';
import {styles} from './styles';
import {API_MAIN_IMAGE_URL} from '@env';
import {CartProduct} from '../../model/types/Product';

type ProductCardProps = {
  id: string;
  title: string;
  amount: number;
  discountPrice: string;
  price: string;
  expDate: string;
  image: string;
  discount: number;
  onPress: (product: CartProduct) => void;
  style?: StyleProp<ViewStyle>;
};

const ProductCard: FC<ProductCardProps> = props => {
  const {
    id,
    title,
    amount,
    discountPrice,
    price,
    expDate,
    image,
    discount,
    onPress,
    style,
  } = props;

  const handleProductPress = () => {
    const product: CartProduct = {
      id,
      title,
      quantity: amount,
      discount,
      discountPrice,
      price,
      image,
      expirationDate: expDate,
    };

    onPress(product);
  };

  return (
    <Card
      width="100%"
      cardStyles={style}
      isPressable
      onPress={handleProductPress}>
      <View style={styles.imageBlock}>
        <Image
          source={{uri: `${API_MAIN_IMAGE_URL}${image}`}}
          style={styles.image}
        />
        <View style={styles.discountBlock}>
          <Text style={styles.discountText}>-{discount}%</Text>
        </View>
      </View>
      <View style={styles.infoBlock}>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          {title}
        </Text>
        <View style={styles.footer}>
          <Text style={styles.units}>{amount} units</Text>
          <Text style={styles.price}>{discountPrice}$</Text>
        </View>
      </View>
    </Card>
  );
};

export default ProductCard;
