import {View, Text} from 'react-native';
import React, {FC} from 'react';
import Card from '@src/shared/ui/Card/Card';
import {styles} from './styles';
import {ProfileRow, ProfileSettingsRow} from '@src/entities/profile';

type ProfileSectionProps = {
  items?: ProfileSettingsRow[];
  title?: string;
};

const ProfileSection: FC<ProfileSectionProps> = props => {
  const {title, items} = props;

  return (
    <View style={styles.block}>
      {title && <Text style={styles.title}>{title}</Text>}
      <Card width="100%">
        {items?.map((item, index) => {
          return (
            <View key={index}>
              <ProfileRow profile={item} />
              {index < items.length - 1 && <View style={styles.divider} />}
            </View>
          );
        })}
      </Card>
    </View>
  );
};

export default ProfileSection;
