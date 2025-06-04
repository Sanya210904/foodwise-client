import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ScrollView,
  Platform,
} from 'react-native';
import React, {FC, ReactNode} from 'react';
import {styles} from './styles';

type KeyboardAvoidingWrapperProps = {
  children: ReactNode;
};

const KeyboardAvoidingWrapper: FC<KeyboardAvoidingWrapperProps> = props => {
  const {children} = props;

  return (
    <KeyboardAvoidingView
      style={styles.wrapper}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled">
          {children}
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidingWrapper;
