import {View} from 'react-native';
import React, {useState} from 'react';
import {useDebounce} from '@src/shared/hooks/useDebounce';
import {SearchShopInput} from '@src/features/shops/search';
import {ShopList} from '@src/features/shops/list';
import {styles} from './styles';
import {useAppNavigation} from '@src/shared/hooks/useAppNavigation';
import {RouteName} from '@src/app/providers/router/model/constants/RouteName';

const ShopExplorer = () => {
  const navigation = useAppNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery);

  const handleSearchQueryChange = (query: string) => {
    setSearchQuery(query);
  };

  const onShopCardPress = (id: string, name: string) => {
    navigation.navigate(RouteName.SHOP, {
      id,
      name,
    });
  };

  return (
    <View style={styles.wrapper}>
      <SearchShopInput
        query={searchQuery}
        onQueryChange={handleSearchQueryChange}
      />
      <ShopList
        query={debouncedSearchQuery}
        onShopCardPress={onShopCardPress}
      />
    </View>
  );
};

export default ShopExplorer;
