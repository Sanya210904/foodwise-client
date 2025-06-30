import {offsets} from '@src/app/styles/offsets';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  header: {
    marginBottom: 16,
  },
  listContainer: {
    paddingBottom: 8,
  },
  itemSeparator: {
    height: 24,
  },
  leftCard: {
    marginRight: 12,
    marginLeft: offsets.containerOffsetHorizontal,
  },
  rightCard: {
    marginLeft: 12,
    marginRight: offsets.containerOffsetHorizontal,
  },
});
