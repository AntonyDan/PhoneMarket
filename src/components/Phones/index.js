import React from 'react';
import { connect } from 'react-redux';
import Phones from './presenter';
import {addCartItem} from '../../actions/index';
import './phones.scss';
function mapStateToProps(state) {
  const checkedFilter = state.checkedFilter;
  const phonesAfterSearch = state.phone.filter(phone=>{
    if(!state.search[0]){
      return true;
    }
    return(
        phone.name.indexOf(state.search[0]) !== -1
      );
  });
  const phones = phonesAfterSearch.filter(phone=>{
    for (let i = 0; i<checkedFilter.length; i++){
      let lineClass = checkedFilter[i].lineClass;
  		if ((phone[lineClass].indexOf(checkedFilter[i].linetitle) == -1)){
  			return false;
  		}
  	}
  	return true;
  });
  return {
    phones
  }
}
function mapDispatchToProps(dispatch){
    return {
        addCartItem: (cartItem) => {
            dispatch(addCartItem(cartItem));
        }
    }
}; 

export default connect(mapStateToProps, mapDispatchToProps)(Phones);