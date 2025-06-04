import {emailRegex} from './model/constants/emailRegex';
import {passwordRegex} from './model/constants/passwordRegex';

import {getIsAuth} from './model/selectors/getIsAuth';

import {LoginFormValues, RegisterFormValues} from './model/types/Auth';

export {emailRegex, passwordRegex, getIsAuth};

export type {LoginFormValues, RegisterFormValues};
