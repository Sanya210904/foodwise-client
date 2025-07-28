import {colors} from '@src/app/styles/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  page: {
    flex: 1,
    position: 'relative',
  },
  backButton: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.surfacePrimary,
    borderRadius: '50%',
    position: 'absolute',
    top: 0,
    left: 12,
    zIndex: 1000,
  },
});
