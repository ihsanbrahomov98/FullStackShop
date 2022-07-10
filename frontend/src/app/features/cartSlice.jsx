import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  quantity: 0,
  total: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addTooCart: (state) => {
      state.quantity += 1;
    },
    removeProduct: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload._id
      );

      state.total -= action.payload.price * action.payload.quantity;
    },
    removeProductFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload.id
      );

      state.total -= action.payload.price * action.payload.quantity;
    },
    addProduct: (state, action) => {
      const isInArr = state.cartItems.find((product) => {
        if (product._id !== action.payload._id) {
          return false;
        } else {
          product.amount += 1;
          return true;
        }
      });
      if (isInArr) {
      } else {
        state.cartItems.push(action.payload);
      }

      state.total += action.payload.price * action.payload.quantity;
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item._id !== itemId);
    },
    increase: (state, { payload }) => {
      console.log('payload');
      console.log(payload);
      console.log('payload ID');
      console.log(payload.id);
      const cartItem = state.cartItems.find((item) => item._id === payload.id);
      console.log('cartItem ');
      console.log(cartItem);
      cartItem.amount = cartItem.amount + 1;
      console.log('amount:');
      console.log(cartItem.amount);
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item._id === payload.id);
      cartItem.amount = cartItem.amount - 1;
    },
  },
});

export const {
  increase,
  decrease,
  clearCart,
  calculateTotals,
  removeItem,
  addTooCart,
  addProduct,
  removeProduct,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
