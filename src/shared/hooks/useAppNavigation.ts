import {TypeRootStackParamsList} from '@src/app/providers/router/model/types/TypeRootStackParamsList';
import {NavigationProp, useNavigation} from '@react-navigation/native';

export const useAppNavigation = () =>
  useNavigation<NavigationProp<TypeRootStackParamsList>>();
