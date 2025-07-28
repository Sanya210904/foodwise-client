import {Map} from '@src/widgets/Map';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {useAppNavigation} from '@src/shared/hooks/useAppNavigation';
import ArrowBack from '@src/shared/assets/icons/arrow-left-icon.svg';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const MapPage = () => {
  const {top} = useSafeAreaInsets();
  const navigation = useAppNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.page}>
      <TouchableOpacity
        style={[styles.backButton, {marginTop: top}]}
        onPress={handleGoBack}>
        <ArrowBack width={'50%'} height={'50%'} />
      </TouchableOpacity>

      <Map />
    </View>
  );
};

export default MapPage;
