import {RootState} from '@src/app/providers/store/config/config';

export const getUserId = (state: RootState) => state.user.id;
