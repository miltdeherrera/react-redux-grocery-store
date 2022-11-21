const ADD_PRODUCT = `cart/ADD_PRODUCT`;
const REMOVE_PRODUCT = `cart/REMOVE_PRODUCT`;
const ADD_ONE_PRODUCT = `cart/ADD_ONE_PRODUCT`;
const REMOVE_ONE_PRODUCT = `cart/REMOVE_ONE_PRODUCT`;
const PURCHASE_CART = `cart/PURCHASE_CART`;

export const getCart = (state) => Object.values(state.cart);

export default function cartReducer (state = {}, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      // copy current state into new object
      let newState = {...state};
      // if action.id is a key in the object, increment its count
      if (newState.hasOwnProperty(action.id)) {
        newState[action.id].count++;
      } else {
        // else add id, count = 1. 
        const newItem = {
          id: action.id,
          count: 1
        };
        newState[action.id] = newItem;
      }
      return newState;
    case REMOVE_PRODUCT:
      if (state.hasOwnProperty(action.id)) {
        const newState = {
          ...state
        };
        delete newState[action.id];
        return newState;
      } else {
        // product not in cart, so no change
        return state;
      }
    case ADD_ONE_PRODUCT:
      if (state.hasOwnProperty(action.id)) {
        const newState = {
          ...state
        };
        newState[action.id].count++;
        return newState;
      } else {
        // product not in cart, so no change
        return state;
      }
    case REMOVE_ONE_PRODUCT:
      if (state.hasOwnProperty(action.id)) {
        const newState = {
          ...state
        };
        newState[action.id].count--;
        return newState;
      } else {
        // product not in cart, so no change
        return state;
      }
    case PURCHASE_CART:
      // in a fuller application, would send product contents to purchasing stage.
      const emptyCart = {};
      return emptyCart;
    default:
      return state;
  }
}

export const addProductCart = (id) => {
  return {
    type: ADD_PRODUCT,
    id
  }
}

export const removeProductCart = (id) => {
  return {
    type: REMOVE_PRODUCT,
    id
  }
}

export const addOneProductCart = (id) => {
  return {
    type: ADD_ONE_PRODUCT,
    id
  }
}

export const removeOneProductCart = (id) => {
  return {
    type: REMOVE_ONE_PRODUCT,
    id
  }
}

export const purchaseCart = () => {
  return {
    type: PURCHASE_CART
  }
}