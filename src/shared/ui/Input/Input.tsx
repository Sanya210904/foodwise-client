import {FC} from 'react';
import {
  View,
  Text,
  TextInput,
  DimensionValue,
  StyleProp,
  TextStyle,
} from 'react-native';
import {styles} from './styles';
import {colors} from '../../../app/styles/colors';

type InputProps = {
  label?: string;
  value: string | number;
  onChangeText: (value: string) => void;
  onBlur?: () => void;
  secureTextEntry?: boolean;
  placeholder?: string;
  width?: DimensionValue;
  height?: DimensionValue;
  multiline?: boolean;
  errorText?: string | null;
  style?: StyleProp<TextStyle>;
};

const Input: FC<InputProps> = props => {
  const {
    label,
    value,
    onChangeText,
    width = '100%',
    height = 42,
    placeholder = '',
    onBlur,
    secureTextEntry = false,
    multiline = false,
    errorText,
    style,
    ...otherProps
  } = props;

  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        {...otherProps}
        placeholder={placeholder}
        placeholderTextColor={colors.textSecondary}
        onChangeText={text => onChangeText(text)}
        onBlur={onBlur}
        value={value?.toString()}
        secureTextEntry={secureTextEntry}
        multiline={multiline}
        style={[
          styles.input,
          errorText ? styles.errorInput : null,
          {width, height},
          style,
        ]}
      />
      {errorText && <Text style={styles.errorText}>{errorText}</Text>}
    </View>
  );
};

export default Input;
