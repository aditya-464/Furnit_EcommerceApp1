import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  uid: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUid: (state, action) => {
      state.uid = action.payload;
    },
    removeUid: state => {
      state.uid = '';
    },
  },
});

export const {setUid, removeUid} = authSlice.actions;

export default authSlice.reducer;
