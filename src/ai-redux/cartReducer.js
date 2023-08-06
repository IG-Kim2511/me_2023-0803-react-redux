// cartReducer.js
import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY } from './cartActions';

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];

    case REMOVE_FROM_CART:
      return state.filter((item) => item.id !== action.payload);

    case UPDATE_QUANTITY:
      return state.map((item) =>
        item.id === action.payload.itemId
          ? { ...item, quantity: action.payload.quantity }
          : item
      );

    default:
      return state;
  }
};

export default cartReducer;
