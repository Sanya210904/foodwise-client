import {View} from 'react-native';
import React from 'react';
import {ScreenView} from '@src/widgets/ScreenView';
import {UserQrCard} from '@src/widgets/UserClientCard';
import {styles} from './styles';
import {Header} from '@src/widgets/Header';
import {ProfileSection} from '@src/widgets/ProfileSection';

const ProfilePage = () => {
  return (
    <ScreenView>
      <Header title="Profile" />
      <View style={styles.container}>
        <UserQrCard />

        <ProfileSection
          title="Your orders"
          items={[
            {
              label: 'Active',
              onPress: () => undefined,
            },
            {
              label: 'History',
              onPress: () => undefined,
            },
          ]}
        />

        <ProfileSection
          title="Settings"
          items={[
            {
              label: 'Personal information',
              onPress: () => undefined,
            },
            {
              label: 'Language',
              onPress: () => undefined,
            },
          ]}
        />
      </View>
    </ScreenView>
  );
};

export default ProfilePage;
