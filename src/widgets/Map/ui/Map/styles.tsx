import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  mapShop: {
    position: 'absolute',
    width: 'auto',
    marginHorizontal: 12,
    marginBottom: 8,
    zIndex: 100,
  },
  zoomControls: {
    position: 'absolute',
    right: 12,
    marginBottom: 16,
    zIndex: 0,
  },
  locationButton: {
    position: 'absolute',
    right: 12,
  },
});
