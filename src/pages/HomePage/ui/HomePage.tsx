import React from 'react';
import {View} from 'react-native';
import {ScreenView} from '@src/widgets/ScreenView';
import {Header} from '@src/widgets/Header';
import {styles} from './styles';
import CustomButton, {
  ButtonType,
} from '@src/shared/ui/CustomButton/CustomButton';
import MapIcon from '@src/shared/assets/icons/map-icon.svg';
import {ShopExplorer} from '@src/widgets/ShopExplorer';
import {useAppNavigation} from '@src/shared/hooks/useAppNavigation';
import {RouteName} from '@src/app/providers/router/model/constants/RouteName';

const HomePage = () => {
  const navigation = useAppNavigation();

  const handleMapPress = () => {
    navigation.navigate(RouteName.MAP);
  };

  return (
    <ScreenView>
      <View style={styles.container}>
        <Header
          title="Nearby places"
          HelperButton={
            <CustomButton
              onPress={handleMapPress}
              width={70}
              height={43}
              type={ButtonType.LINK}
              title="Map"
              Icon={MapIcon}
            />
          }
        />

        <ShopExplorer />
      </View>
    </ScreenView>
  );
};

export default HomePage;
