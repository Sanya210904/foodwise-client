import {AppDispatch} from '@src/app/providers/store/config/config';
import {useDispatch} from 'react-redux';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
