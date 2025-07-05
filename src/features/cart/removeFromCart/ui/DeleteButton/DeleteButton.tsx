import {FC} from 'react';
import {View} from 'react-native';
import CustomButton, {
  ButtonType,
} from '@src/shared/ui/CustomButton/CustomButton';
import TrashIcon from '@src/shared/assets/icons/trash-icon.svg';
import {styles} from './styles';

type DeleteButtonProps = {
  onDelete: () => void;
};

const DeleteButton: FC<DeleteButtonProps> = props => {
  const {onDelete} = props;

  return (
    <View style={styles.block}>
      <CustomButton
        style={styles.button}
        type={ButtonType.CLEAR}
        Icon={TrashIcon}
        iconProps={{width: 24}}
        onPress={onDelete}
        height={50}
      />
    </View>
  );
};

export default DeleteButton;
