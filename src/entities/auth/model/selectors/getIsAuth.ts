import {RootState} from '@src/app/providers/store/config/config';

export const getIsAuth = (state: RootState) => state.auth.isAuth;
