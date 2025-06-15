import {RootState} from '@src/app/providers/store/config/config';

export const getUserName = (state: RootState) => state.user.name;
