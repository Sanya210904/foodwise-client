import {View} from 'react-native';
import React, {FC} from 'react';
import {FlashList} from '@shopify/flash-list';
import {CartProduct, ProductCard} from '@src/entities/product';
import {styles} from './styles';
import {useInfiniteProductsList} from '../../model/hooks/useInfiniteProductsList';

type ProductListProps = {
  shopId: string;
  onProductPress: (product: CartProduct) => void;
  ListHeaderComponent?: React.ComponentType<any> | React.ReactElement;
  onScroll: (value: number) => void;
};

const ProductList: FC<ProductListProps> = props => {
  const {shopId, onProductPress, ListHeaderComponent, onScroll} = props;

  const {data, handleOnEndReached} = useInfiniteProductsList(shopId);

  // if (isLoading) {
  //   return <Loader />;
  // }

  return (
    <>
      <FlashList
        ListHeaderComponent={ListHeaderComponent}
        ListHeaderComponentStyle={styles.header}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        contentContainerStyle={styles.listContainer}
        data={data?.data}
        keyExtractor={item => item._id}
        showsVerticalScrollIndicator={false}
        estimatedItemSize={215}
        numColumns={2}
        bounces={false}
        overScrollMode="never"
        onEndReached={handleOnEndReached}
        onEndReachedThreshold={0.8}
        onScroll={e => onScroll(e.nativeEvent.contentOffset.y)}
        renderItem={({item, index}) => {
          return (
            <View style={index % 2 === 0 ? styles.leftCard : styles.rightCard}>
              <ProductCard
                id={item._id}
                title={item.title}
                discount={item.discount}
                discountPrice={item.discount_price.$numberDecimal}
                amount={item.quantity || 0}
                image={item.image}
                price={item.price.$numberDecimal}
                expDate={item.expiration_date}
                onPress={onProductPress}
              />
            </View>
          );
        }}
      />
    </>
  );
};

export default ProductList;
