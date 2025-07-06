import {colors} from '@src/app/styles/colors';
import {fonts} from '@src/app/styles/fonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  modal: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    right: 0,
    left: 0,
    borderRadius: 30,
    backgroundColor: colors.surfacePrimary,
  },
  container: {
    paddingTop: 32,
    paddingHorizontal: 14,
    paddingBottom: 8,
    flex: 1,
  },
  title: {
    fontFamily: fonts[700],
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 28,
    paddingHorizontal: 16,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    columnGap: 8,
    width: '100%',
  },
  button: {
    flex: 1,
  },
});
