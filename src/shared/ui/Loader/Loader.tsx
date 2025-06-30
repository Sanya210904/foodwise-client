import LottieView from 'lottie-react-native';
import React, {FC} from 'react';
import {DimensionValue, View} from 'react-native';
import {styles} from './styles';

type LoaderProps = {
  size?: DimensionValue;
};

const Loader: FC<LoaderProps> = props => {
  const {size = 220} = props;

  return (
    <View style={styles.wrapper}>
      <LottieView
        source={require('@src/shared/assets/lotties/loaderLottie.json')}
        autoPlay
        loop
        style={{width: size, height: size}}
      />
    </View>
  );
};

export default Loader;
