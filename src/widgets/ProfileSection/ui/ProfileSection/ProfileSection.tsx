import {View, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import Card from '@src/shared/ui/Card/Card';
import ArrowIcon from '@src/shared/assets/icons/arrow-right-icon.svg';
import {styles} from './styles';

type ProfileBlock = {
  label: string;
  onPress: () => void;
};

type ProfileSectionProps = {
  items?: ProfileBlock[];
  title: string;
};

const ProfileSection: FC<ProfileSectionProps> = props => {
  const {title, items} = props;

  return (
    <View style={styles.block}>
      <Text style={styles.title}>{title}</Text>
      <Card width="100%">
        {items?.map((item, index) => {
          return (
            <View key={index}>
              <TouchableOpacity
                onPress={item.onPress}
                activeOpacity={0.85}
                style={styles.row}>
                <Text style={styles.label}>{item.label}</Text>
                <ArrowIcon />
              </TouchableOpacity>
              {index < items.length - 1 && <View style={styles.divider} />}
            </View>
          );
        })}
      </Card>
    </View>
  );
};

export default ProfileSection;
