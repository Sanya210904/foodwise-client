import {View, StyleProp, ViewStyle} from 'react-native';
import React, {FC} from 'react';
import Input from '@src/shared/ui/Input/Input/Input';
import {styles} from './styles';

type SearchShopInputProps = {
  query: string;
  onQueryChange: (query: string) => void;
  style?: StyleProp<ViewStyle>;
};

const SearchShopInput: FC<SearchShopInputProps> = props => {
  const {query, onQueryChange, style} = props;

  return (
    <View style={[styles.wrapper, style]}>
      <Input
        value={query}
        onChangeText={value => onQueryChange(value)}
        placeholder="Search"
      />
    </View>
  );
};

export default SearchShopInput;
