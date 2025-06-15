import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserSchema} from '../model/types/UserSchema';
import {User} from '../model/types/User';

const initialState: UserSchema = {
  id: '',
  name: '',
  email: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      const {_id, name, email} = action.payload;
      state.id = _id;
      state.name = name;
      state.email = email;
    },
    clearUser: state => {
      state.id = '';
      state.name = '';
      state.email = '';
    },
  },
});

export default userSlice.reducer;
export const {setUser, clearUser} = userSlice.actions;
