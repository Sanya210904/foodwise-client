import {View} from 'react-native';
import React, {useState} from 'react';
import {useLogoutMutation} from '@src/entities/auth/api/authApi';
import BottomSheetDialog from '@src/shared/ui/Modal/BottomSheetDialog/BottomSheetDialog';
import Card from '@src/shared/ui/Card/Card';
import {ProfileRow} from '@src/entities/profile';
import LogoutIcon from '@src/shared/assets/icons/logout-icon.svg';

const LogoutButton = () => {
  const [logout] = useLogoutMutation();
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState<boolean>(false);

  const handleLogout = () => {
    logout(undefined);
  };

  const handleOpenConfirmModal = () => {
    setIsConfirmModalOpen(true);
  };

  const handleCloseConfirmModal = () => {
    setIsConfirmModalOpen(false);
  };

  return (
    <View>
      <BottomSheetDialog
        isOpen={isConfirmModalOpen}
        onDiscard={handleCloseConfirmModal}
        onConfirm={handleLogout}
        title="Are you sure you want to log out?"
        submitButtonTitle="Log out"
        cancelButtonTitle="Cancel"
      />

      <Card>
        <ProfileRow
          profile={{
            label: 'Logout',
            onPress: handleOpenConfirmModal,
            Icon: LogoutIcon,
          }}
        />
      </Card>
    </View>
  );
};

export default LogoutButton;
