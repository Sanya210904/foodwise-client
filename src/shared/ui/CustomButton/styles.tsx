import {StyleSheet} from 'react-native';
import {colors} from '../../../app/styles/colors';
import {fonts} from '../../../app/styles/fonts';

export const styles = StyleSheet.create({
  button: {
    // borderRadius: 21,
  },

  primary: {
    borderRadius: 21,
  },
  secondary: {
    backgroundColor: colors.buttonSecondary,
    borderRadius: 21,
  },
  grey: {
    backgroundColor: colors.buttonGrey,
    borderRadius: 7,
  },
  white: {
    backgroundColor: colors.buttonWhite,
    borderRadius: 7,
  },
  clear: {
    backgroundColor: 'none',
  },
  link: {
    backgroundColor: 'none',
  },
  disabled: {
    backgroundColor: colors.buttonDisabled,
    borderRadius: 21,
  },

  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 8,
  },

  text: {
    fontSize: 20,
    lineHeight: 22,
    color: colors.textInverted,
    fontFamily: fonts[600],
  },
  darkText: {
    fontSize: 20,
    lineHeight: 22,
    color: colors.textPrimary,
    fontFamily: fonts[600],
  },
  linkButtonText: {
    fontSize: 20,
    lineHeight: 22,
    color: colors.textLink,
    fontFamily: fonts[600],
  },
});
