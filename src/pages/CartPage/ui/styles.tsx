import {offsets} from '@src/app/styles/offsets';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: offsets.containerOffsetHorizontal,
  },
  tabsBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  body: {
    marginTop: 24,
    rowGap: 24,
  },
});
