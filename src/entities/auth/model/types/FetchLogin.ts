import {User} from '@src/entities/user';

export type FetchLoginRequest = {
  email: string;
  password: string;
};

export type FetchLoginResponse = {
  data: {
    accessToken: string;
    refreshToken: string;
    user: User;
  };
};
