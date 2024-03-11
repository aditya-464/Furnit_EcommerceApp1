import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cartPressVal: '',
};

export const cartItemAddedSlice = createSlice({
  name: 'cartItemAdded',
  initialState,
  reducers: {
    increment: state => {
      state.cartPressVal = state.cartPressVal + 1;
    },
  },
});

export const {increment} = cartItemAddedSlice.actions;

export default cartItemAddedSlice.reducer;
