import {View, Text, Image} from 'react-native';
import React, {FC, useState} from 'react';
import CustomButton, {
  ButtonType,
} from '@src/shared/ui/CustomButton/CustomButton';
import AmountControls from '../AmountControls/AmountControls';
import Modal from 'react-native-modal';
import CloseIcon from '@src/shared/assets/icons/close-icon.svg';
import {CartProduct} from '@src/entities/product';
import {API_MAIN_IMAGE_URL} from '@env';
import {styles} from './styles';
import {getFormattedDate} from '@src/shared/helpers/getFormattedDate';
import {getDaysDifferenceFromNow} from '@src/shared/helpers/getDaysDifferenceFromNow';
import {getDaysDifferenceMessage} from '../../model/helpers/getDaysDifferenceMessage';
import {useAppDispatch} from '@src/shared/hooks/useAppDispatch';
import {fetchAddToCart} from '@src/entities/cart/api/services/fetchAddToCart';
import {FetchAddToCartRequest} from '@src/entities/cart/model/types/FetchAddToCart';
import {useAppSelector} from '@src/shared/hooks/useAppSelector';
import {useAppNavigation} from '@src/shared/hooks/useAppNavigation';
import {RouteName} from '@src/app/providers/router/model/constants/RouteName';

type AddToCartModalProps = {
  isOpen: boolean;
  onClose: () => void;
  product: CartProduct | null;
  shopId: string;
};

const AddToCartModal: FC<AddToCartModalProps> = props => {
  const {isOpen, onClose, product} = props;
  const navigation = useAppNavigation();
  const error = useAppSelector(state => state.cart.error);
  const dispatch = useAppDispatch();

  const [chosenAmount, setChosenAmount] = useState<number>(1);
  const [isAddedToCart, setIsAddedToCart] = useState<boolean>(false);

  const handleAddToCart = async () => {
    if (!product) return;

    const serverData: FetchAddToCartRequest = {
      product_prop_id: product.id,
      quantity: chosenAmount,
    };

    try {
      await dispatch(fetchAddToCart(serverData)).unwrap();
      setIsAddedToCart(true);
    } catch (e) {
      console.error('Error while adding to cart');
    }
  };

  const handleCloseModal = () => {
    onClose();
    setIsAddedToCart(false);
  };

  const handleNavigateToCart = () => {
    onClose();
    navigation.navigate('Tabs', {
      screen: RouteName.CART,
    });
  };

  //TODO: Think about it
  if (!product) {
    return null;
  }

  return (
    <Modal
      isVisible={isOpen}
      useNativeDriver
      hideModalContentWhileAnimating
      backdropColor="#000"
      backdropTransitionOutTiming={1}>
      <View style={styles.modal}>
        <View style={styles.imageBlock}>
          <CustomButton
            onPress={handleCloseModal}
            width={46}
            height={46}
            type={ButtonType.WHITE}
            style={styles.closeButton}
            Icon={CloseIcon}
          />

          <Image
            style={styles.image}
            source={{uri: `${API_MAIN_IMAGE_URL}${product?.image}`}}
          />

          <View style={styles.priceBlock}>
            <Text style={styles.price}>${product?.price}</Text>
            <Text style={styles.discountPrice}>${product?.discountPrice}</Text>
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.infoBlock}>
            <Text style={styles.title}>{product?.title}</Text>
            <Text style={styles.expiration}>
              EXP: {getFormattedDate(product.expirationDate)} (
              {getDaysDifferenceMessage(
                getDaysDifferenceFromNow(product.expirationDate),
              )}
              )
            </Text>
            <Text style={styles.amount}>{product.quantity} available</Text>
          </View>
          <AmountControls
            totalAmount={product?.quantity || 1}
            discountPrice={Number(product.discountPrice) || 0}
            chosenAmount={chosenAmount}
            setChosenAmount={(value: number) => setChosenAmount(value)}
          />
          <View style={styles.footer}>
            {isAddedToCart && (
              <Text style={styles.cartStatus}>Added to cart</Text>
            )}
            <CustomButton
              title={!isAddedToCart ? 'Add to cart' : 'Go to cart'}
              onPress={!isAddedToCart ? handleAddToCart : handleNavigateToCart}
              type={!isAddedToCart ? ButtonType.PRIMARY : ButtonType.SECONDARY}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddToCartModal;
