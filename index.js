import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from '@src/app/providers/store/config/config';
import {navigationRef} from '@src/app/providers/router/model/utils/navigationRef';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const EntryPoint = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <NavigationContainer ref={navigationRef}>
          <App />
        </NavigationContainer>
      </Provider>
    </GestureHandlerRootView>
  );
};

AppRegistry.registerComponent(appName, () => EntryPoint);
