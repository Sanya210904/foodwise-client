import {View, Text} from 'react-native';
import React, {FC, useState} from 'react';
import Card from '@src/shared/ui/Card/Card';
import QRCode from 'react-native-qrcode-svg';
import {styles} from './styles';
import UserQrModal from '../UserQrModal/UserQrModal';
import {useAppSelector} from '@src/shared/hooks/useAppSelector';
import {getUserId, getUserName} from '@src/entities/user';

const UserQrCard: FC = () => {
  const userId = useAppSelector(getUserId);
  const userName = useAppSelector(getUserName);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <UserQrModal
        isOpen={isOpenModal}
        onClose={handleCloseModal}
        userId={userId}
        userName={userName}
      />
      <Card width="100%" onPress={handleOpenModal} isPressable>
        <View style={styles.container}>
          <View style={styles.infoBlock}>
            <Text style={styles.title}>Your client card</Text>
            <Text style={styles.subtitle}>Click to view QR</Text>
          </View>

          <QRCode value={userId} size={80} />
        </View>
      </Card>
    </>
  );
};

export default UserQrCard;
