import React, {FC, useState} from 'react';
import {View} from 'react-native';
import {ProductList} from '@src/features/product/list';
import {AddToCartModal} from '@src/widgets/AddToCartModal';
import {CartProduct} from '@src/entities/product/model/types/Product';
import {ShopDetails} from '@src/widgets/ShopDetails';
import {useSharedValue} from 'react-native-reanimated';
import {styles} from './styles';
import AnimatedHeaderList from '../AnimatedHeaderList/AnimatedHeaderList';

type ProductExplorerProps = {
  shopId: string;
  shopName: string;
};

const ProductExplorer: FC<ProductExplorerProps> = props => {
  const {shopId, shopName} = props;

  const productListScrollY = useSharedValue<number>(0);

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<CartProduct | null>(
    null,
  );

  const handleScroll = (value: number) => {
    productListScrollY.value = value;
  };

  const handleSelectProduct = (product: CartProduct) => {
    setSelectedProduct(product);
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
    setSelectedProduct(null);
  };

  return (
    <View style={styles.wrapper}>
      <AddToCartModal
        isOpen={isOpenModal}
        onClose={handleCloseModal}
        product={selectedProduct}
        shopId={shopId}
      />

      <AnimatedHeaderList
        listScrollY={productListScrollY}
        shopName={shopName}
      />

      <ProductList
        shopId={shopId}
        onProductPress={handleSelectProduct}
        ListHeaderComponent={<ShopDetails shopId={shopId} />}
        onScroll={handleScroll}
      />
    </View>
  );
};

export default ProductExplorer;
