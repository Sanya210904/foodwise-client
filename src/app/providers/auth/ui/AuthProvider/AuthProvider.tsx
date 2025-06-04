import {Text} from 'react-native';
import React, {FC, ReactNode} from 'react';
import {useCheckAuthQuery} from '@src/entities/auth/api/authApi';
import {ScreenView} from '@src/widgets/ScreenView';

type AuthProviderProps = {
  children: ReactNode;
};

const AuthProvider: FC<AuthProviderProps> = props => {
  const {children} = props;
  const {isLoading} = useCheckAuthQuery(undefined);

  if (isLoading) {
    return (
      <ScreenView>
        <Text>Loading...</Text>
      </ScreenView>
    );
  }

  return children;
};

export default AuthProvider;
