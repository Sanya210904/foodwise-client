import {colors} from '@src/app/styles/colors';
import {offsets} from '@src/app/styles/offsets';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.surfacePrimary,
    flex: 1,
  },
  backButton: {
    position: 'absolute',
    top: 57,
    left: offsets.containerOffsetHorizontal,
    borderRadius: '50%',
    zIndex: 10,
  },
  list: {
    marginTop: 24,
    paddingHorizontal: offsets.containerOffsetHorizontal,
    flex: 1,
  },
});
