import {useState} from 'react';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export const useAnimateExpandCard = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const expandIconRotate = useSharedValue(0);
  const contentMaxHeight = useSharedValue(0);

  const handleChangeExpand = () => {
    setIsExpanded(prev => !prev);

    if (!isExpanded) {
      expandIconRotate.value = withTiming(180, {duration: 100});
      contentMaxHeight.value = withTiming(400, {duration: 300});
    } else {
      expandIconRotate.value = withTiming(0, {duration: 100});
      contentMaxHeight.value = withTiming(0, {duration: 300});
    }
  };

  const animatedIconStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotate: `${expandIconRotate.value}deg`}],
    };
  });

  const animatedContentStyle = useAnimatedStyle(() => {
    return {
      maxHeight: contentMaxHeight.value,
      overflow: 'hidden',
    };
  });

  return {handleChangeExpand, animatedIconStyle, animatedContentStyle};
};
