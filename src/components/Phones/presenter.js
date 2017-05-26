import React, { Component } from 'react';
import phoneImage from './phone.png';
class Phones extends Component{
	render(){
		return(
			<div className="phones">	
		      <ul className="phones__list">
			      {
			      	this.props.phones.map((phone) => {
			          return (
					          	<li className="phone" key={phone.id}>
					          		<div className="phone__titles">
					          			<h3 className="phone__title">{phone.name}</h3>
					          			<h3 className="phone__title">{phone.coin}$</h3>
					          		</div>
					          		<div className="phone__main">
					          			<div className='phone__main-text'>
					          				<p className="phone__descriptions">{phone.description}</p>
					          				<p className="phone__descriptions phone__descriptions--no-margin">
					          					{
					          						phone.features.join(', ')
					          					}
					          				</p>
					          				<button className="phone__add" onClick = {this.props.addCartItem.bind(this,phone)}>Add to Cart</button>
					          			</div>
					          			<div className='phone__main-image'>
					          				<img className="phone__image" src={phone.image}/>
					          			</div>
					          		</div>
					         	</li>
			         		);
			        })
			      }
		      </ul>
		    </div>
		);
	}
}

export default Phones;