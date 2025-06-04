import {createNavigationContainerRef} from '@react-navigation/native';
import {TypeRootStackParamsList} from '../types/TypeRootStackParamsList';

export const navigationRef =
  createNavigationContainerRef<TypeRootStackParamsList>();

export function navigate<RouteName extends keyof TypeRootStackParamsList>(
  ...args: undefined extends TypeRootStackParamsList[RouteName]
    ?
        | [name: RouteName]
        | [name: RouteName, params: TypeRootStackParamsList[RouteName]]
    : [name: RouteName, params: TypeRootStackParamsList[RouteName]]
): void {
  if (navigationRef.isReady()) {
    const [name, params] = args;
    navigationRef.navigate(name as any, params as any);
  }
}
