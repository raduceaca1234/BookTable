import React, {Component} from 'react';
import Slider from "react-slick";


const userBlog= [
	{
		image: require('./../../images/testimonials/pic3.jpg'),
		name: 'Andrei',
		restaurant: 'ROD',
		title: 'Wonderful music',
		text: 'Good food, reasonable prices, artistic presentation. It is worth visiting for a culinary experience'
	},
	{
		image: require('./../../images/testimonials/pic1.jpg'),
		name: 'Andra',
		restaurant: 'Boema',
		title: 'Best food in town!',
		text: 'A dream setting right in the heart of Cluj. Selected dishes, skillfully served. The place is also on the list of recommendations of the famous Gault & Millau guide.'
	},
	{
		image: require('./../../images/testimonials/pic3.jpg'),
		name: 'Vlad',
		restaurant: 'Marhaba',
		title: 'The Grill is amazing!',
		text: 'The food is very tasty. Serving was quick. Polite staff. The location is tastefully decorated in accordance with Lebanese specifics.'
	},
	{
		image: require('./../../images/testimonials/pic2.jpg'),
		name: 'Maria',
		restaurant: 'Baracca',
		title: 'Good wine',
		text: 'The tiramisu is fabulous! Very good food, nice and attentive serving. Not cheap, but definitely worth it.'
	},
	{
		image: require('./../../images/testimonials/pic3.jpg'),
		name: 'Alex',
		restaurant: 'Maimuta Plangatoare',
		title: 'Best serices!',
		text: 'Excellent service, professional waiters, clean and rustic. The food is also very tasty, the serving time perfect and the drinks very nicely crafted. The price-performance ratio is very good and it is worth visiting this place, either for a quiet dinner or for a special occasion.'
	},
]
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
  	<div className="owl-nav">
		<div className="owl-next la la-angle-right "  onClick={onClick}/>
	</div>	
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
	<div className="owl-nav">
		<div className=" owl-prev la la-angle-left " onClick={onClick}/>
	</div>
  );
}

class Userowl extends Component{
	render(){
		var settings = {
			
            dots: true,
            slidesToShow: 3,
			margin: 10,
            infinite: true,
			autoplay: true,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
			responsive: [
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 3,
				  }
				},
				{
				  breakpoint: 991,
				  settings: {
					slidesToShow: 2,
				  }
				},
				{
				  breakpoint: 576,
				  settings: {
					slidesToShow: 1,
				  }
				}
			]
        };
		return(
				
			 <Slider className="owl-theme  owl-btn-center-lr owl-btn-3 owl-dots-primary-big " {...settings}>
				{userBlog.map((item, index) => (
					<div className="item p-2" key={index}>
						<div className="client-box">
							<div className="client-detail">
								<div className="client-img">
								<img src={item.image} alt="" />
								</div>
								<div className="client-info">
									<h5 className="client-name">{item.name}</h5> 
									<span>{item.restaurant}</span> 
								</div>
							</div>
							
							<div className="client-info-bx" style={{height:250}}>
								<h5>{item.title} </h5>
								<p>{item.text}</p>
							</div>
							
						</div>
					</div>	
				))}
				
			</Slider>
					
				
		)
		
	}
	
}

export default Userowl;