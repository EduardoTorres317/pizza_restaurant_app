import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  actualCart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addMenuItem(state, action) {
      state.actualCart.push(action.payload);
      //state.actualCart = [...state.actualCart, action.payload];
    },
    removeMenuItem(state, action) {
      state.actualCart = state.actualCart.filter(
        (item) => item.pizzaId !== Number(action.payload)
      );
    },
    increaseItemQuantity(state, action) {
      console.log('pizza id for increase item quantity-->');
      console.log(action.payload);
      const item = state.actualCart.find(
        (item) => item.pizzaId === Number(action.payload)
      );
      console.log('item for pizza id-->');
      console.log(item);

      item.quantity = item.quantity + 1;
      item.totalPrice = item.unitPrice * item.quantity;
    },
    decreaseItemQuantity(state, action) {
      console.log('pizza id for decrease item quantity-->');
      console.log(action.payload);
      const item = state.actualCart.find(
        (item) => item.pizzaId === Number(action.payload)
      );
      console.log('item for pizza id-->');
      console.log(item);

      item.quantity = item.quantity - 1;
      item.totalPrice = item.unitPrice * item.quantity;

      if (item.quantity === 0) {
        cartSlice.caseReducers.removeMenuItem(state, action);
      }
    },
    clearCart(state, action) {
      state.actualCart = [];
    },
  },
});

export const {
  addMenuItem,
  removeMenuItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export const getCart = (state) => state.cart.actualCart;

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.actualCart.find((item) => item.pizzaId === id)?.quantity ?? 0;
//return item.quantity;

export default cartSlice.reducer;
