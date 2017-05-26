import React from 'react';
import { connect } from 'react-redux';
import Filters from './presenter';
import {checkFilter} from '../../actions/index';
import './filters.scss';	
function mapStateToProps(state) {
  const filters = state.filter;
  return {
    filters
  }
}
function mapDispatchToProps(dispatch){
    return {
        checkFilter: (checkedFilter) => {
            dispatch(checkFilter(checkedFilter));
        }
    }
}; 
export default connect(mapStateToProps, mapDispatchToProps)(Filters);


