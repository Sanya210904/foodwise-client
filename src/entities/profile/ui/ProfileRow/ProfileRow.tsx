import {Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import ArrowIcon from '@src/shared/assets/icons/arrow-right-icon.svg';
import {styles} from './styles';
import {ProfileSettingsRow} from '../../model/types/ProfileRow';

type ProfileRowProps = {
  profile: ProfileSettingsRow;
};

const ProfileRow: FC<ProfileRowProps> = props => {
  const {profile} = props;

  return (
    <TouchableOpacity
      onPress={profile.onPress}
      activeOpacity={0.85}
      style={styles.row}>
      <Text style={styles.label}>{profile.label}</Text>
      {profile.Icon ? <profile.Icon width={24} height={24} /> : <ArrowIcon />}
    </TouchableOpacity>
  );
};

export default ProfileRow;
