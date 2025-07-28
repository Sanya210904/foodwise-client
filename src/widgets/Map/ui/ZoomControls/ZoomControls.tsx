import {View, ViewStyle, StyleProp} from 'react-native';
import React, {FC} from 'react';
import CustomButton, {
  ButtonType,
} from '@src/shared/ui/CustomButton/CustomButton';
import PlusIcon from '@src/shared/assets/icons/plus-icon.svg';
import MinusIcon from '@src/shared/assets/icons/minus-icon.svg';
import {styles} from './styles';

type ZoomControlsProps = {
  style?: StyleProp<ViewStyle>;
  handleZoomControls: (action: 'in' | 'out') => void;
};

const ZoomControls: FC<ZoomControlsProps> = props => {
  const {style, handleZoomControls} = props;

  return (
    <View style={[styles.zoomContainer, style]}>
      <CustomButton
        onPress={() => handleZoomControls('in')}
        type={ButtonType.WHITE}
        width={48}
        height={48}
        style={styles.zoomButton}
        Icon={PlusIcon}
        iconProps={{width: '80%', height: '80%'}}
      />

      <CustomButton
        onPress={() => handleZoomControls('out')}
        type={ButtonType.WHITE}
        width={48}
        height={48}
        style={styles.zoomButton}
        Icon={MinusIcon}
        iconProps={{width: '80%', height: '80%'}}
      />
    </View>
  );
};

export default ZoomControls;
