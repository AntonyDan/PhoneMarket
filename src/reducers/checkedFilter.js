import * as actionTypes from '../constants/actionTypes';

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CHECKED_FILTERS:
      return checkFilter(state, action);
  }
  return state;
}

function checkFilter(state, action) {
  const { checkedFilter} = action;
  for(let i = 0; i < state.length; i++ ){
  	if(state[i] == checkedFilter){
  		let newState = state.filter(function(amenit) {
	        return amenit !== checkedFilter;
	      });
  		return [...newState];
  	}
  }
  return [ ...state, checkedFilter ];
}