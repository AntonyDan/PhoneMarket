import { combineReducers } from 'redux';
import filter from './filter';
import checkedFilter from './checkedFilter';
import phone from './phone';
import cart from './cart';
import search from './search';
export default combineReducers({
  filter,
  checkedFilter,
  phone,
  cart,
  search
});