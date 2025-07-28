import {colors} from '@src/app/styles/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  markerView: {
    backgroundColor: colors.surfacePrimary,
    width: 35,
    height: 35,
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedMarker: {
    width: 60,
    height: 60,
  },
  markerLogo: {
    width: '85%',
    height: '85%',
    borderRadius: '50%',
  },
});
