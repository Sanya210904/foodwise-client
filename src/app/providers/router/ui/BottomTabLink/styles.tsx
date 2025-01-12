import {colors} from '@src/app/styles/colors';
import {fonts} from '@src/app/styles/fonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  activeLightButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    columnGap: 12,
    height: 60,
    borderWidth: 4,
    borderRadius: 21,
    borderColor: colors.brandPrimaryFrom,
  },
  inActiveButton: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBlock: {
    width: 40,
    paddingLeft: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'right',
    paddingRight: 20,
  },
  buttonLightText: {
    fontSize: 18,
    fontFamily: fonts[600],
    alignSelf: 'center',
    color: colors.textPrimary,
  },
});
