import {User} from './model/types/User';

import userSlice from './api/userSlice';

import {getUserId} from './model/selectors/getUserId';
import {getUserName} from './model/selectors/getUserName';
import {getUserEmail} from './model/selectors/getUserEmail';

export type {User};

export {userSlice};

export {getUserId, getUserName, getUserEmail};
