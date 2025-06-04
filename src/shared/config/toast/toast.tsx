import {StyleSheet} from 'react-native';
import {BaseToastProps, ErrorToast} from 'react-native-toast-message';

export const toastConfig = {
  error: (props: BaseToastProps) => (
    <ErrorToast
      {...props}
      text1Style={styles.toastTitle}
      text2Style={styles.toastText}
      text2NumberOfLines={2}
    />
  ),
};

const styles = StyleSheet.create({
  toastTitle: {
    fontSize: 16,
  },
  toastText: {
    fontSize: 13,
  },
});
