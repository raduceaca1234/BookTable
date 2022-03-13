import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GoogleMaps from "simple-react-google-maps";

class Mainlist extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xl-8 col-lg-7 col-md-12">
                    <div className="content-box">
                        <div className="content-header">
                            <h3 className="title"><i className="la la-star-o m-r5"></i> average reviews</h3>
                        </div>
                        <div className="content-body">
                            <div className="average-reviews-box">
                                <div className="average-reviews-single">
                                    <div className="average-reviews-info">
                                        <h4 className="average-reviews">8.9</h4>
                                        <div className="clearfix">
                                            <h4 className="average-reviews-in">/ 10</h4>
                                            <span>Quality</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="average-reviews-list">
                                    <ul>
                                        <li>
                                            <div className="average-reviews-info">
                                                <span>Quality</span>
                                                <h4 className="average-reviews">9.5</h4>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="average-reviews-info">
                                                <span>Location</span>
                                                <h4 className="average-reviews">8.5</h4>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="average-reviews-info">
                                                <span>Space</span>
                                                <h4 className="average-reviews">8.4</h4>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="average-reviews-info">
                                                <span>Service</span>
                                                <h4 className="average-reviews">8.9</h4>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="average-reviews-info">
                                                <span>Price</span>
                                                <h4 className="average-reviews">8.4</h4>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="content-footer content-btn text-center">
                            <Link data-toggle="modal" data-target="#favorite" to={''} className="site-button-link black"><i className="la la-star-o m-r5"></i> ADD A REVIEW</Link>
                        </div>
                    </div>
                    {/* <div className="content-box">
						<div className="content-body">
							<div className="sale-box">
								<div className="sale-date">
									<h2 className="title"><Link to={'#'}>12/20/2018 <i className="la la-angle-double-right m-l5"></i></Link></h2>
								</div>
								<div className="sale-info">
									<h3 className="title">50% OFF</h3>
									<p>Shop your Favorites Before They're gone</p>
								</div>
							</div>
						</div>
					</div> */}
                    <div className="content-box">
                        <div className="content-header">
                            <h3 className="title"><i className="la la-file-text m-r5"></i> description</h3>
                        </div>
                        <div className="content-body">
                            <p>Situat în centrul oraşului Cluj-Napoca, restaurantul nostru este locul unde arhitectura, design-ul şi pofta de viaţă, ne oferă zilnic cadrul perfect pentru a ne demonstra dragostea pentru gastronomie şi ingrediente de calitate. Baracca este locul unde viaţa este celebrată în fiecare moment!</p>
                        </div>
                    </div>
                    <div className="content-box">
                        <div className="content-header">
                            <h3 className="title"><i className="la la-list-alt m-r5"></i>listing features</h3>
                        </div>
                        <div className="content-body">
                            <ul className="icon-box-list list-col-4">
                                <li><Link to={'#'} className="icon-box-info">
                                    <div className="icon-cell bg-gray">
                                        <i className="la la-certificate"></i>
                                    </div>
                                    <span>Special</span>
                                </Link></li>
                                <li><Link to={'#'} className="icon-box-info">
                                    <div className="icon-cell bg-gray">
                                        <i className="la la-cutlery"></i>
                                    </div>
                                    <span>Good Food</span>
                                </Link></li>
                                <li><Link to={'#'} className="icon-box-info">
                                    <div className="icon-cell bg-gray">
                                        <i className="la la-eye-slash"></i>
                                    </div>
                                    <span>Privacy</span>
                                </Link></li>
                                <li><Link to={'#'} className="icon-box-info">
                                    <div className="icon-cell bg-gray">
                                        <i className="la la-music"></i>
                                    </div>
                                    <span>Good Music</span>
                                </Link></li>
                                <li><Link to={'#'} className="icon-box-info">
                                    <div className="icon-cell bg-gray">
                                        <i className="la la-lemon-o"></i>
                                    </div>
                                    <span>Tea Tasting</span>
                                </Link></li>
                                <li><Link to={'#'} className="icon-box-info">
                                    <div className="icon-cell bg-gray">
                                        <i className="la la-wifi"></i>
                                    </div>
                                    <span>Wifi</span>
                                </Link></li>
                                <li><Link to={'#'} className="icon-box-info">
                                    <div className="icon-cell bg-gray">
                                        <i className="la la-wheelchair"></i>
                                    </div>
                                    <span>Easy Access</span>
                                </Link></li>

                            </ul>
                        </div>
                    </div>
                    <div className="content-box">
                        <div className="content-header">
                            <h3 className="title"><i className="la la-file-image-o"></i> photos</h3>
                        </div>
                        <div className="content-body">
                            <div className="widget widget_gallery gallery-grid-4 lightgallery">
                                <ul>
                                    <li>
                                        <span className="check-km" title="Light Gallery Grid 1">
                                            <Link to={'#'}>
                                                <div className="dlab-post-thum"><img src={require("./../../images/listing/boema.jpeg")} alt="" /></div>
                                            </Link>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="check-km" title="Light Gallery Grid 1">
                                            <Link to={'#'}>
                                                <div className="dlab-post-thum"><img src={require("./../../images/listing/boema.jpeg")} alt="" /></div>
                                            </Link>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="check-km" title="Light Gallery Grid 1">
                                            <Link to={'#'}>
                                                <div className="dlab-post-thum"><img src={require("./../../images/listing/boema.jpeg")} alt="" /></div>
                                            </Link>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="check-km" title="Light Gallery Grid 1">
                                            <Link to={'#'}>
                                                <div className="dlab-post-thum"><img src={require("./../../images/listing/boema.jpeg")} alt="" /></div>
                                                <div className="more-images">
                                                    <div>
                                                        <strong>2</strong>
                                                        <span>Images</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="content-footer content-btn text-center">
                            <Link to={'#'} className="site-button-link">See All</Link>
                        </div>
                    </div>

                    <div className="content-box">
                        <div className="content-header">
                            <h3 className="title"><i className="la la-calendar-check-o m-r5"></i>events</h3>
                        </div>
                        <div className="content-body">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="listing-bx event-listing m-b30">
                                        <div className="listing-media">
                                            <Link to={'#'}>
                                                <img src={require("./../../images/listing/baracca.jpeg")} alt="" />
                                            </Link>
                                        </div>
                                        <div className="listing-info">
                                            <h3 className="title"><Link to={"/listing-details"}>Wine Tasting</Link></h3>
                                            <ul className="event-meta">
                                                <li className="event-date"><span className="text-primary">MAY</span> <strong>18</strong></li>
                                                <li>Friday 18:00 PM</li>
                                                <li>Cluj-Napoca, Cluj</li>
                                                <li>44 people interested</li>
                                            </ul>
                                        </div>
                                        <div className="event-bottom">
                                            <ul>
                                                <li className="event-hosted"><span>Hosted By </span> <Link to={'#'}>Emil Bogdan</Link></li>
                                                <li><Link to={'#'}><i className="la la-star-o"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content-footer content-btn text-center">
                            <Link to={'#'}>See All</Link>
                        </div>
                    </div>
                    <div className="content-box">
                        <div className="content-body">
                            <div className="add-reviews">
                                <h5 className="title m-b0"><span className="text-primary">24 </span>Reviews For Baracca</h5>
                                <Link data-toggle="modal" data-target="#favorite" to={'#'} className="site-button"><i className="la la-star-o m-r5"></i> Add a review</Link>
                            </div>
                        </div>
                    </div>

                    <div className="comments-review-area">
                        <div className="comments-review-box">
                            <div className="review-header">
                                <div className="review-comment-author">
                                    <div className="review-avatar">
                                        <img src={require("./../../images/testimonials/pic1.jpg")} alt="" />
                                    </div>
                                    <div className="comment-info">
                                        <div className="info-group">
                                            <h3 className="title"><Link to={'#'}>Andreea Marin</Link></h3>
                                        </div>
                                        <span className="comment-date">July 25, 2019</span>
                                    </div>
                                </div>
                                <div className="clearfix d-flex">
                                    <div className="average-reviews-single">
                                        <div className="average-reviews-info">
                                            <h4 className="average-reviews">7.7</h4>
                                            <div className="clearfix">
                                                <h4 className="average-reviews-in">/ 10</h4>
                                                <span>Quality</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dropdown dropdown-btn dropdown-btn-sm">
                                        <button className="site-button-link button-xl dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="la la-ellipsis-h"></i>
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <Link className="dropdown-item" data-toggle="modal" data-target="#report-reviews" to={'#'}><i className="la la-flag-o"></i><span> Report Review</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="review-body">
                                <h3 className="review-title"><Link to={'#'}>Food & Drink</Link></h3>
                                <p className="review-content">Food is not that good. But, everything is looking good.</p>
                                <ul className="review-meta">
                                    <li>3 Liked</li>
                                    <li>0 Shared</li>
                                </ul>
                            </div>
                            <div className="review-footer">
                                <div className="review-btn">
                                    <ul>
                                        <li><Link to={'#'}><i className="la la-thumbs-up"></i> <span>Like</span></Link></li>
                                        <li><Link to={'#'}><i className="la la-comments-o"></i> <span>Comment</span></Link></li>
                                        <li>
                                            <div className="dropdown dropdown-btn">
                                                <button className="site-button-link dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="la la-share-square-o m-r5"></i>  Share
                                                </button>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="review-comments-list">
                                    <ul>
                                        <li>
                                            <div className="review-comment-author">
                                                <div className="review-avatar">
                                                    <img src={require("./../../images/testimonials/pic2.jpg")} alt="" />
                                                </div>
                                                <div className="comment-info">
                                                    <div className="info-group">
                                                        <h3 className="title"><Link to={'#'}>Alexandra Pop</Link></h3>
                                                        <p className="comment-text">From my personal experience, the food was good.</p>
                                                    </div>
                                                    <span className="comment-date">July 25, 2019</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="review-comment-author">
                                                <div className="review-avatar">
                                                    <img src={require("./../../images/testimonials/pic1.jpg")} alt="" />
                                                </div>
                                                <div className="comment-info">
                                                    <div className="info-group">
                                                        <h3 className="title"><Link to={'#'}>Andreea Marin</Link></h3>
                                                        <p className="comment-text">This time, it wasn't :(</p>
                                                    </div>
                                                    <span className="comment-date">July 25, 2019</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="review-comments-form">
                                    <div className="review-avatar">
                                        <img src={require("./../../images/testimonials/pic2.jpg")} alt="" />
                                    </div>
                                    <div className="form-area">
                                        <textarea className="form-control" placeholder="Type To Message"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="comments-review-box">
                            <div className="review-header">
                                <div className="review-comment-author">
                                    <div className="review-avatar">
                                        <img src={require("./../../images/testimonials/pic3.jpg")} alt="" />
                                    </div>
                                    <div className="comment-info">
                                        <div className="info-group">
                                            <h3 className="title"><Link to={'#'}>Alex Dan</Link></h3>
                                        </div>
                                        <span className="comment-date">October 25, 2019</span>
                                    </div>
                                </div>
                                <div className="clearfix d-flex">
                                    <div className="average-reviews-single">
                                        <div className="average-reviews-info">
                                            <h4 className="average-reviews">9.7</h4>
                                            <div className="clearfix">
                                                <h4 className="average-reviews-in">/ 10</h4>
                                                <span>Quality</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dropdown dropdown-btn dropdown-btn-sm">
                                        <button className="site-button-link button-xl dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="la la-ellipsis-h"></i>
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <Link className="dropdown-item" data-toggle="modal" data-target="#report-reviews" to={''}><i className="la la-flag-o"></i><span> Report Review</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="review-body">
                                <h3 className="review-title"><Link to={'#'}>Food & Drink</Link></h3>
                                <p className="review-content">Everything was great! Can't wait to come back</p>
                                <ul className="review-meta">
                                    <li>6 Liked</li>
                                    <li>2 Shared</li>
                                </ul>
                            </div>
                            <div className="review-footer">
                                <div className="review-btn">
                                    <ul>
                                        <li><Link to={'#'}><i className="la la-thumbs-up"></i> <span>Like</span></Link></li>
                                        <li><Link to={'#'}><i className="la la-comments-o"></i> <span>Comment</span></Link></li>
                                        <li>
                                            <div className="dropdown dropdown-btn">
                                                <button className="site-button-link dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="la la-share-square-o m-r5"></i>  Share
                                                </button>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="review-comments-list">
                                    <ul>
                                        <li>
                                            <div className="review-comment-author">
                                                <div className="review-avatar">
                                                    <img src={require("./../../images/testimonials/pic1.jpg")} alt="" />
                                                </div>
                                                <div className="comment-info">
                                                    <div className="info-group">
                                                        <h3 className="title"><Link to={'#'}>Andreea Miron</Link></h3>
                                                        <p className="comment-text">Lucky you!</p>
                                                    </div>
                                                    <span className="comment-date">October 29, 2019</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="review-comments-form">
                                    <div className="review-avatar">
                                        <img src={require("./../../images/testimonials/pic2.jpg")} alt="" />
                                    </div>
                                    <div className="form-area">
                                        <textarea className="form-control" placeholder="Type To Message"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="col-xl-4 col-lg-5 col-md-12 sticky-top">
                    <aside className="side-bar listing-side-bar">

                        <div className="content-box listing-timing-box" id="accordion">
                            <div className="content-header listing-timing-header" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <div className="head-left">
                                    <span className="listing-day"><i className="la la-clock-o m-r10"></i>Today</span>
                                    <span className="listing-status open">Open now</span>
                                    <span className="m-l10">UTC+1</span>
                                </div>
                                <div className="head-right">
                                    <span>06:30 - 11:30</span>
                                    <span className="m-l10"><i className="la la-ellipsis-h"></i></span>
                                </div>
                            </div>
                            <div className="content-body collapse show" id="collapseOne" aria-labelledby="headingOne" data-parent="#accordion">
                                <ul className="listing-time-list">
                                    <li className="open"><span className="listing-day">Monday</span> <span className="listing-hours">06:30 - 11:30  13:15 - 21:45</span></li>
                                    <li><span className="listing-day">Tuesday</span> <span className="listing-hours">09:30 - 19:00</span></li>
                                    <li><span className="listing-day">Wednesday</span> <span className="listing-hours">09:30 - 19:00</span></li>
                                    <li><span className="listing-day">Thursday</span> <span className="listing-hours">09:30 - 19:00</span></li>
                                    <li><span className="listing-day">Friday</span> <span className="listing-hours">09:30 - 19:00</span></li>
                                    <li><span className="listing-day">Saturday</span> <span className="listing-hours">09:30 - 19:00</span></li>
                                    <li><span className="listing-day">Sunday</span> <span className="listing-hours">09:30 - 19:00</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="content-box">
                            <div className="content-header">
                                <h3 className="title"><i className="la la-map-signs m-r5"></i>business info</h3>
                            </div>
                            <div className="content-body">
                                <ul className="icon-box-list">
                                    <li><Link to={'#'} className="icon-box-info">
                                        <div className="icon-cell bg-gray">
                                            <i className="la la-envelope"></i>
                                        </div>
                                        <span>info@baracca.com</span>
                                    </Link></li>
                                    <li><Link to={'#'} className="icon-box-info">
                                        <div className="icon-cell bg-gray">
                                            <i className="la la-phone"></i>
                                        </div>
                                        <span>+91 1 234 5648</span>
                                    </Link></li>
                                    <li><Link to={'#'} className="icon-box-info">
                                        <div className="icon-cell bg-gray">
                                            <i className="la la-globe"></i>
                                        </div>
                                        <span>https://baracca.com</span>
                                    </Link></li>
                                    <li><Link to={'#'} className="icon-box-info">
                                        <div className="icon-cell bg-gray">
                                            <i className="la la-map-marker"></i>
                                        </div>
                                        <span>Str Napoca nr 8</span>
                                    </Link></li>
                                </ul>
                                <ul className="list-inline m-tb20">
                                    <li><Link to={'#'} className="site-button radius-no sharp"><i className="fa fa-facebook"></i></Link></li>
                                    <li><Link to={'#'} className="site-button radius-no sharp"><i className="fa fa-linkedin"></i></Link></li>
                                    <li><Link to={'#'} className="site-button radius-no sharp"><i className="fa fa-instagram"></i></Link></li>
                                    <li><Link to={'#'} className="site-button radius-no sharp"><i className="fa fa-twitter"></i></Link></li>
                                </ul>
                                <Link to={'#'} className="site-button outline outline-1 button-md btn-block"><i className="la la-envelope"></i> Inbox</Link>
                            </div>
                        </div>
                        <div className="content-box">
                            <div className="content-header">
                                <h3 className="title"><i className="la la-bullhorn m-r5"></i>nearby restaurants</h3>
                            </div>
                            <div className="content-body">
                                <div className="widget recent-posts-entry posts-style2">
                                    <div className="widget-post-bx">
                                        <div className="widget-post clearfix">
                                            <div className="dlab-post-media"> <img src={require("./../../images/listing/boema.jpeg")} width="200" height="143" alt="" /> </div>
                                            <div className="dlab-post-info">
                                                <div className="dlab-post-header">
                                                    <h6 className="post-title"><Link to={'#'}>Boema</Link></h6>
                                                    <div className="dlab-post-meta">
                                                        <ul>
                                                            <li className="post-rating">
                                                                <span className="average-rating">9.0 </span>
                                                                <span className="rating-star">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <p>"Work and fun" is our motto! "Good drinks and beautiful people" is our target! Share your #LondonerThePub photo for a chance to be featured.😄
                                                        If you visit us check the menu for our Signature Drinks, but if you want a trivia night we can help you and a party also! Just check our events section..</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content-box">
                            <div className="content-header">
                                <h3 className="title"><i className="la la-bar-chart m-r5"></i>statistic</h3>
                            </div>
                            <div className="content-body">
                                <ul className="icon-box-list list-col-2">
                                    <li>
                                        <div className="icon-box-info">
                                            <div className="icon-cell bg-gray">
                                                <i className="la la-eye"></i>
                                            </div>
                                            <span>13164 Views</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon-box-info">
                                            <div className="icon-cell bg-gray">
                                                <i className="la la-star-o"></i>
                                            </div>
                                            <span>24 Ratings</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon-box-info">
                                            <div className="icon-cell bg-gray">
                                                <i className="la la-heart-o"></i>
                                            </div>
                                            <span>102 Favorites</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon-box-info">
                                            <div className="icon-cell bg-gray">
                                                <i className="la la-share"></i>
                                            </div>
                                            <span>58 Shares</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="content-box">
                            <div className="content-header">
                                <h3 className="title"><i className="la la-tags m-r5"></i>tags</h3>
                            </div>
                            <div className="content-body">
                                <ul className="icon-box-list list-col-4">
                                    <li><Link to={'#'} className="icon-box-info">
                                        <div className="icon-cell bg-gray">
                                            <i className="la la-certificate"></i>
                                        </div>
                                        <span>Special</span>
                                    </Link></li>
                                    
                                    <li><Link to={'#'} className="icon-box-info">
                                        <div className="icon-cell bg-gray">
                                            <i className="la la-eye-slash"></i>
                                        </div>
                                        <span>Privacy</span>
                                    </Link></li>
                                    <li><Link to={'#'} className="icon-box-info">
                                        <div className="icon-cell bg-gray">
                                            <i className="la la-music"></i>
                                        </div>
                                        <span>Good Music</span>
                                    </Link></li>
            
                                    

                                </ul>
                            </div>
                        </div>
                        <div className="content-box">
                            <div className="content-header">
                                <h3 className="title"><i className="la la-map-marker m-r5"></i>map</h3>
                            </div>
                            <div className="content-body">
                                <div className="align-self-stretch" >
                                    <GoogleMaps
                                        apiKey={"AIzaSyAoQJGdiDN2BTT6FKMjpEqbRtMaA6HcLmE"}
                                        style={{ height: "300px", width: "100%" }}
                                        zoom={16}
                                        center={{ lat: 46.768319, lng: 23.588104 }}
                                        markers={{ lat: 46.768319, lng: 23.588104 }} //optional
                                    />
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        )
    }
}

export default Mainlist;