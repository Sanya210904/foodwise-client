import React, {FC, ReactNode} from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

type HeaderProps = {
  title: string;
  HelperButton?: ReactNode;
};

const Header: FC<HeaderProps> = props => {
  const {title, HelperButton} = props;

  return (
    <View style={styles.container}>
      <Text style={[styles.title, !HelperButton ? styles.centerTitle : null]}>
        {title}
      </Text>
      <View style={styles.buttonContainer}>{HelperButton && HelperButton}</View>
    </View>
  );
};

export default Header;
