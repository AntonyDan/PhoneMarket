import React from 'react';
import { connect } from 'react-redux';
import Search from './presenter';
import {runSearch} from '../../actions/index';
function mapDispatchToProps(dispatch){
    return {
        runSearch: (searchValue) => {
            dispatch(runSearch(searchValue));
        }
    }
}; 
function mapStateToProps(state){
	const checkedFilter = state.checkedFilter;
	return { checkedFilter};
}; 

export default connect(mapStateToProps,mapDispatchToProps)(Search);