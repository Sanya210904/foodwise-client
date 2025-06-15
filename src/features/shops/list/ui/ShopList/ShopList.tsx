import {View, Text} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {ShopCard, useSearchShopsQuery} from '@src/entities/shop';
import {styles} from './styles';
import {FlashList} from '@shopify/flash-list';

type ShopListProps = {
  query?: string;
};

const ShopList: FC<ShopListProps> = props => {
  const {query = ''} = props;

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState<number | null>(null);

  const {isLoading, data, error} = useSearchShopsQuery(
    {page: currentPage, query: query},
    {
      refetchOnMountOrArgChange: true,
    },
  );

  useEffect(() => {
    if (data?.pagination.total_pages) {
      setTotalPages(data.pagination.total_pages);
    }
  }, [data]);

  const handleOnEndReached = () => {
    if (isLoading || !totalPages || currentPage >= totalPages) {
      return;
    }
    setCurrentPage(page => page + 1);
  };

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Error</Text>
      </View>
    );
  }

  return (
    <FlashList
      contentContainerStyle={styles.listContainer}
      ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      data={data?.data}
      keyExtractor={item => item._id}
      showsVerticalScrollIndicator={false}
      estimatedItemSize={215}
      onEndReached={handleOnEndReached}
      onEndReachedThreshold={0.8}
      renderItem={({item}) => {
        return (
          <ShopCard
            title={item.name}
            minPrice={item.start_price?.$numberDecimal || null}
            distance={0}
            productAmount={item.props_count}
            banner={item.banner}
            logo={item.logo}
          />
        );
      }}
    />
  );
};

export default ShopList;
