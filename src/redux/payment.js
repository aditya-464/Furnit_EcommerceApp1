import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  paymentCount: 0,
};

export const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    setPaymentCount: state => {
      state.paymentCount += 1;
    },
  },
});

export const {setPaymentCount} = paymentSlice.actions;

export default paymentSlice.reducer;
