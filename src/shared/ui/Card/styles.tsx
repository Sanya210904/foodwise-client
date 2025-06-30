import {StyleSheet} from 'react-native';
import {colors} from '../../../app/styles/colors';

export const styles = StyleSheet.create({
  card: {
    borderRadius: 14,
    backgroundColor: colors.cardPrimary,
    // width: '100%',
  },
  touchable: {
    borderRadius: 14,
    width: '100%',
  },
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
});
