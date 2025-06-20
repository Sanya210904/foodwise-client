import React, {FC} from 'react';
import {View, Text, Image} from 'react-native';
import Card from '@src/shared/ui/Card/Card';
import {API_MAIN_IMAGE_URL} from '@env';
import {styles} from './styles';

type ShopCardProps = {
  title: string;
  minPrice: string | null;
  distance: number;
  productAmount: number;
  banner: string;
  logo: string;
};

const ShopCard: FC<ShopCardProps> = props => {
  const {title, minPrice, distance, productAmount, banner, logo} = props;

  return (
    <Card width="100%" isPressable>
      <View style={styles.imageBlock}>
        <Image
          source={{uri: `${API_MAIN_IMAGE_URL}${banner}`}}
          style={styles.image}
        />
        <View style={styles.priceBlock}>
          <Text style={styles.price}>from ${minPrice ?? 0}</Text>
        </View>
      </View>
      <View style={styles.infoBlock}>
        <Image
          source={{uri: `${API_MAIN_IMAGE_URL}${logo}`}}
          style={styles.logo}
        />
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.footer}>
            <Text style={styles.distance}>{distance} m away</Text>
            <Text style={styles.productAmount}>
              {productAmount} positions available
            </Text>
          </View>
        </View>
      </View>
    </Card>
  );
};

export default ShopCard;
