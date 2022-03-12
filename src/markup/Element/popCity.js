import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const cityBlog = [
	{
		image: require('./../../images/destinations/pic2.jpg'),
		title: 'Cluj-Napoca',
		restaurant: '100+'
	},
	{
		image: require('./../../images/destinations/pic3.jpg'),
		title: 'Bucharest',
		restaurant: '150+'
	},
	{
		image: require('./../../images/destinations/pic4.jpg'),
		title: 'Brasov',
		restaurant: '50+'
	},
	{
		image: require('./../../images/destinations/pic5.jpg'),
		title: 'Timisoara',
		restaurant: '70+'
	},
];



class popCity extends Component {

	render() {

		return (

			<div className="row">
				{cityBlog.map((item, index) => (
					<div className="col-lg-3 col-md-6 col-sm-6" key={index}>

						<div className="featured-bx m-b30">
							<div className="featured-media">
								<img src={item.image} alt="" />
							</div>
							<div className="featured-info">
								<ul className="featured-star">
									<li><i className="fa fa-star"></i></li>
									<li><i className="fa fa-star"></i></li>
									<li><i className="fa fa-star"></i></li>
									<li><i className="fa fa-star"></i></li>
									<li><i className="fa fa-star"></i></li>
								</ul>
								<h5 className="title"><Link to={"/restaurants"}>{item.title}</Link></h5>
								<ul className="featured-category">
									<li><i className="fa fa-map-o"></i> {item.restaurant} Restaurants</li>
								</ul>
							</div>
						</div>

					</div>
				))}
			</div>

		)
	}
}

export default popCity;