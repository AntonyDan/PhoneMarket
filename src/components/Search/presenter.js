import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './search.scss';
class Search extends Component{
	handleClick(){
		this.props.runSearch(this.searchInput.value);
	}
	render(){
		return(
				<div className='search'>
				{
					<div className='search__container'>
						<input placeholder="Search.." type="text" className='search__input' ref={(input) => { this.searchInput = input; }}/>		      
						<button className="search__Button" onClick = {this.handleClick.bind(this)}>Go</button>
			    	</div>
			    }
			    </div>
		);
	}
}

export default Search;