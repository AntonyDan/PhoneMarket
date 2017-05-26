import React, { Component } from 'react';
class Filters extends Component{
	render(){
		return(
			<div className='filters-section'>	
				<h2 className="filters-section__title">Phone finder</h2>
		      {
		        this.props.filters.map((filter) => {
		          return (
				          	<div className="filters-block" key={filter.id}>
				          		<h2 className="filters-block__title">{filter.title}:</h2>
				          		<ul className="filters-block__list">
					          		{
					          			filter.features.map((line) => {
					          				return <li className='filters-block__item' key={line.lineId}><input type="checkbox" id={line.lineId} name={line.linetitle} onClick = {this.props.checkFilter.bind(this,line)}/><label htmlFor={line.lineId}>{line.linetitle}</label></li>;
					          			})
					          				
					          		}
				          		</ul>
				         	</div>
		         		);
		        })
		      }
		    </div>
		);
	}
}

export default Filters;