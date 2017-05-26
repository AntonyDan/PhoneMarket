import * as actionTypes from '../constants/actionTypes';
 
export function setFilters(filters) {
  return {
    type: actionTypes.SET_FILTERS,
    filters
  };
};
export function checkFilter(checkedFilter) {
  return {
    type: actionTypes.ADD_TO_CHECKED_FILTERS,
    checkedFilter
  };
};