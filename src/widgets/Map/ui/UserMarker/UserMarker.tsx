import React, {FC} from 'react';
import {MarkerView} from '@rnmapbox/maps';
import {styles} from './styles';
import {Location} from '@src/shared/types/Location';
import {View} from 'react-native';

type UserMarkerProps = {
  location: Location | null;
};

const UserMarker: FC<UserMarkerProps> = props => {
  const {location} = props;

  if (!location) {
    return null;
  }

  return (
    <MarkerView coordinate={[location.longitude, location.latitude]}>
      <View style={styles.wrapper}>
        <View style={styles.circle} />
      </View>
    </MarkerView>
  );
};

export default UserMarker;
