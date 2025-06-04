import {colors} from '@src/app/styles/colors';
import {fonts} from '@src/app/styles/fonts';
import {offsets} from '@src/app/styles/offsets';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: offsets.containerOffsetHorizontal,
  },
  header: {
    marginBottom: 48,
  },
  block: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts[700],
    fontSize: 40,
    lineHeight: 44,
    textAlign: 'center',
  },
  footer: {
    marginTop: 16,
  },
  footerText: {
    textAlign: 'center',
    fontSize: 16,
    color: colors.textSecondary,
    fontFamily: fonts[500],
    alignItems: 'center',
  },
  footerButton: {
    marginTop: 4,
  },
});
