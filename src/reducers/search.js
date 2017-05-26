import * as actionTypes from '../constants/actionTypes';

export default function(state = [], action) {
  switch (action.type) {
    case actionTypes.RUN_SEARCH:
      return runSearch(state, action);
  }
  return state;
}

function runSearch(state, action) {
	
	return [ action.value ];
}