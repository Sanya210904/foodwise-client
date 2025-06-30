import {colors} from '@src/app/styles/colors';
import {fonts} from '@src/app/styles/fonts';
import {offsets} from '@src/app/styles/offsets';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    backgroundColor: colors.surfacePrimary,
    paddingHorizontal: offsets.containerOffsetHorizontal,

    position: 'absolute',
    zIndex: 10,

    flexDirection: 'row',

    shadowColor: '#D0D3D8',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 5,
  },
  headerTitle: {
    marginLeft: 44,
    fontSize: 20,
    fontFamily: fonts[600],
  },
  backButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: '50%',
    position: 'absolute',
    marginLeft: offsets.containerOffsetHorizontal,
    zIndex: 11,
  },
  container: {
    paddingVertical: 12,
  },
});
