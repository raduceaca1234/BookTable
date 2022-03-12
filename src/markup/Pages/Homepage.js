import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import Header from './../Layout/Header';
import Footer from './../Layout/Footer';

import Popcity from './../Element/popCity';
import Topplacesowl from './../Element/Topplacesowl';
import Userowl from './../Element/Userowl';
import Fromblog from './../Element/Fromblog';

import Tabcontent from './../Element/Tabcontent';

var bnr = require('./../../images/main-slider/slide1.jpg');

var img1 = require('./../../images/background/bg1.jpg');

class Homepage extends Component {
	render() {
		return (

			<div className="page-wraper">
				<Header />

				<div className="page-content bg-white">

					<div className="dlab-bnr-inr dlab-bnr-inr-md" style={{ backgroundImage: "url(" + bnr + ")", backgroundSize: "cover" }}>
						<div className="container">
							<div className="dlab-bnr-inr-entry align-m dlab-home">
								<div className="bnr-content" >
									<div style={{backgroungColor: '#000'}}>
										<h2 style={{ color: '#000', fontSize: 65 }}><strong>Find & Get</strong> <strong>Your Dream Table.</strong></h2>

									</div>
								</div>

								<div className="dlab-tabs search-filter">
									<Tabcontent />
								</div>

							</div>
						</div>
					</div>
					<div className="content-block">

						<div className="section-full bg-white content-inner">
							<div className="container">
								<div className="section-head text-black text-center">
									<h2 className="box-title">Cities</h2>
									<div className="dlab-separator bg-primary"></div>
									<p>Regions where Book Table is available.</p>
								</div>

								<Popcity />

							</div>
						</div>

						<Topplacesowl />


						<div className="section-full bg-img-fix most-visited content-inner overlay-primary-dark" style={{ backgroundImage: "url(" + img1 + " )" }}>
							<div className="container">
								<div className="section-head text-white text-center">
									<h2 className="box-title">How It Works?</h2>
									<div className="dlab-separator bg-white"></div>
									<p>A small guide of using our platform.</p>
								</div>
								<div className="row">
									<div className="col-lg-4 col-md-4">
										<div className="icon-bx-wraper sr-box center box1 m-b30">
											<div className="icon-bx-lg radius bg-white m-b20"><Link to={"#"} className="icon-cell text-primary"><i className="ti-search"></i></Link> </div>
											<div className="icon-content">
												<h3 className="dlab-tilte">Choose What To Eat</h3>
												<p>Choose the type of the restaurant where you want to eat.</p>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-4">
										<div className="icon-bx-wraper sr-box center  m-b30">
											<div className="icon-bx-lg radius bg-white m-b20"><Link to={"#"} className="icon-cell text-primary"><i className="ti-map-alt"></i></Link> </div>
											<div className="icon-content">
												<h3 className="dlab-tilte">Find The Best Place</h3>
												<p>Explore the list of available locations in your city based on your preferences.</p>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-4">
										<div className="icon-bx-wraper sr-box center box1 m-b30">
											<div className="icon-bx-lg radius bg-white m-b20"><Link to={"#"} className="icon-cell text-primary"><i className="ti-face-smile"></i></Link> </div>
											<div className="icon-content" style={{height:100}}>
												<h3 className="dlab-tilte">Enjoy!</h3>
												<p>Bon appetit and hope to see you soon!</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="section-full content-inner bg-gray">
							<div className="container">
								<div className="section-head text-center">
									<h2 className="box-title">Restaurants Reviews</h2>
									<div className="dlab-separator bg-primary"></div>
									<p>Some feedback from our users on the restaurants from your current location.</p>
								</div>
								<div className="container">

									<Userowl />

								</div>
							</div>
						</div>

					</div>


				</div>

				<Footer />

			</div>


		)
	}

}

export default Homepage;