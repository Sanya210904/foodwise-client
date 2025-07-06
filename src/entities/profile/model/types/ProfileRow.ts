import {SvgProps} from 'react-native-svg';

export type ProfileSettingsRow = {
  label: string;
  onPress: () => void;
  Icon?: React.FC<SvgProps>;
};
