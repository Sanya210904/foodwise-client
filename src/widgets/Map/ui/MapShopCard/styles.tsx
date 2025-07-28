import {colors} from '@src/app/styles/colors';
import {fonts} from '@src/app/styles/fonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  block: {},
  imageBlock: {
    position: 'relative',
    width: '100%',
    aspectRatio: 21 / 9,
  },
  closeButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    zIndex: 1,
    width: 32,
    height: 32,
    borderRadius: '50%',
    backgroundColor: colors.surfacePrimary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 14,
  },
  infoBlock: {
    marginTop: 8,
  },
  title: {
    fontSize: 18,
    fontFamily: fonts[600],
    color: colors.textPrimary,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: fonts[400],
    color: colors.textSecondary,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  distance: {
    fontSize: 16,
    fontFamily: fonts[500],
    color: colors.textSecondary,
  },
});
