import {configureStore} from '@reduxjs/toolkit';
import authReducer from './auth';
import cartItemAddedReducer from './cartItemAdded';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cartItemAdded: cartItemAddedReducer,
  },
});
