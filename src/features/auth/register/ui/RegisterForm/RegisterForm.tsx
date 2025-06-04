import React, {useRef, useState} from 'react';
import {TextInput, View} from 'react-native';
import {useRegisterMutation} from '@src/entities/auth/api/authApi';
import {useForm} from 'react-hook-form';
import {RegisterFormValues} from '@src/entities/auth';
import FormInput from '@src/shared/ui/Input/FormInput/FormInput';
import {RegisterFormSchema} from '../../model/types/RegisterFromSchema';
import {zodResolver} from '@hookform/resolvers/zod';
import CustomButton, {
  ButtonType,
} from '@src/shared/ui/CustomButton/CustomButton';
import EyeIcon from '@src/shared/assets/icons/eye-icon.svg';
import ClosedEyeIcon from '@src/shared/assets/icons/closed-eye-icon.svg';
import {styles} from './styles';

const RegisterForm = () => {
  const [register, {isLoading}] = useRegisterMutation();

  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  const [isPasswordHidden, setIsPasswordHidden] = useState<boolean>(true);

  const {
    handleSubmit,
    control,
    formState: {errors, isValid},
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(RegisterFormSchema),
    mode: 'onChange',
  });

  const handleTogglePasswordShow = () => {
    setIsPasswordHidden(prev => !prev);
  };

  const onRegistration = async (data: RegisterFormValues) => {
    await register(data);
  };

  return (
    <View style={styles.form}>
      <FormInput
        name="name"
        control={control}
        label="Name"
        errorText={errors.name?.message}
        onSubmitEditing={() => emailRef.current?.focus()}
      />
      <FormInput
        ref={emailRef}
        name="email"
        control={control}
        label="Email"
        errorText={errors.email?.message}
        onSubmitEditing={() => passwordRef.current?.focus()}
      />
      <FormInput
        ref={passwordRef}
        name="password"
        control={control}
        label="Password"
        errorText={errors.password?.message}
        secureTextEntry={isPasswordHidden}
        onSubmitEditing={handleSubmit(onRegistration)}
        suffix={
          <CustomButton
            onPress={handleTogglePasswordShow}
            type={ButtonType.CLEAR}
            Icon={isPasswordHidden ? EyeIcon : ClosedEyeIcon}
            iconProps={styles.passwordIcon}
            height={24}
            width={24}
          />
        }
      />
      <CustomButton
        title="Register"
        onPress={handleSubmit(onRegistration)}
        style={styles.button}
        isDisabled={!isValid || isLoading}
      />
    </View>
  );
};

export default RegisterForm;
