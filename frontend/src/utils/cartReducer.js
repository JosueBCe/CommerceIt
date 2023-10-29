import { ACTION_TYPES } from "./cartActionTypes";


// Initial state
export const INITIAL_STATE = {
  empty: true,
  cartItems: [{

  }]
};

// Cart reducer for CRUD operations, incrementing and decrementing 
// the number of products in the cart
export const cartReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT_QUANTITY:
      console.log(state.cartItems)
      return state.cartItems.map((item) =>
        item.productId === action.productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case ACTION_TYPES.DECREMENT_QUANTITY:
      return state.map((item) =>
        item.productId === action.productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

    case ACTION_TYPES.UPDATE_ALL:
      const cartItems = action.payload;

      return {
        ...state,
        empty: false,
        cartItems: [...cartItems]
      };

    case ACTION_TYPES.CREATE:
      const newCartItem = action.payload;
      const updatedCartItems = [...state.cartItems, newCartItem];
      return {
        ...state,
        cartItems: updatedCartItems
      };

    case ACTION_TYPES.UPDATE:

      const updatedCartItem = action.payload;
      const updatedItems = state.cartItems.map((item) =>
        item.productId === updatedCartItem.productId ? updatedCartItem : item
      );

      return {
        ...state,
        cartItems: updatedItems
      };

    case ACTION_TYPES.DELETE: 

      const productIdToDelete = action.payload;
      const filteredItems = state.cartItems.filter(
        (item) => item.productId !== productIdToDelete
      );

      return {
        ...state,
        cartItems: filteredItems
      };

    case ACTION_TYPES.CLEAR: 
      const clearedItems = [];
      return {
        ...state,
        cartItems: clearedItems
      };

    default:
      return state;
  }
};