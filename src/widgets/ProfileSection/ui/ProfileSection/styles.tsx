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
  
});
