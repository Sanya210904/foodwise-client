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
  modalContainer: {
    padding: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: fonts[700],
    marginTop: 12,
    alignSelf: 'flex-start',
  },
  subtitle: {
    fontSize: 20,
    fontFamily: fonts[500],
    marginTop: 12,
    alignSelf: 'flex-start',
  },
  button: {
    marginTop: 12,
    borderRadius: 16,
  },
});
