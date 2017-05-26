import * as actionTypes from '../constants/actionTypes';
 
export function addCartItem(item) {
  return {
    type: actionTypes.SET_CART_ITEM,
    item
  };
};
export function deleteCartItem(deletedCart) {
  return {
    type: actionTypes.DELETE_CART_ITEM,
    deletedCart
  };
};