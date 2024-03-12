import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cartPressVal: 0,
  cartProducts: null,
  selectedCartItems: null,
  cartCount: 0,
  cartAmount: 0,
  shippingName: '',
  shippingContact: 0,
  shippingAddress: '',
  cardName: '',
  cardNumber: 0,
  cardExpiry: '',
  cardCvv: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartPressVal: state => {
      state.cartPressVal = state.cartPressVal + 1;
    },
    setCartProducts: (state, action) => {
      state.cartProducts = action.payload;
    },
    setSelectedCartItems: (state, action) => {
      state.selectedCartItems = action.payload;
    },
    setCartCount: (state, action) => {
      state.cartCount = action.payload;
    },
    setCartAmount: (state, action) => {
      state.cartAmount = action.payload;
    },
    setShippingName: (state, action) => {
      state.shippingName = action.payload;
    },
    setShippingContact: (state, action) => {
      state.shippingContact = action.payload;
    },
    setShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
    },
    saveCardName: (state, action) => {
      state.cardName = action.payload;
    },
    saveCardNumber: (state, action) => {
      state.cardNumber = action.payload;
    },
    saveCardExpiry: (state, action) => {
      state.cardExpiry = action.payload;
    },
    saveCardCvv: (state, action) => {
      state.cardCvv = action.payload;
    },
  },
});

export const {
  setCartPressVal,
  setCartProducts,
  setSelectedCartItems,
  setCartCount,
  setCartAmount,
  setShippingName,
  setShippingAddress,
  setShippingContact,
  saveCardCvv,
  saveCardName,
  saveCardExpiry,
  saveCardNumber,
} = cartSlice.actions;

export default cartSlice.reducer;
