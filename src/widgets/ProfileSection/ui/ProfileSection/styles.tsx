import {fonts} from '@src/app/styles/fonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontFamily: fonts[700],
  },
  block: {
    rowGap: 8,
  },
  divider: {
    height: 1,
    backgroundColor: '#EBEBEB',
  },
  row: {
    paddingVertical: 18,
    paddingHorizontal: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  label: {
    fontSize: 18,
    fontFamily: fonts[500],
  },
});
