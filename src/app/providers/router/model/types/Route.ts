import { ComponentType } from 'react';
import { TypeRootStackParamsList } from './TypeRootStackParamsList';
import { SvgProps } from 'react-native-svg';

export type Route = {
  name: keyof TypeRootStackParamsList;
  component: ComponentType;
};

export type BottomTabRoute = Route & {
  icon: React.FC<SvgProps>;
  title: string;
};
