import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Logout from './Logout';

class Header4 extends Component{
	render(){
		return(
			<header className="site-header header-transparent mo-left header-style3">
		
				<div className="sticky-header main-bar-wraper navbar-expand-lg">
					<div className="main-bar clearfix onepage">
						<div className="container-fluid clearfix">
							
							<div className="logo-header mostion">
								<Link to={"./"} className="logo-1"><img src={require("./../../images/logo-white-1.png")} alt="" /></Link>
								<Link to={"./"} className="logo-2"><img src={require("./../../images/logo-black-1.png")} alt="" /></Link>
							</div>
							
							<button className="navbar-toggler collapsed navicon justify-content-end" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
								<span></span>
								<span></span>
								<span></span>
							</button>
							
							<div className="extra-nav">
								<div className="extra-cell">
									{/* <Link to={"register"} className="site-button-link white"><i className="ti-import m-r5 rotate90"></i> Sign In</Link> */}
									<Logout />
									<Link to={"add-listing"} className="site-button radius-xl m-l10"><i className="fa fa-plus m-r5"></i> Add Listing</Link>
								</div>
							</div>
							
							<div className="header-nav navbar-collapse collapse justify-content-center" id="navbarNavDropdown">
								<ul className="nav navbar-nav">              
									<li className="down active"><Link to={"#"}>Home <i className="fa fa-chevron-down"></i></Link>
										<ul className="sub-menu">
											<li><Link to={"./"}>Home 1</Link></li>
											<li><Link to={"index-2"}>Home 2<span className="tag-new">New</span></Link></li>
											<li><Link to={"index-3"}>Home 3<span className="tag-new">New</span></Link></li>
										</ul>
									</li>
									<li className="down"><Link to={"#"}>Pages <i className="fa fa-chevron-down"></i></Link>
										<ul className="sub-menu">
											<li><Link to={"error-404"}>Error 404</Link></li>
											<li><Link to={"contact-us"}>Contact Us</Link></li>
											<li><Link to={"register"}>Register<span className="tag-new">New</span></Link></li>
										</ul>
									</li>
									<li className="down"><Link to={"#"}>Listings <i className="fa fa-chevron-down"></i></Link>
										<ul className="sub-menu">
											<li><Link to={"add-listing"}>Add Listing<span className="tag-new">New</span></Link></li>
											<li><Link to={"#"}>Listings <i className="fa fa-angle-right"></i></Link>
												<ul className="sub-menu">
													<li><Link to={"listing"}>Listing</Link></li>
													<li><Link to={"listing-left-sidebar"}>Listing Left Sidebar</Link></li>
													<li><Link to={"listing-right-sidebar"}>Listing Right Sidebar</Link></li>
												</ul>
											</li>
											<li><Link to={"#"}>Listing Grid <i className="fa fa-angle-right"></i></Link>
												<ul className="sub-menu">
													<li><Link to={"listing-grid-left-sidebar"}>Left Sidebar</Link></li>
													<li><Link to={"listing-grid-right-sidebar"}>Right Sidebar</Link></li>
												</ul>
											</li>
											<li><Link to={"#"}>Listing Map <i className="fa fa-angle-right"></i></Link>
												<ul className="sub-menu">
													<li><Link to={"listing-grid-map-left-sidebar"}>Left Sidebar</Link></li>
													<li><Link to={"listing-grid-map-right-sidebar"}>Right Sidebar</Link></li>
												</ul>
											</li>
											<li><Link to={"#"}>Listing Details <i className="fa fa-angle-right"></i></Link>
												<ul className="sub-menu">
													<li><Link to={"listing-details"}>Listing Details 1</Link></li>
													<li><Link to={"listing-details-2"}>Listing Details 2<span className="tag-new">New</span></Link></li>
													<li><Link to={"listing-details-3"}>Listing Details 3<span className="tag-new">New</span></Link></li>
												</ul>
											</li>
										</ul>
									</li>
									<li className="down"><Link to={"#"}>Blog <i className="fa fa-chevron-down"></i></Link>
										<ul className="sub-menu">
											<li><Link to={"blog-standard"}>Blog</Link></li>
											<li><Link to={"blog-details"}>Blog Details</Link></li>
										</ul>
									</li>
									<li><Link to={"contact-us"}>Contact Us</Link></li>
								</ul>		
							</div>
						</div>
					</div>
				</div>
			
			</header>
		)
	}
}

export default Header4;