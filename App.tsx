import React from 'react';
import {AppRouter} from '@src/app/providers/router';
import Toast from 'react-native-toast-message';
import {toastConfig} from '@src/shared/config/toast/toast';
import {AuthProvider} from '@src/app/providers/auth';

function App() {
  return (
    <AuthProvider>
      <AppRouter />
      <Toast config={toastConfig} position="bottom" />
    </AuthProvider>
  );
}

export default App;
