import {colors} from '@src/app/styles/colors';
import {fonts} from '@src/app/styles/fonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  imageBlock: {
    position: 'relative',
  },
  image: {
    width: '100%',
    aspectRatio: 10 / 9,
    // backgroundColor: 'red',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  discountBlock: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: colors.surfacePrimary,
    padding: 4,
    borderRadius: 4,
  },
  discountText: {
    fontSize: 18,
    fontFamily: fonts[500],
  },
  infoBlock: {
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts[600],
  },
  footer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  units: {
    fontSize: 16,
    fontFamily: fonts[500],
  },
  price: {
    fontSize: 16,
    fontFamily: fonts[500],
  },
});
