import React from 'react';
import {Text, View} from 'react-native';
import {ScreenView} from '@src/widgets/ScreenView';
import {RegisterForm} from '@src/features/auth/register';
import {styles} from './styles';
import GradientText from '@src/shared/ui/GradientText/GradientText';
import {colors} from '@src/app/styles/colors';
import KeyboardAvoidingWrapper from '@src/shared/ui/KeyboardAvoidingWrapper/KeyboardAvoidingWrapper';
import {RouteName} from '@src/app/providers/router/model/constants/RouteName';
import {useAppNavigation} from '@src/shared/hooks/useAppNavigation';
import CustomButton, {
  ButtonType,
} from '@src/shared/ui/CustomButton/CustomButton';

const RegisterPage = () => {
  const navigation = useAppNavigation();

  const handleRedirectToLogin = () => {
    navigation.navigate(RouteName.LOGIN);
  };

  return (
    <ScreenView>
      <KeyboardAvoidingWrapper>
        <View style={styles.container}>
          <View style={styles.block}>
            <View style={styles.header}>
              <Text style={styles.title}>Welcome to</Text>
              <GradientText
                colors={[colors.brandPrimaryFrom, colors.brandPrimaryTo]}
                style={styles.title}>
                Foodwise
              </GradientText>
            </View>
            <RegisterForm />
            <View style={styles.footer}>
              <Text style={styles.footerText}>Have an account?</Text>
              <CustomButton
                title="Log in"
                type={ButtonType.LINK}
                onPress={handleRedirectToLogin}
                height={24}
                width={140}
                style={styles.footerButton}
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingWrapper>
    </ScreenView>
  );
};

export default RegisterPage;
