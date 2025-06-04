import {ReactNode, forwardRef} from 'react';
import {
  View,
  Text,
  TextInput,
  DimensionValue,
  StyleProp,
  TextStyle,
  TextInputProps,
} from 'react-native';
import {styles} from './styles';
import {colors} from '@src/app/styles/colors';

export interface InputProps extends Omit<TextInputProps, 'style'> {
  label?: string;
  width?: DimensionValue;
  height?: DimensionValue;
  errorText?: string | null;
  suffix?: ReactNode;
  prefix?: ReactNode;
  style?: StyleProp<TextStyle>;
}

const Input = forwardRef<TextInput, InputProps>((props, ref) => {
  const {
    label,
    width = '100%',
    height = 42,
    errorText,
    suffix,
    prefix,
    style,
    ...textInputProps
  } = props;

  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}

      <View style={styles.inputWrapper}>
        {prefix && <View style={styles.prefixBlock}>{prefix}</View>}
        <TextInput
          ref={ref}
          placeholderTextColor={colors.textSecondary}
          style={[
            styles.input,
            errorText ? styles.errorInput : null,
            {width, height},
            style,
          ]}
          {...textInputProps}
        />
        {suffix && <View style={styles.suffixBlock}>{suffix}</View>}
      </View>
      {errorText && <Text style={styles.errorText}>{errorText}</Text>}
    </View>
  );
});

Input.displayName = 'Input';

export default Input;
