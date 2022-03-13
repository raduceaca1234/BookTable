import React from 'react'
import {  Route, Switch } from 'react-router-dom';

import Homepage from './Pages/Homepage';

import Error from './Pages/Error';
import Register from './Pages/Register';

import Addlisting from './Pages/Addlisting';
import Listing from './Pages/Listing';

import Gridleftsidebar from './Pages/Gridleftsidebar';
import Gridrightsidebar from './Pages/Gridrightsidebar';

import Listingdetail2 from './Pages/Listingdetail2';
import Baracca from './Pages/Baracca';

import Blogstandar from './Pages/Blogstandar';
import Blogstandardetail from './Pages/Blogstandardetail';

import Contact from './Pages/Contact';
import ScrollToTop from './Element/ScrollToTop';

const Markup = () =>{
	return (
		<>
			
			<div className="page-wraper">
				<Switch>
					<Route path='/' exact component={Homepage} />
					<Route path='/home' exact component={Homepage} />
					<Route path='/error-404' exact component={Error} />
					<Route path='/contact-us' exact component={Contact} />
					<Route path='/register' exact component={Register} />
					<Route path='/add-listing' exact component={Addlisting} />
					
					<Route path='/restaurants' exact component={Gridleftsidebar} />
					
					
					
					<Route path='/details/' exact component={Listingdetail2} />
					<Route path='/details/Baracca' exact component={Baracca} />
					<Route path='/details/Restaurant2' exact component={Listingdetail2} />
					<Route path='/details/Restaurant3' exact component={Listingdetail2} />
					<Route path='/details/Restaurant4' exact component={Listingdetail2} />
					
					<Route path='/blog-standard' exact component={Blogstandar} />
					<Route path='/blog-details' exact component={Blogstandardetail} />
				</Switch>
			</div>
			<ScrollToTop />
		</>

	)
}

export default Markup;