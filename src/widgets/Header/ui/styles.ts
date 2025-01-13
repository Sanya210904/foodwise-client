import {fonts} from '@src/app/styles/fonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    rowGap: 12,
  },
  title: {
    fontSize: 28,
    fontFamily: fonts[700],
    maxWidth: '60%',
  },
  centerTitle: {
    textAlign: 'center',
    flex: 1,
  },
  buttonContainer: {
    maxWidth: '40%',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
});
