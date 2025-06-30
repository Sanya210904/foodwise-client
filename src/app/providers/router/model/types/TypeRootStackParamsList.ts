import { NavigatorScreenParams } from '@react-navigation/native';
import {RouteName} from '../constants/RouteName';

export type TypeRootStackParamsList = {
  Tabs: NavigatorScreenParams<TypeBottomTabsParamsList>;
  [RouteName.SHOP]: {
    id: string;
    name: string;
  };
  [RouteName.LOGIN]: undefined;
  [RouteName.REGISTER]: undefined;
};

export type TypeBottomTabsParamsList = {
  [RouteName.HOME]: undefined;
  [RouteName.CART]: undefined;
  [RouteName.PROFILE]: undefined;
};
