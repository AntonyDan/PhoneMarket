import React, { Component } from 'react';
import Filters from './Filters/';
import Phones from './Phones/';
import Cart from './Cart/';
import Search from './Search/';
import Anchors from './Anchors/';
import Footer from './Footer/';
import Header from './Header/';
import './app.scss';
class App extends Component{
	render(){
		return(
			<div className="wrapper">
				<Header/>
				<Search/>
				<div className="main">
					<div className="container main__container">
						<Filters/>
						<Phones/>
					</div>
				</div>
				<Anchors/>
				<Footer/>
			</div>
		);
	}
}

export default App;