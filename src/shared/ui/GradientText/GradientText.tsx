import MaskedView from '@react-native-masked-view/masked-view';
import { FC, ReactNode } from 'react';
import { Text, StyleProp, TextStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles';

type GradientTextProps = {
  style?: StyleProp<TextStyle>;
  colors: (string | number)[];
  children: ReactNode;
};

const GradientText: FC<GradientTextProps> = props => {
  const { style, colors } = props;
  return (
    <MaskedView maskElement={<Text {...props} />}>
      <LinearGradient
        colors={colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}>
        <Text {...props} style={[style, styles.overlay]} />
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;
