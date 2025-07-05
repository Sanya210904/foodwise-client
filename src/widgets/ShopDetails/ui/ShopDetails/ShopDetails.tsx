import {API_MAIN_IMAGE_URL} from '@env';
import {useGetShopQuery} from '@src/entities/shop/api/shopApi';
import React, {FC} from 'react';
import {View, Text, Image, StyleProp, ViewStyle} from 'react-native';
import ClockIcon from '@src/shared/assets/icons/clock-icon.svg';
import GeoIcon from '@src/shared/assets/icons/geolocation-icon.svg';
import PercentageIcon from '@src/shared/assets/icons/percentage-icon.svg';
import {styles} from './styles';
import CustomImage from '@src/shared/ui/CustomImage/CustomImage';

type ShopDetailsProps = {
  shopId: string;
  style?: StyleProp<ViewStyle>;
};

const ShopDetails: FC<ShopDetailsProps> = props => {
  const {shopId, style} = props;
  const {data: shop} = useGetShopQuery({
    shopId,
  });

  if (!shop) {
    return null;
  }

  return (
    <View style={style}>
      {/* <Image
        source={{uri: `${API_MAIN_IMAGE_URL}${shop?.banner}`}}
        style={styles.banner}
      /> */}
      <CustomImage
        imageId={shop.banner}
        width="100%"
        height={283}
        style={styles.banner}
      />
      <View style={styles.block}>
        <View style={styles.header}>
          <Image
            source={{uri: `${API_MAIN_IMAGE_URL}${shop?.logo}`}}
            style={styles.logo}
          />
          <View>
            <Text style={styles.title}>{shop?.name}</Text>
            <View style={styles.headerInfoBlock}>
              <Text style={styles.rating}>{shop?.avrg_score}</Text>
              <View style={styles.headerRow}>
                <ClockIcon />
                <Text style={styles.time}>
                  {shop?.work_hours[0]} - {shop?.work_hours[1]}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <View style={styles.footerRow}>
            <GeoIcon />
            <Text style={styles.address}>{shop?.location.address}</Text>
          </View>

          <View style={styles.footerRow}>
            <PercentageIcon />
            <Text style={styles.description}>{shop?.description}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ShopDetails;
