import {RouteName} from '../constants/RouteName';

export type TypeRootStackParamsList = {
  [RouteName.HOME]: undefined;
  [RouteName.CART]: undefined;
  [RouteName.PROFILE]: undefined;
  [RouteName.SHOP]: {
    id: string;
  };
  [RouteName.LOGIN]: undefined;
  [RouteName.REGISTER]: undefined;
};
