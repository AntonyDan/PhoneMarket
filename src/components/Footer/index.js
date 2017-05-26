import React, { Component } from 'react';
import './footer.scss';
class Footer extends Component{
	render(){
		return(
			<div className="footer">
				<div className="container">
					<ul className="columns">
						<li className="columns__item">
							<p className="columns__title">About the store</p>
							<ul className="columns__sub-list">
								<li className="columns__sub-item"><a href="#">Who we are</a></li>
								<li className="columns__sub-item"><a href="#">Contacts</a></li>
								<li className="columns__sub-item"><a href="#">Privacy policy</a></li>
								<li className="columns__sub-item"><a href="#">Terms of use</a></li>
							</ul>
						</li>
						<li className="columns__item">
							<p className="columns__title">Order support</p>
							<ul className="columns__sub-list">
								<li className="columns__sub-item"><a href="#">Order status</a></li>
								<li className="columns__sub-item"><a href="#">Shipping</a></li>
								<li className="columns__sub-item"><a href="#">Return</a></li>
							</ul>
						</li>
						<li className="columns__item">
							<p className="columns__title">Phones</p>
							<ul className="columns__sub-list">
								<li className="columns__sub-item"><a href="#">Pay as you go</a></li>
								<li className="columns__sub-item"><a href="#">Plans</a></li>
								<li className="columns__sub-item"><a href="#">Contacts</a></li>
								<li className="columns__sub-item"><a href="#">Business</a></li>
							</ul>
						</li>
						<li className="columns__item">
							<p className="columns__title">Boarbrand</p>
							<ul className="columns__sub-list">
								<li className="columns__sub-item"><a href="#">Plans</a></li>
								<li className="columns__sub-item"><a href="#">Home</a></li>
								<li className="columns__sub-item"><a href="#">Business</a></li>
							</ul>
						</li><li className="columns__item">
							<p className="columns__title">Accesories</p>
							<ul className="columns__sub-list">
								<li className="columns__sub-item"><a href="#">Memorias</a></li>
								<li className="columns__sub-item"><a href="#">Car charger</a></li>
							</ul>
						</li>
						<li className="columns__item">
							<p className="columns__title">My Store</p>
							<ul className="columns__sub-list">
								<li className="columns__sub-item"><a href="#">Register</a></li>
								<li className="columns__sub-item"><a href="#">Forgotten Pin</a></li>
							</ul>
						</li>
						<li className="columns__item">
							<p className="columns__title">Community</p>
							<ul className="columns__sub-list">
								<li className="columns__sub-item"><a href="#">Blog</a></li>
								<li className="columns__sub-item"><a href="#">Facebook</a></li>
								<li className="columns__sub-item"><a href="#">Twitter</a></li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
export default Footer;