import { StyleSheet } from 'react-native';
import { colors } from '../../../app/styles/colors';

export const styles = StyleSheet.create({
  card: {
    borderRadius: 14,
    backgroundColor: colors.cardPrimary,
  },
  touchable: {
    borderRadius: 14,
  },
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
});
