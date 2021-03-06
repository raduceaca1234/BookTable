import React, { Component } from 'react';

import { Form, Nav, Tab } from 'react-bootstrap';


class Tabcontent extends Component {
	render() {
		return (
			<div >

				<Tab.Container defaultActiveKey="Place" className="dlab-tabs search-filter">

					<Tab.Content>
						<Tab.Pane eventKey="Place" className="tab-pane">
							<form>
								<div className="input-group">
									<input type="text" className="form-control" placeholder=" What are you looking for?" />

									<Form.Control as="select"  >
										<option>Select Category</option>
										<option>Vegan</option>
										<option>Vegeterian</option>
										<option>Gluten Free</option>
										<option>Pet Friendly</option>
										<option>Grill</option>
										<option>Indian</option>
										<option>Turkish</option>
										<option>Chinese</option>
										<option>Traditional</option>
									</Form.Control>

									<div className="input-group-prepend">
										<button className="site-button text-uppercase"><i className="fa m-r5 fa-search"></i> Search</button>
									</div>
								</div>
							</form>
						</Tab.Pane>
						<Tab.Pane eventKey="Party" className="tab-pane">
							<form>
								<div className="input-group">
									<input type="text" className="form-control" placeholder="Search for Party" />
									<div className="form-control">
										<Form.Control as="select" size="lg">
											<option>Select Category</option>
											<option>Construction</option>
											<option>Corodinator</option>
											<option>Employer</option>
											<option>Financial Career</option>
											<option>Information Technology</option>
											<option>Marketing</option>
											<option>Quality check</option>
											<option>Real Estate</option>
											<option>Sales</option>
											<option>Supporting</option>
											<option>Teaching</option>
										</Form.Control>
									</div>
									<div className="input-group-prepend">
										<button className="site-button text-uppercase"><i className="fa m-r5 fa-search"></i> Search</button>
									</div>
								</div>
							</form>
						</Tab.Pane>

						<Tab.Pane eventKey="Rest" className="tab-pane">
							<form>
								<div className="input-group">
									<input type="text" className="form-control" placeholder="Search for Restaurent" />

									<Form.Control as="select" size="lg">
										<option>Select Category</option>
										<option>Construction</option>
										<option>Corodinator</option>
										<option>Employer</option>
										<option>Financial Career</option>
										<option>Information Technology</option>
										<option>Marketing</option>
										<option>Quality check</option>
										<option>Real Estate</option>
										<option>Sales</option>
										<option>Supporting</option>
										<option>Teaching</option>
									</Form.Control>

									<div className="input-group-prepend">
										<button className="site-button text-uppercase"><i className="fa m-r5 fa-search"></i> Search</button>
									</div>
								</div>
							</form>
						</Tab.Pane>
					</Tab.Content>
					<p className="text-center text-white m-b10 m-t30" style={{ color: '#fff', fontSize: 25 }}><strong>Find awesome places, bars & restaurants.</strong></p>
				</Tab.Container>
			</div>
		)

	}

}

export default Tabcontent;