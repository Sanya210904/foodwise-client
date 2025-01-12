import {
  View,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  DimensionValue,
  ActivityIndicator,
  TextStyle,
} from 'react-native';
import {FC, useMemo} from 'react';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../../app/styles/colors';
import {SvgProps} from 'react-native-svg';

export enum ButtonType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  WHITE = 'white',
  LINK = 'link',
}

type CustomButtonProps = {
  title?: string;
  Icon?: FC<SvgProps>;
  onPress: () => void;
  type?: ButtonType;
  isDisabled?: boolean;
  isLoading?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  iconProps?: SvgProps;
  width?: DimensionValue;
  height?: DimensionValue;
};

const CustomButton: FC<CustomButtonProps> = props => {
  const {
    title,
    Icon,
    onPress,
    type = ButtonType.PRIMARY,
    isDisabled = false,
    isLoading = false,
    style,
    textStyle,
    iconProps,
    width = '100%',
    height = 60,
  } = props;

  const getButtonStyles = useMemo(() => {
    if (isLoading || isDisabled) return styles.disabled;
    if (type === ButtonType.PRIMARY) return styles.primary;
    if (type === ButtonType.SECONDARY) return styles.secondary;
    if (type === ButtonType.WHITE) return styles.white;
    if (type === ButtonType.LINK) return styles.link;
  }, [type, isDisabled, isLoading]);

  const getButtonTextStyles = useMemo(() => {
    if (type === ButtonType.WHITE) return styles.darkText;
    if (type === ButtonType.LINK) return styles.linkButtonText;
    else return styles.text;
  }, [type]);

  const buttonContent = isLoading ? (
    <ActivityIndicator color={'#fff'} />
  ) : (
    <View style={styles.container}>
      {Icon && <Icon {...iconProps} />}
      {title && <Text style={[getButtonTextStyles, textStyle]}>{title}</Text>}
    </View>
  );

  return (
    <TouchableOpacity
      style={[getButtonStyles, styles.button, {width, height}, style]}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={isDisabled || isLoading}>
      {type === ButtonType.PRIMARY && !isDisabled && !isLoading ? (
        <LinearGradient
          style={[styles.primary, styles.container, style]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={[colors.buttonPrimaryFrom, colors.buttonPrimaryTo]}>
          {buttonContent}
        </LinearGradient>
      ) : (
        <View style={styles.container}>{buttonContent}</View>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
