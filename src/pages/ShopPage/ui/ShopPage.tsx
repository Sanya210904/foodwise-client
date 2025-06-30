import React from 'react';
import {View} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {styles} from './styles';
import {ProductExplorer} from '@src/widgets/ProductExplorer';
import {TypeRootStackParamsList} from '@src/app/providers/router/model/types/TypeRootStackParamsList';
import {RouteName} from '@src/app/providers/router/model/constants/RouteName';

const ShopPage = () => {
  const route = useRoute<RouteProp<TypeRootStackParamsList, RouteName.SHOP>>();

  const shopId = route.params.id;
  const shopName = route.params.name;

  return (
    <View style={styles.wrapper}>
      <ProductExplorer shopId={shopId} shopName={shopName} />
    </View>
  );
};

export default ShopPage;
