import React from 'react';
import {View} from 'react-native';
import {ScreenView} from '@src/widgets/ScreenView';
import {Header} from '@src/widgets/Header';
import {styles} from './styles';
import CustomButton, {
  ButtonType,
} from '@src/shared/ui/CustomButton/CustomButton';
import MapIcon from '@src/shared/assets/icons/map-icon.svg';
import Input from '@src/shared/ui/Input/Input';


const HomePage = () => {
  return (
    <ScreenView>
      <View style={styles.container}>
        <Header
          title="Nearby places"
          HelperButton={
            <CustomButton
              onPress={() => undefined}
              width={70}
              height={43}
              type={ButtonType.LINK}
              title="Map"
              Icon={MapIcon}
            />
          }
        />

        <View style={styles.searchContainer}>
          <Input
            value={''}
            onChangeText={() => undefined}
            placeholder="Search"
          />
        </View>
      </View>
    </ScreenView>
  );
};

export default HomePage;
