const ADD_PRODUCT = `cart/ADD_PRODUCT`;

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