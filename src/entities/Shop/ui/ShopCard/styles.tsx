import {colors} from '@src/app/styles/colors';
import {fonts} from '@src/app/styles/fonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  imageBlock: {
    position: 'relative',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    height: 143,
  },
  image: {
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  priceBlock: {
    position: 'absolute',
    bottom: 14,
    right: 14,
    borderRadius: 11,
    backgroundColor: colors.surfacePrimary,
    paddingVertical: 8,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  price: {
    fontSize: 16,
    fontFamily: fonts[600],
    color: colors.textPrimary,
  },
  infoBlock: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 12,
  },
  logo: {
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: 'yellow',
  },
  header: {
    flex: 1,
    flexDirection: 'column',
    rowGap: 8,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts[600],
    lineHeight: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  distance: {
    fontSize: 14,
    fontFamily: fonts[600],
    lineHeight: 17,
  },
  productAmount: {
    fontSize: 14,
    fontFamily: fonts[600],
    lineHeight: 17,
  },
});
