import {colors} from '@src/app/styles/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    width: 24,
    height: 24,
    borderRadius: '50%',
    backgroundColor: colors.surfacePrimary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 18,
    height: 18,
    backgroundColor: colors.textLink,
    borderRadius: '50%',
  },
});
