import {forwardRef} from 'react';
import {TextInput} from 'react-native';
import {Controller} from 'react-hook-form';
import Input from '../Input/Input';
import type {InputProps} from '../Input/Input';

type FormInputProps = Omit<InputProps, 'value' | 'onChangeText' | 'onBlur'> & {
  control: any;
  name: string;
};

const FormInput = forwardRef<TextInput, FormInputProps>((props, ref) => {
  const {name, control, ...inputProps} = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({field: {onChange, onBlur, value}}) => (
        <Input
          ref={ref}
          onChangeText={onChange}
          onBlur={onBlur}
          value={value}
          {...inputProps}
        />
      )}
    />
  );
});

FormInput.displayName = 'FormInput';

export default FormInput;
