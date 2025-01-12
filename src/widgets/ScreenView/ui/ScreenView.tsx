import {SafeAreaView} from 'react-native';
import React, {FC, ReactNode} from 'react';
import {styles} from './styles';

type ScreenViewProps = {
  children: ReactNode;
};

const ScreenView: FC<ScreenViewProps> = props => {
  const {children} = props;

  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
};

export default ScreenView;
