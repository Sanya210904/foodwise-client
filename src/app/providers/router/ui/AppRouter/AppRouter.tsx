import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {privateRoutes, publicRoutes} from '../../model/constants/routeList';
import BottomTabs from '../BottomTabs/BottomTabs';

const RootStack = createNativeStackNavigator();

const AppRouter = () => {
  const isAuth = true;

  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <RootStack.Group>
        {isAuth ? (
          <>
            <RootStack.Screen name="Tabs" component={BottomTabs} />
            {privateRoutes.map(route => (
              <RootStack.Screen
                key={route.name}
                name={route.name}
                component={route.component}
              />
            ))}
          </>
        ) : (
          publicRoutes.map(route => (
            <RootStack.Screen
              key={route.name}
              name={route.name}
              component={route.component}
            />
          ))
        )}
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default AppRouter;
