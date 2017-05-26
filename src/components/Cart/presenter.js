import React, { Component } from 'react';
class Cart extends Component{
	constructor(props){
		super(props);
		this.state = { isOpened: false};
	}
	toggleOpen() {
	    this.setState({
	      isOpened: !this.state.isOpened
	    });
	}
	render(){
		const activeClass = this.state.isOpened ? 'cart__list active' : 'cart__list',
			  activeTotal = (this.props.cartItems.length > 1) ? 'cart__total cart__total--active' : 'cart__total',
			  isEmpty = (this.props.cartItems.length>0) ? 'empty empty--none' : 'empty';
		return(
			<div className='cart'>
				<a className="cart__title" onClick={this.toggleOpen.bind(this)}>Cart</a>
				<div className={activeClass}>
					<ul className="cart__total-list">
						<p className={isEmpty}>Cart is empty</p>
			      	{
				        this.props.cartItems.map((cartItem) => {
				          return (
						        <li className="cart__item cart-item" key={cartItem.id}>
						        	<a href="#" className="cart-item__close" onClick = {this.props.deleteCartItem.bind(this, cartItem.id)}>x</a>
						          	<img src={cartItem.image} className="cart-item__image"/>
						          	<h2 className="cart-item__title">{cartItem.name}</h2>
						          	<p className="cart-item__coin">{cartItem.coin}$</p>
						        </li>
				         	);
				        })
			      	}
			      	</ul>
			      	<div className="cart__total-buy">
			      		<p className={activeTotal}>
			      			$
			      			{
			      				this.props.cartItems.reduce(function(sum, item) {
									return sum + item.coin;
								}, 0)
			      			}	
			      		</p>
			      		<a href="#" className="cart__buy">BUY</a>
			      	</div>
			    </div>
		    </div>
		);
	}
}
export default Cart;