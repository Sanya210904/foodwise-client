import {View, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {useAppNavigation} from '@src/shared/hooks/useAppNavigation';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from './styles';
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import ArrowBack from '@src/shared/assets/icons/arrow-left-icon.svg';
import {HEADER_HEIGHT} from '../../model/constants/listSizes';

const AnimatedBackButton = Animated.createAnimatedComponent(TouchableOpacity);

type AnimatedHeaderListProps = {
  listScrollY: SharedValue<number>;
  shopName: string;
};

const AnimatedHeaderList: FC<AnimatedHeaderListProps> = props => {
  const {listScrollY, shopName} = props;

  const navigation = useAppNavigation();
  const {top} = useSafeAreaInsets();

  const animatedHeaderStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      listScrollY.value,
      [0, 50, HEADER_HEIGHT],
      [0, 0.3, 1],
      Extrapolation.CLAMP,
    );

    return {opacity};
  });

  const animatedBackButton = useAnimatedStyle(() => {
    const size = interpolate(
      listScrollY.value,
      [0, HEADER_HEIGHT],
      [48, 36],
      Extrapolation.CLAMP,
    );

    const top = interpolate(
      listScrollY.value,
      [0, HEADER_HEIGHT],
      [10, 3],
      Extrapolation.CLAMP,
    );

    return {width: size, height: size, top};
  });

  const animatedHeaderText = useAnimatedStyle(() => {
    const opacity = interpolate(
      listScrollY.value,
      [HEADER_HEIGHT - 40, HEADER_HEIGHT],
      [0, 1],
      Extrapolation.CLAMP,
    );

    return {opacity};
  });

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <AnimatedBackButton
        style={[styles.backButton, animatedBackButton, {marginTop: top}]}
        onPress={handleGoBack}>
        <ArrowBack width={'50%'} height={'50%'} />
      </AnimatedBackButton>

      <Animated.View
        style={[styles.header, {paddingTop: top}, animatedHeaderStyle]}>
        <View style={styles.container}>
          <Animated.Text style={[styles.headerTitle, animatedHeaderText]}>
            {shopName}
          </Animated.Text>
        </View>
      </Animated.View>
    </>
  );
};

export default AnimatedHeaderList;
