import { FC, ReactNode } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

type BottomBarLinkProps = {
  children?: ReactNode;
  accessibilityState?: any;
  onPress?: (e: any) => void;
  title?: string;
};

const BottomBarLink: FC<BottomBarLinkProps> = props => {
  const { children, accessibilityState, onPress, title } = props;

  if (accessibilityState.selected) {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={styles.activeLightButton}
        activeOpacity={1}>
        <View style={styles.iconBlock}>{children}</View>
        <View style={styles.textBlock}>
          <Text style={styles.buttonLightText}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.inActiveButton}
      activeOpacity={1}>
      {children}
    </TouchableOpacity>
  );
};

export default BottomBarLink;
