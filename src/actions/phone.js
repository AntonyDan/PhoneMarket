import * as actionTypes from '../constants/actionTypes';
 
export function setPhones(phones) {
  return {
    type: actionTypes.SET_PHONES,
    phones
  };
};