import React from 'react';
import { connect } from 'react-redux';
import Cart from './presenter';
import {deleteCartItem} from '../../actions/index';
import './cart.scss';	
function mapStateToProps(state) {
  const cartItems = state.cart;
  return {
    cartItems
  }
}
function mapDispatchToProps(dispatch){
    return {
        deleteCartItem: (deletedItem) => {
            dispatch(deleteCartItem(deletedItem));
        }
    }
}; 
export default connect(mapStateToProps, mapDispatchToProps)(Cart);

