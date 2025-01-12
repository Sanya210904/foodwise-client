import {offsets} from '@src/app/styles/offsets';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  emptyNavigation: {
    display: 'none',
  },
  navigation: {
    zIndex: 100,
    height: 100,
    paddingHorizontal: offsets.containerOffsetHorizontal,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#A9AAAC',
    shadowOpacity: 0.25,
    shadowRadius: 21,
    shadowOffset: {width: 0, height: -2},
    elevation: 1,
  },
});
