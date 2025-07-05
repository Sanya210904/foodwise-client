import {colors} from '@src/app/styles/colors';
import {fonts} from '@src/app/styles/fonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingVertical: 8,
    alignItems: 'center',
    backgroundColor: colors.surfacePrimary,
  },
  block: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 8,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 8,
    backgroundColor: 'red',
  },
  infoBlock: {
    rowGap: 4,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts[500],
  },
  orderId: {
    fontSize: 13,
    color: colors.textSecondary,
    fontFamily: fonts[500],
  },
  subtitle: {
    color: colors.textSecondary,
    fontFamily: fonts[300],
  },
  priceBlock: {
    alignItems: 'flex-end',
    marginRight: 4,
  },
  price: {
    textDecorationLine: 'line-through',
    color: colors.textSecondary,
  },
  discountPrice: {
    fontSize: 16,
    fontFamily: fonts[500],
  },
});
