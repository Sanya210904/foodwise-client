import { FC, ReactNode } from 'react';
import {
  View,
  DimensionValue,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { Shadow, ShadowProps } from 'react-native-shadow-2';
import { styles } from './styles';

type CardProps = {
  children: ReactNode;
  width: DimensionValue;
  height?: DimensionValue;
  padding?: DimensionValue;
  isPressable?: boolean;
  onPress?: () => void;
  cardStyles?: StyleProp<ViewStyle>;
};

const cardShadow = {
  offset: [0, 1],
  startColor: 'rgba(208, 211, 216, 0.35)',
  endColor: 'rgba(208, 211, 216, 0.05)',
  distance: 5,
} as ShadowProps;

const Card: FC<CardProps> = props => {
  const {
    children,
    width,
    height,
    padding,
    isPressable = false,
    onPress,
    cardStyles,
  } = props;

  if (isPressable) {
    return (
      <Shadow
        style={{
          width,
          height,
        }}
        {...cardShadow}>
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={onPress}
          style={styles.touchable}>
          <View style={[{ width, height, padding }, styles.card, cardStyles]}>
            <View>{children}</View>
          </View>
        </TouchableOpacity>
      </Shadow>
    );
  }

  return (
    <Shadow
      style={{
        width,
        height,
      }}
      {...cardShadow}>
      <View style={[{ width, height, padding }, styles.card, cardStyles]}>
        {children}
      </View>
    </Shadow>
  );
};

export default Card;
