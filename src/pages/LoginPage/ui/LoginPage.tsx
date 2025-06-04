import {Text, View} from 'react-native';
import React from 'react';
import {ScreenView} from '@src/widgets/ScreenView';
import KeyboardAvoidingWrapper from '@src/shared/ui/KeyboardAvoidingWrapper/KeyboardAvoidingWrapper';
import GradientText from '@src/shared/ui/GradientText/GradientText';
import {LoginForm} from '@src/features/auth/login';
import CustomButton, {
  ButtonType,
} from '@src/shared/ui/CustomButton/CustomButton';
import {useAppNavigation} from '@src/shared/hooks/useAppNavigation';
import {RouteName} from '@src/app/providers/router/model/constants/RouteName';
import {styles} from './styles';
import {colors} from '@src/app/styles/colors';

const LoginPage = () => {
  const navigation = useAppNavigation();

  const handleRedirectToRegister = () => {
    navigation.navigate(RouteName.REGISTER);
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
            <LoginForm />
            <View style={styles.footer}>
              <Text style={styles.footerText}>Haven`t registered yet?</Text>
              <CustomButton
                title="Register new account"
                type={ButtonType.LINK}
                onPress={handleRedirectToRegister}
                height={24}
                style={styles.footerButton}
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingWrapper>
    </ScreenView>
  );
};

export default LoginPage;
