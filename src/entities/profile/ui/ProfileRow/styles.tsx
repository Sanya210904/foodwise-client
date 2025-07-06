import { fonts } from '@src/app/styles/fonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
