import React, {FC} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {MarkerView} from '@rnmapbox/maps';
import CafeIcon from '@src/shared/assets/icons/cafe-icon.svg';
import {styles} from './styles';
import {API_MAIN_IMAGE_URL} from '@env';

type MarkerProps = {
  latitude: number;
  longitude: number;
  id: string;
  onPress: (id: string) => void;
  isSelected?: boolean;
  logo: string;
};

const ShopMarker: FC<MarkerProps> = props => {
  const {latitude, longitude, id, onPress, isSelected, logo} = props;

  return (
    <MarkerView coordinate={[longitude, latitude]}>
      <TouchableOpacity
        style={[styles.markerView, isSelected && styles.selectedMarker]}
        onPress={() => onPress(id)}
        activeOpacity={1}>
        {isSelected ? (
          <Image
            source={{uri: `${API_MAIN_IMAGE_URL}${logo}`}}
            style={styles.markerLogo}
          />
        ) : (
          <CafeIcon width="70%" height="70%" />
        )}
      </TouchableOpacity>
    </MarkerView>
  );
};

export default ShopMarker;
