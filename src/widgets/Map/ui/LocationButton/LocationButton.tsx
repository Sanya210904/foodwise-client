import {StyleProp, ViewStyle} from 'react-native';
import React, {FC} from 'react';
import CustomButton, {
  ButtonType,
} from '@src/shared/ui/CustomButton/CustomButton';
import LocationIcon from '@src/shared/assets/icons/location-icon.svg';
import {styles} from './styles';

type LocationButtonProps = {
  style?: StyleProp<ViewStyle>;
  onPress: (latitude: number, longitude: number) => void;
};

const LocationButton: FC<LocationButtonProps> = props => {
  const {style, onPress} = props;

  return (
    <CustomButton
      style={[style, styles.button]}
      onPress={() => onPress(30.728858997585885, 46.45269406285344)}
      type={ButtonType.WHITE}
      Icon={LocationIcon}
      width={48}
      height={48}
      iconProps={{width: '60%', height: '60%'}}
    />
  );
};

export default LocationButton;
