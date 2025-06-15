import {View, Text} from 'react-native';
import React, {FC} from 'react';
import Modal from 'react-native-modal';
import QRCode from 'react-native-qrcode-svg';
import CustomButton, {
  ButtonType,
} from '@src/shared/ui/CustomButton/CustomButton';
import {styles} from './styles';

type UserQrModalProps = {
  isOpen: boolean;
  onClose: () => void;
  userId: string;
  userName: string;
};

const UserQrModal: FC<UserQrModalProps> = props => {
  const {isOpen, onClose, userId, userName} = props;

  return (
    <Modal
      isVisible={isOpen}
      onBackdropPress={onClose}
      useNativeDriver
      hideModalContentWhileAnimating
      backdropColor="#000"
      backdropTransitionOutTiming={1}>
      <View>
        <View style={styles.modal}>
          <View style={styles.modalContainer}>
            <QRCode value={userId} size={280} />
            <Text style={styles.title}>{userName}</Text>
            <Text style={styles.subtitle}>Foodwise client card</Text>
          </View>
        </View>

        <CustomButton
          title="Go back"
          onPress={onClose}
          type={ButtonType.WHITE}
          style={styles.button}
          width={150}
          height={54}
        />
      </View>
    </Modal>
  );
};

export default UserQrModal;
