import {View, Text} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {ShopCard} from '@src/entities/shop';
import {styles} from './styles';
import {FlashList} from '@shopify/flash-list';
import Loader from '@src/shared/ui/Loader/Loader';
import {useSearchShopsQuery} from '@src/entities/shop/api/shopApi';

type ShopListProps = {
  query?: string;
  onShopCardPress: (id: string, name: string) => void;
};

const ShopList: FC<ShopListProps> = props => {
  const {onShopCardPress} = props;

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState<number | null>(null);

  const {data, isLoading, error} = useSearchShopsQuery(
    {
      page: currentPage,
    },
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
    return <Loader />;
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
            id={item._id}
            title={item.name}
            minPrice={item.start_price?.$numberDecimal || null}
            distance={0}
            productAmount={item.props_count}
            banner={item.banner}
            logo={item.logo}
            onPress={onShopCardPress}
          />
        );
      }}
    />
  );
};

export default ShopList;
