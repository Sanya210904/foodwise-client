import {offsets} from '@src/app/styles/offsets';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingTop: offsets.containerOffsetTop,
    paddingHorizontal: offsets.containerOffsetHorizontal,
    paddingBottom: offsets.containerOffsetBottom,
  },
  searchContainer: {
    marginTop: 12,
  },
});
