import React, { Component } from 'react';
import Cart from '../Cart/';
import './header.scss';

class Header extends Component{
	render(){
		return(
			<div className="header">
				<div className="container container-header">
					<div className="logo header__logo"></div>
					<Cart/>
				</div>
			</div>
		);
	}
}

export default Header;