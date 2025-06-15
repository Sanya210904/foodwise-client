import {RootState} from '@src/app/providers/store/config/config';

export const getUserEmail = (state: RootState) => state.user.email;
