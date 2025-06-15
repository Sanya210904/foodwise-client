import {fonts} from '@src/app/styles/fonts';
import {offsets} from '@src/app/styles/offsets';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    rowGap: 12,
    paddingHorizontal: offsets.containerOffsetHorizontal,
    paddingTop: offsets.containerOffsetTop,
  },
  title: {
    fontSize: 28,
    fontFamily: fonts[700],
    maxWidth: '60%',
  },
  centerTitle: {
    textAlign: 'center',
    flex: 1,
    maxWidth: '100%',
  },
  buttonContainer: {
    maxWidth: '40%',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
});
