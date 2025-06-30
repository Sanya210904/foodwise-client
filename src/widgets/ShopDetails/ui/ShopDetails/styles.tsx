import {fonts} from '@src/app/styles/fonts';
import {offsets} from '@src/app/styles/offsets';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  banner: {
    minWidth: '100%',
    height: 283,
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 12,
  },
  block: {
    paddingHorizontal: offsets.containerOffsetHorizontal,
    marginTop: 18,
  },
  header: {
    flexDirection: 'row',
    columnGap: 12,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: fonts[700],
  },

  headerInfoBlock: {
    marginTop: 4,
    flexDirection: 'row',
    columnGap: 12,
    alignItems: 'center',
  },
  rating: {
    fontSize: 15,
    fontFamily: fonts[600],
  },
  time: {
    fontSize: 15,
    fontFamily: fonts[600],
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 6,
  },

  footer: {
    marginTop: 24,
    rowGap: 8,
  },
  footerRow: {
    flexDirection: 'row',
    columnGap: 6,
    alignItems: 'center',
  },
  address: {
    fontSize: 15,
    fontFamily: fonts[500],
  },
  description: {
    fontSize: 15,
    fontFamily: fonts[500],
  },
});
