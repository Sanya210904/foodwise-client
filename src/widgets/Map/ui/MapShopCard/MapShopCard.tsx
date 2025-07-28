import {
  View,
  Text,
  ViewStyle,
  StyleProp,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {FC} from 'react';
import Card from '@src/shared/ui/Card/Card';
import {useAppNavigation} from '@src/shared/hooks/useAppNavigation';
import {RouteName} from '@src/app/providers/router/model/constants/RouteName';
import {styles} from './styles';
import CloseIcon from '@src/shared/assets/icons/close-icon.svg';
import {API_MAIN_IMAGE_URL} from '@env';
import {Location} from '@src/shared/types/Location';
import {getDistanceBetweenPoints} from '@src/shared/helpers/getDistanceBetweenPoints';
import {getFormattedDistanceText} from '@src/shared/helpers/getFormattedDistanceText';

type MapShopCardProps = {
  isVisible?: boolean;
  style?: StyleProp<ViewStyle>;
  onClose: () => void;

  shopInfo?: {
    id: string;
    title: string;
    address: string;
    banner: string;
    location: [number, number];
  };

  userLocation: Location | null;
};

const MapShopCard: FC<MapShopCardProps> = props => {
  const {isVisible = false, style, shopInfo, userLocation, onClose} = props;
  const navigation = useAppNavigation();

  const handleShopCardPress = () => {
    if (!shopInfo) return;

    navigation.navigate(RouteName.SHOP, {
      id: shopInfo.id,
      name: shopInfo.title,
    });
  };

  if (!isVisible || !shopInfo) {
    return null;
  }

  return (
    <Card
      cardStyles={[styles.block, style]}
      padding={8}
      isPressable
      onPress={handleShopCardPress}>
      <View style={styles.imageBlock}>
        <TouchableOpacity
          style={styles.closeButton}
          activeOpacity={0.75}
          onPress={onClose}>
          <CloseIcon width="80%" height="80%" />
        </TouchableOpacity>
        <Image
          style={styles.image}
          source={{uri: `${API_MAIN_IMAGE_URL}${shopInfo.banner}`}}
        />
      </View>
      <View style={styles.infoBlock}>
        <Text style={styles.title}>{shopInfo.title}</Text>
        <View style={styles.row}>
          <Text style={styles.subtitle}>{shopInfo.address}</Text>
          {userLocation !== null && (
            <Text style={styles.distance}>
              {getFormattedDistanceText(
                getDistanceBetweenPoints(userLocation, {
                  longitude: shopInfo.location[1],
                  latitude: shopInfo.location[0],
                }),
              )}{' '}
              away
            </Text>
          )}
        </View>
      </View>
    </Card>
  );
};

export default MapShopCard;
