import * as actionTypes from '../constants/actionTypes';

export default function(state = [], action) {
  switch (action.type) {
    case actionTypes.SET_CART_ITEM:
      return setCartItem(state, action);
    case actionTypes.DELETE_CART_ITEM:
      return deleteCartItem(state, action);
  }
  return state;
}
 
function setCartItem(state, action) {
  const { item } = action;
  const currentItem = Object.assign({}, item);
  currentItem.id = Date.now();
  return [ ...state, currentItem ];
}

function deleteCartItem(state, action) {
  const { deletedCart } = action;
  let newState = state.filter(function(item) {
    return item.id !== deletedCart;
  });
  return [...newState];
}
