import React, { Component } from 'react';
import './anchors.scss';
class Anchors extends Component{
	render(){
		return(
			<div className="anchors">
				<div className="container">
					<ul className="anchors__list">
						<li className="anchors__item">
							<p className="anchors__title">Payment Metods</p>
							<div className="anchors__img anchors__img--payment"></div>
						</li>
						<li className="anchors__item">
							<p className="anchors__title">Security</p>
							<div className="anchors__img anchors__img--security"></div>
						</li>
						<li className="anchors__item">
							<p className="anchors__title">Social Media</p>
							<div className="anchors__img anchors__img--social"></div>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
export default Anchors;