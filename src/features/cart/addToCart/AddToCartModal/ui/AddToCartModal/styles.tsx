import {colors} from '@src/app/styles/colors';
import {fonts} from '@src/app/styles/fonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  modal: {
    backgroundColor: colors.surfacePrimary,
    borderRadius: 12,
    justifyContent: 'center',
    width: '100%',
  },
  imageBlock: {
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    zIndex: 2,
    borderRadius: '50%',
    top: 12,
    left: 12,
  },
  image: {
    width: '100%',
    aspectRatio: 1 / 1,
    // backgroundColor: 'red',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  priceBlock: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 12,
    backgroundColor: colors.surfacePrimary,
    columnGap: 8,
  },
  price: {
    fontSize: 12,
    textDecorationLine: 'line-through',
    color: colors.textSecondary,
  },
  discountPrice: {
    fontSize: 16,
    fontFamily: fonts[500],
  },

  container: {
    padding: 24,
    rowGap: 24,
  },
  infoBlock: {},
  title: {
    fontSize: 20,
    fontFamily: fonts[700],
  },
  expiration: {
    fontSize: 15,
    fontFamily: fonts[500],
    marginTop: 12,
  },
  amount: {
    fontSize: 15,
    fontFamily: fonts[500],
    color: colors.textLink,
    marginTop: 4,
  },
  footer: {},
  cartStatus: {
    fontSize: 15,
    fontFamily: fonts[500],
    textAlign: 'center',
    marginBottom: 18,
    color: colors.brandSuccess,
  },
});
