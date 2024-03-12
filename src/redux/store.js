import {configureStore} from '@reduxjs/toolkit';
import authReducer from './auth';
import cartReducer from './cart';
import paymentReducer from './payment';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    payment: paymentReducer,
  },
});
