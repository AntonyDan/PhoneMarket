import * as actionTypes from '../constants/actionTypes';
 
export function runSearch(searchValue) {
  return {
    type: actionTypes.RUN_SEARCH,
    value :searchValue
  };
};