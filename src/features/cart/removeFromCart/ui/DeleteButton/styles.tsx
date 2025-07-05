import {colors} from '@src/app/styles/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  block: {
    backgroundColor: colors.brandDanger,
    width: '100%',
    height: 50,
    position: 'absolute',
    right: 0,
    top: 0,
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    height: '100%',
    width: 50,
  },
});
