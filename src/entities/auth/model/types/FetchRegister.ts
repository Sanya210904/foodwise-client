import {User} from '@src/entities/user';

export type FetchRegisterRequest = {
  name: string;
  email: string;
  password: string;
};

export type FetchRegisterResponse = {
  data: {
    accessToken: string;
    refreshToken: string;
    user: User;
  };
};
