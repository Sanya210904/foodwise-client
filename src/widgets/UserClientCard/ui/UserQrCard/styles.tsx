import {colors} from '@src/app/styles/colors';
import {fonts} from '@src/app/styles/fonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 24,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  infoBlock: {
    flexDirection: 'column',
    rowGap: 12,
  },
  title: {
    fontSize: 22,
    fontFamily: fonts[600],
  },
  subtitle: {
    fontSize: 18,
    fontFamily: fonts[500],
    color: colors.textLink,
  },
  qrImage: {
    // width: 80,
    // height: 80,
  },
});
