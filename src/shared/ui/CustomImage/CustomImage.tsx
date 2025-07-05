import {API_MAIN_IMAGE_URL} from '@env';
import React, {FC, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  DimensionValue,
  ImageStyle,
  View,
  ViewStyle,
} from 'react-native';
import FastImage, {FastImageProps} from 'react-native-fast-image';
import {styles} from './styles';

type CustomImageProps = Omit<FastImageProps, 'source'> & {
  imageId: string;
  style?: ImageStyle;
  containerStyle?: ViewStyle;
  width?: DimensionValue;
  height?: DimensionValue;
  skeletonColor?: string;
  shimmerColor?: string;
};

const CustomImage: FC<CustomImageProps> = props => {
  const {
    imageId,
    style,
    containerStyle,
    width = '100%',
    height = 100,
    ...fastImageProps
  } = props;

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    handleLoadStart();
  }, []);

  const handleLoadStart = () => {
    setIsLoading(true);
  };

  const handleLoadEnd = () => {
    setIsLoading(false);
  };
  return (
    <View style={[{width, height}, containerStyle]}>
      {isLoading && (
        <View style={[{width, height}, styles.loadingwrapper]}>
          <ActivityIndicator size={48} />
        </View>
      )}

      <FastImage
        style={[{width, height}, style, isLoading && styles.hiddenImage]}
        source={{uri: `${API_MAIN_IMAGE_URL}/${imageId}`}}
        onLoadStart={handleLoadStart}
        onLoadEnd={handleLoadEnd}
        {...fastImageProps}
      />
    </View>
  );
};

export default CustomImage;
