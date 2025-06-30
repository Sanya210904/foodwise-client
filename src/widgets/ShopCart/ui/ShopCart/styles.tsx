import {colors} from '@src/app/styles/colors';
import {fonts} from '@src/app/styles/fonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: fonts[600],
  },
  productWrapper: {
    marginTop: 16,
    marginBottom: 24,
  },
  productBlock: {
    // rowGap: 8,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: colors.borderPrimary,
    marginVertical: 6,
  },
  buttonIcon: {
    width: 24,
    height: 24,
  },
});
