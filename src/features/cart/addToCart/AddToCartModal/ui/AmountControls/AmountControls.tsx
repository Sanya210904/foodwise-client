import {View, Text, StyleProp, ViewStyle} from 'react-native';
import React, {FC} from 'react';
import CustomButton, {
  ButtonType,
} from '@src/shared/ui/CustomButton/CustomButton';
import {styles} from './styles';

type AmountControlsProps = {
  totalAmount: number;
  discountPrice: number;
  chosenAmount: number;
  setChosenAmount: (value: number) => void;
  style?: StyleProp<ViewStyle>;
};

const AmountControls: FC<AmountControlsProps> = props => {
  const {totalAmount, discountPrice, chosenAmount, setChosenAmount, style} =
    props;

  const handleIncreaseAmount = () => {
    if (chosenAmount < totalAmount) {
      setChosenAmount(chosenAmount + 1);
    }
  };

  const handleDecreaseAmount = () => {
    if (chosenAmount > 1) {
      setChosenAmount(chosenAmount - 1);
    }
  };

  return (
    <View style={[styles.block, style]}>
      <CustomButton
        title="-"
        width={46}
        height={46}
        type={ButtonType.WHITE}
        onPress={handleDecreaseAmount}
      />

      <Text style={styles.text}>
        {chosenAmount} for {(chosenAmount * discountPrice).toFixed(2)}
      </Text>

      <CustomButton
        title="+"
        width={46}
        height={46}
        type={ButtonType.WHITE}
        onPress={handleIncreaseAmount}
      />
    </View>
  );
};

export default AmountControls;
