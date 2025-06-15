import {View} from 'react-native';
import React, {useState} from 'react';
import {useDebounce} from '@src/shared/hooks/useDebounce';
import {SearchShopInput} from '@src/features/shops/search';
import {ShopList} from '@src/features/shops/list';
import {styles} from './styles';

const ShopExplorer = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery);

  const handleSearchQueryChange = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <View style={styles.wrapper}>
      <SearchShopInput
        query={searchQuery}
        onQueryChange={handleSearchQueryChange}
      />
      <ShopList query={debouncedSearchQuery} />
    </View>
  );
};

export default ShopExplorer;
