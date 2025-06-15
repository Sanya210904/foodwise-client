import {RootState} from '@src/app/providers/store/config/config';
import {useSelector} from 'react-redux';

export const useAppSelector = useSelector.withTypes<RootState>();
