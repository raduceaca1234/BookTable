import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import Sidebar from './../Element/Sidebar';

var bnr = require('./../../images/banner/restaurants_background.jpeg');

const gridList = [

    {
        name: 'Restaurant1',
        image: require("./../../images/listing/pic5.jpg"),
    },
    {
        name: 'Restaurant2',
        image: require("./../../images/listing/pic5.jpg"),
    },
    {
        name: 'Restaurant3',
        image: require("./../../images/listing/pic5.jpg"),
    },
    {
        name: 'Restaurant4',
        image: require("./../../images/listing/pic5.jpg"),
    },
    {
        name: 'Restaurant5',
        image: require("./../../images/listing/pic5.jpg"),
    },
]

class Gridleftsidebar extends Component {

    state = { filterValue: "Restaurant" }
    callbackFunction = (childData) => {
        this.setState({ filterValue: childData })
    };

    render() {
        return (
            <div className="page-wraper">

                <Header />

                <div className="page-content bg-white">

                    <div className="dlab-bnr-inr dlab-bnr-inr-sm overlay-black-middle"
                        style={{ backgroundImage: "url(" + bnr + ")" }}>
                        <div className="container">
                            <div className="dlab-bnr-inr-entry">
                                <h1 className="text-white">Restaurants</h1>
                                <p>Find awesome places, bars, restaurants & evants.</p>

                                <div className="breadcrumb-row">
                                    <ul className="list-inline">
                                        <li><Link to={"./"}>Home</Link></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="content-block">
                        <div className="section-full content-inner bg-white">
                            <div className="container">
                                <div className="row">

                                    <Sidebar parentCallback={this.callbackFunction} />

                                    <div className="col-lg-8 col-md-6">
                                        <div className="listing-filter m-b40">
                                            <div className="d-flex">
                                                <div className="mr-auto">
                                                    <ul className="filter m-b0">
                                                        <li>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <ul className="filter-icon m-b0">
                                                        <li className="mr-1 mb-lg-0 mb-md-1 ml-1"><Link
                                                            to={"/restaurants"}><i
                                                                className="fa fa-th"></i></Link></li>
                                                        <li className="mr-1"><Link to={"/restaurants"}><i
                                                            className="fa fa-th-list"></i></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">{this.state.filterValue === "Restaurant" &&
                                            <div>
                                                <div className="col-lg-12" key={1}>
                                                    <div className="listing-bx listing-half m-b30">
                                                        <div className="listing-media">
                                                            <img src={require("./../../images/listing/baracca.jpeg")}
                                                                alt="" />
                                                            <ul className="wish-bx">
                                                                <li><Link className="like-btn" to={"/restaurants"}><i
                                                                    className="fa fa-heart"></i></Link></li>
                                                            </ul>
                                                        </div>
                                                        <div className="listing-info">
                                                            <div>
                                                                <ul className="featured-star">
                                                                    <li><i className="fa fa-star"></i></li>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                    <li><i className="fa fa-star"></i></li>

                                                                </ul>
                                                                <div>Availability 6/10 tables</div>
                                                            </div>
                                                            <h3 className="title"><Link
                                                                to={`/details/Baracca`}>Baracca</Link></h3>
                                                            <p>Situat în centrul oraşului Cluj-Napoca, restaurantul nostru
                                                                este
                                                                locul unde arhitectura, design-ul şi pofta de viaţă, ne
                                                                oferă
                                                                zilnic cadrul perfect pentru a ne demonstra dragostea pentru
                                                                gastronomie şi ingrediente de calitate. Baracca este locul
                                                                unde
                                                                viaţa este celebrată în fiecare moment!
                                                            </p>
                                                            <ul className="place-info">
                                                                <li className="place-location"><i
                                                                    className="fa fa-map-marker"></i>Str. Iuliu Maniu 34,
                                                                    Cluj-Napoca
                                                                </li>
                                                                <li className="open"><i className="fa fa-check"></i>Open Now
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12" key={2}>
                                                    <div className="listing-bx listing-half m-b30">
                                                        <div className="listing-media">
                                                            <img src={require("./../../images/listing/boema.jpeg")} alt="" />
                                                            <ul className="wish-bx">
                                                                <li><Link className="like-btn" to={"/restaurants"}><i
                                                                    className="fa fa-heart"></i></Link></li>
                                                            </ul>
                                                        </div>
                                                        <div className="listing-info">
                                                            <div>
                                                                <ul className="featured-star">
                                                                    <li><i className="fa fa-star"></i></li>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                </ul>
                                                                <div>Availability 0/20 tables</div>
                                                            </div>
                                                            <h3 className="title"><Link
                                                                to={`/details/Restaurant1`}>Boema</Link>
                                                            </h3>
                                                            <p>Influenţele bucătăriei Casei Boema acoperă câteva zone cu o
                                                                tradiţie culinară de excepţie. Veţi găsi in meniu atât
                                                                preparate româneşti sau din bucătăria ungurească, cât şi din
                                                                cea mediteraneană, mexicană sau arabă.
                                                            </p>
                                                            <ul className="place-info">
                                                                <li className="place-location"><i
                                                                    className="fa fa-map-marker"></i>Str. Napoca 8A,
                                                                    Cluj-Napoca
                                                                </li>
                                                                <li className="close"><i className="fa fa-close"></i>Closed
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12" key={3}>
                                                    <div className="listing-bx listing-half m-b30">
                                                        <div className="listing-media">
                                                            <img src={require("./../../images/listing/rod.jpeg")} alt="" />
                                                            <ul className="wish-bx">
                                                                <li><Link className="like-btn" to={"/restaurants"}><i
                                                                    className="fa fa-heart"></i></Link></li>
                                                            </ul>
                                                        </div>
                                                        <div className="listing-info">
                                                            <div>
                                                                <ul className="featured-star">
                                                                    <li><i className="fa fa-star"></i></li>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                </ul>
                                                                <div>Avilability 13/15 tables</div>
                                                            </div>
                                                            <h3 className="title"><Link
                                                                to={`/details/Restaurant2`}>Rod</Link>
                                                            </h3>
                                                            <p>Îţi propunem o călătorie gastronomică. Vei străbate peisajul
                                                                ingredientelor de origine românească prin intermediul
                                                                preparatelor internaţionale mereu proaspete şi gătite cu
                                                                pasiune.
                                                            </p>
                                                            <ul className="place-info">
                                                                <li className="place-location"><i
                                                                    className="fa fa-map-marker"></i>Calea Turzii 160,
                                                                    Cluj-Napoca
                                                                </li>
                                                                <li className="open"><i className="fa fa-check"></i>Open Now
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12" key={4}>
                                                    <div className="listing-bx listing-half m-b30">
                                                        <div className="listing-media">
                                                            <img src={require("./../../images/listing/marhaba.jpeg")}
                                                                alt="" />
                                                            <ul className="wish-bx">
                                                                <li><Link className="like-btn" to={"/restaurants"}><i
                                                                    className="fa fa-heart"></i></Link></li>
                                                            </ul>
                                                        </div>
                                                        <div className="listing-info">
                                                            <div>
                                                                <ul className="featured-star">
                                                                    <li><i className="fa fa-star"></i></li>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                </ul>
                                                                <div>Availability 9/12 tables</div>
                                                            </div>
                                                            <h3 className="title"><Link
                                                                to={`/details/Restaurant1`}>Marhaba</Link></h3>
                                                            <p>Bucataria Libaneza este o bucatarie cu soare si o bucatarie
                                                                facuta din inima. Culorile sale reflecta 1001 peisaje
                                                                insorite iar diversitatea evoca generozitatea libaneza din
                                                                abundenta si ospitalitatea specifica zonei.
                                                            </p>
                                                            <ul className="place-info">
                                                                <li className="place-location"><i
                                                                    className="fa fa-map-marker"></i>Calea Turzii 86,
                                                                    Cluj-Napoca
                                                                </li>
                                                                <li className="open"><i className="fa fa-check"></i>Open Now
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12" key={5}>
                                                    <div className="listing-bx listing-half m-b30">
                                                        <div className="listing-media">
                                                            <img src={require("./../../images/listing/maimuta.jpeg")}
                                                                alt="" />
                                                            <ul className="wish-bx">
                                                                <li><Link className="like-btn" to={"/restaurants"}><i
                                                                    className="fa fa-heart"></i></Link></li>
                                                            </ul>
                                                        </div>
                                                        <div className="listing-info">
                                                            <div>
                                                                <div>
                                                                    <ul className="featured-star">
                                                                        <li><i className="fa fa-star"></i></li>
                                                                        <li><i className="fa fa-star"></i></li>
                                                                        <li><i className="fa fa-star"></i></li>
                                                                        <li><i className="fa fa-star"></i></li>
                                                                        <li><i className="fa fa-star"></i></li>
                                                                    </ul>
                                                                    <div>Availability 0/8 tables</div>
                                                                </div>
                                                            </div>
                                                            <h3 className="title"><Link to={`/details/Restaurant1`}>Maimuta
                                                                Plangatoare</Link></h3>
                                                            <p>132 de etichete însoțesc meniul de preparate al Maimuței,
                                                                „asortându-se” cu fiecare fel, cu fiecare gust, cu fiecare
                                                                ocazie de a ciocni un pahar. Îndrăzniți să cereți
                                                                recomandarea unei etichete și lăsați-vă povestea învăluită e
                                                                a ei.
                                                            </p>
                                                            <ul className="place-info">
                                                                <li className="place-location"><i
                                                                    className="fa fa-map-marker"></i>Str. Emil Isac 3,
                                                                    Cluj-Napoca
                                                                </li>
                                                                <li className="close"><i className="fa fa-close"></i>Closed
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                        </div>
                                        <div className="row"> {this.state.filterValue === "Cafe" &&
                                            <div>
                                                <div className="col-lg-12" key={1}>
                                                    <div className="listing-bx listing-half m-b30">
                                                        <div className="listing-media">
                                                            <img src={require("./../../images/listing/sisters.jpeg")}
                                                                alt="" />
                                                            <ul className="wish-bx">
                                                                <li><Link className="like-btn" to={"/restaurants"}><i
                                                                    className="fa fa-heart"></i></Link></li>
                                                            </ul>
                                                        </div>
                                                        <div className="listing-info">
                                                            <ul className="featured-star">
                                                                <li><i className="fa fa-star"></i></li>
                                                                <li><i className="fa fa-star"></i></li>
                                                                <li><i className="fa fa-star"></i></li>
                                                                <li><i className="fa fa-star"></i></li>
                                                                <li><i className="fa fa-star"></i></li>
                                                            </ul>
                                                            <div>Availability 1/10 tables</div>
                                                            <h3 className="title"><Link
                                                                to={`/details/Restaurant1`}>Sisters</Link></h3>
                                                            <p>Sisters e genul de cafenea în care ajungem fără să ne dăm
                                                                seama. Fie că ne plimbăm prin centru și vrem să bem o cafea
                                                                sau că ieșim în oraș la ceas de seară și avem chef de-un
                                                                drink într-o atmosferă prietenoasă, Sisters devine cumva
                                                                opțiunea principală, probabil pentru că e unul dintre
                                                                puținele locuri apreciate de toți cei care îi calcă pragul,
                                                                indiferent de preferințe.
                                                            </p>
                                                            <ul className="place-info">
                                                                <li className="place-location"><i
                                                                    className="fa fa-map-marker"></i>Str. Universitatii 2,
                                                                    Cluj-Napoca
                                                                </li>
                                                                <li className="open"><i className="fa fa-check"></i>Open Now
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12" key={2}>
                                                    <div className="listing-bx listing-half m-b30">
                                                        <div className="listing-media">
                                                            <img src={require("./../../images/listing/olivo.jpeg")} alt="" />
                                                            <ul className="wish-bx">
                                                                <li><Link className="like-btn" to={"/restaurants"}><i
                                                                    className="fa fa-heart"></i></Link></li>
                                                            </ul>
                                                        </div>
                                                        <div className="listing-info">
                                                            <div>
                                                                <ul className="featured-star">
                                                                    <li><i className="fa fa-star"></i></li>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                </ul>
                                                                <div>Availability 0/7 tables</div>
                                                            </div>
                                                            <h3 className="title"><Link
                                                                to={`/details/Restaurant1`}>Olivo</Link>
                                                            </h3>
                                                            <p>Ne întâlnim dimineața pentru cafea. Cafea de origine și
                                                                combinații sofisticate pentru micul dejun. La Olivo, pe
                                                                lângă sortimentele deosebite de cafea, veți găsi arome
                                                                nemaiîntâlnite pentru că știm să le punem în evidență prin
                                                                aproape toate metodele de preparare cunoscute în lume.
                                                            </p>
                                                            <ul className="place-info">
                                                                <li className="place-location"><i
                                                                    className="fa fa-map-marker"></i>Bulevardul Eroilor 31,
                                                                    Cluj-Napoca
                                                                </li>
                                                                <li className="close"><i className="fa fa-close"></i>Closed
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12" key={3}>
                                                    <div className="listing-bx listing-half m-b30">
                                                        <div className="listing-media">
                                                            <img src={require("./../../images/listing/insomnia.jpeg")}
                                                                alt="" />
                                                            <ul className="wish-bx">
                                                                <li><Link className="like-btn" to={"/restaurants"}><i
                                                                    className="fa fa-heart"></i></Link></li>
                                                            </ul>
                                                        </div>
                                                        <div className="listing-info">
                                                            <div>
                                                                <ul className="featured-star">
                                                                    <li><i className="fa fa-star"></i></li>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                </ul>
                                                                <div>Availability 7/15 tables</div>
                                                            </div>
                                                            <h3 className="title"><Link
                                                                to={`/details/Restaurant2`}>Insomnia</Link>
                                                            </h3>
                                                            <p>Insomnia, cea mai longevivă cafenea din Cluj-Napoca, devine
                                                                Insomnia Cafe & Bistro! Insomnia Cafe, cea mai veche cafenea
                                                                din Cluj-Napoca se reinventează pentru a ține pasul cu
                                                                vremurile în care trăim și devine Insomnia Cafe & Bistro. De
                                                                asemenea, se schimbă și motto-ul localului, transformându-se
                                                                în „The Oldest Pub in Town, now with a twist”. Desigur, cea
                                                                mai mare schimbare a avut loc în ceea ce privește interiorul
                                                                localului, acesta fiind „revitalizat” de artiști vizuali
                                                                pentru a-i păstra aerul boem, dar în același timp pentru a-i
                                                                da o notă de eleganță, chiar la aniversarea de 25 de ani a
                                                                Insomniei.
                                                            </p>
                                                            <ul className="place-info">
                                                                <li className="place-location"><i
                                                                    className="fa fa-map-marker"></i>Str. Universitatii 4,
                                                                    Cluj-Napoca
                                                                </li>
                                                                <li className="open"><i className="fa fa-check"></i>Open Now
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12" key={4}>
                                                    <div className="listing-bx listing-half m-b30">
                                                        <div className="listing-media">
                                                            <img src={require("./../../images/listing/roots.jpeg")} alt="" />
                                                            <ul className="wish-bx">
                                                                <li><Link className="like-btn" to={"/restaurants"}><i
                                                                    className="fa fa-heart"></i></Link></li>
                                                            </ul>
                                                        </div>
                                                        <div className="listing-info">
                                                            <div>
                                                                <ul className="featured-star">
                                                                    <li><i className="fa fa-star"></i></li>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                </ul>
                                                                <div>Availability 0/4 tables</div>
                                                            </div>
                                                            <h3 className="title"><Link
                                                                to={`/details/Restaurant1`}>Roots</Link></h3>
                                                            <p>Conceptul ROOTS propune o explorare a originilor în căutarea
                                                                gusturilor autentice, celebrând lumea complexă și fascinantă
                                                                a cafelei.
                                                            </p>
                                                            <ul className="place-info">
                                                                <li className="place-location"><i
                                                                    className="fa fa-map-marker"></i>Str. Napoca 8A,
                                                                    Cluj-Napoca
                                                                </li>
                                                                <li className="close"><i className="fa fa-close"></i>Closed
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                        </div>
                                        <div className="row"> {this.state.filterValue === "Bar" &&
                                            <div>
                                                <div className="col-lg-12" key={1}>
                                                    <div className="listing-bx listing-half m-b30">
                                                        <div className="listing-media">
                                                            <img src={require("./../../images/listing/charlie.jpeg")}
                                                                alt="" />
                                                            <ul className="wish-bx">
                                                                <li><Link className="like-btn" to={"/restaurants"}><i
                                                                    className="fa fa-heart"></i></Link></li>
                                                            </ul>
                                                        </div>
                                                        <div className="listing-info">
                                                            <div>
                                                                <ul className="featured-star">
                                                                    <li><i className="fa fa-star"></i></li>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                </ul>
                                                                <div>Availability 10/15 tables</div>
                                                            </div>
                                                            <h3 className="title"><Link
                                                                to={`/details/Restaurant1`}>Charlie</Link></h3>
                                                            <p>Situat în centrul oraşului Cluj-Napoca, restaurantul nostru
                                                                este
                                                                locul unde arhitectura, design-ul şi pofta de viaţă, ne
                                                                oferă
                                                                zilnic cadrul perfect pentru a ne demonstra dragostea pentru
                                                                gastronomie şi ingrediente de calitate. Baracca este locul
                                                                unde
                                                                viaţa este celebrată în fiecare moment!
                                                            </p>
                                                            <ul className="place-info">
                                                                <li className="place-location"><i
                                                                    className="fa fa-map-marker"></i>Piata Muzeului 3,
                                                                    Cluj-Napoca
                                                                </li>
                                                                <li className="open"><i className="fa fa-check"></i>Open Now
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12" key={2}>
                                                    <div className="listing-bx listing-half m-b30">
                                                        <div className="listing-media">
                                                            <img src={require("./../../images/listing/che_guevara.jpeg")}
                                                                alt="" />
                                                            <ul className="wish-bx">
                                                                <li><Link className="like-btn" to={"/restaurants"}><i
                                                                    className="fa fa-heart"></i></Link></li>
                                                            </ul>
                                                        </div>
                                                        <div className="listing-info">
                                                            <div>
                                                                <ul className="featured-star">
                                                                    <li><i className="fa fa-star"></i></li>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                </ul>
                                                                <div>Availability 0/20 tables</div>
                                                            </div>
                                                            <h3 className="title"><Link to={`/details/Restaurant1`}>Che
                                                                Guevara</Link>
                                                            </h3>
                                                            <p>Am ales să numim clubul "Che Guevara Social Pub" pornind de
                                                                la ideea că, în conştientul si subconştientul multora, Che
                                                                Guevara nu are neapărat legătura cu o anumită orientare
                                                                politica sau cu spaţiul "latino" ci, mai mult, cu o stare de
                                                                spirit, o atitudine împotriva conformismului, a falsului, şi
                                                                a tot ce reprezinta norme învechite într-o societate.
                                                            </p>
                                                            <ul className="place-info">
                                                                <li className="place-location"><i
                                                                    className="fa fa-map-marker"></i>Piata Unirii 4,
                                                                    Cluj-Napoca
                                                                </li>
                                                                <li className="open"><i className="fa fa-check"></i>Open Now
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12" key={3}>
                                                    <div className="listing-bx listing-half m-b30">
                                                        <div className="listing-media">
                                                            <img src={require("./../../images/listing/soviet.jpeg")}
                                                                alt="" />
                                                            <ul className="wish-bx">
                                                                <li><Link className="like-btn" to={"/restaurants"}><i
                                                                    className="fa fa-heart"></i></Link></li>
                                                            </ul>
                                                        </div>
                                                        <div className="listing-info">
                                                            <div>
                                                                <ul className="featured-star">
                                                                    <li><i className="fa fa-star"></i></li>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                </ul>
                                                                <div>Availability 12/13 tables</div>
                                                            </div>
                                                            <h3 className="title"><Link
                                                                to={`/details/Restaurant2`}>Soviet</Link>
                                                            </h3>
                                                            <p>Situat în centrul oraşului Cluj-Napoca, restaurantul nostru
                                                                este
                                                                locul unde arhitectura, design-ul şi pofta de viaţă, ne
                                                                oferă
                                                                zilnic cadrul perfect pentru a ne demonstra dragostea pentru
                                                                gastronomie şi ingrediente de calitate. Baracca este locul
                                                                unde
                                                                viaţa este celebrată în fiecare moment!
                                                            </p>
                                                            <ul className="place-info">
                                                                <li className="place-location"><i
                                                                    className="fa fa-map-marker"></i>Str. Napoca 8A,
                                                                    Cluj-Napoca
                                                                </li>
                                                                <li className="open"><i className="fa fa-check"></i>Open Now
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                        </div>
                                        <div className="row"> {this.state.filterValue === "Pub" &&
                                            <div>
                                                <div className="col-lg-12" key={1}>
                                                    <div className="listing-bx listing-half m-b30">
                                                        <div className="listing-media">
                                                            <img src={require("./../../images/listing/londoner.jpg")} alt="" />
                                                            <ul className="wish-bx">
                                                                <li><Link className="like-btn" to={""}><i
                                                                    className="fa fa-heart"></i></Link></li>
                                                                <li><Link className="info-btn" to={""}><i
                                                                    className="fa fa-leaf"></i></Link></li>
                                                            </ul>
                                                        </div>
                                                        <div className="listing-info">
                                                            <ul className="featured-star">
                                                                <li><i className="fa fa-star"></i></li>
                                                                <li><i className="fa fa-star"></i></li>
                                                                <li><i className="fa fa-star"></i></li>
                                                                <li><i className="fa fa-star"></i></li>
                                                                <li><i className="fa fa-star"></i></li>

                                                            </ul>
                                                            <h3 className="title"><Link
                                                                to={`/details/Restaurant1`}>Londoner</Link></h3>
                                                            <p>"Work and fun" is our motto! "Good drinks and beautiful people" is our target! Share your #LondonerThePub photo for a chance to be featured.😄
                                                                If you visit us check the menu for our Signature Drinks, but if you want a trivia night we can help you and a party also! Just check our events section.
                                                            </p>
                                                            <ul className="place-info">
                                                                <li className="place-location"><i
                                                                    className="fa fa-map-marker"></i>Str. Napoca 8A,
                                                                    Cluj-Napoca
                                                                </li>
                                                                <li className="open"><i className="fa fa-check"></i>Open Now
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12" key={2}>
                                                    <div className="listing-bx listing-half m-b30">
                                                        <div className="listing-media">
                                                            <img src={require("./../../images/listing/coyote.jpg")} alt="" />
                                                            <ul className="wish-bx">
                                                                <li><Link className="like-btn" to={""}><i
                                                                    className="fa fa-heart"></i></Link></li>
                                                                <li><Link className="info-btn" to={""}><i
                                                                    className="fa fa-leaf"></i></Link></li>
                                                            </ul>
                                                        </div>
                                                        <div className="listing-info">
                                                            <ul className="featured-star">
                                                                <li><i className="fa fa-star"></i></li>
                                                                <li><i className="fa fa-star"></i></li>
                                                                <li><i className="fa fa-star"></i></li>

                                                            </ul>
                                                            <h3 className="title"><Link
                                                                to={`/details/Restaurant1`}>Coyote</Link>
                                                            </h3>
                                                            <p>There is always a secret, behind the walls. Let's discover it. Your curiosity is our pleasure. So,be there. Share your hapiness!
                                                            </p>
                                                            <ul className="place-info">
                                                                <li className="place-location"><i
                                                                    className="fa fa-map-marker"></i>Str. Napoca 8A,
                                                                    Cluj-Napoca
                                                                </li>
                                                                <li className="open"><i className="fa fa-check"></i>Open Now
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12" key={3}>
                                                    <div className="listing-bx listing-half m-b30">
                                                        <div className="listing-media">
                                                            <img src={require("./../../images/listing/HardwardPub.jpg")} alt="" />
                                                            <ul className="wish-bx">
                                                                <li><Link className="like-btn" to={""}><i
                                                                    className="fa fa-heart"></i></Link></li>
                                                                <li><Link className="info-btn" to={""}><i
                                                                    className="fa fa-leaf"></i></Link></li>
                                                            </ul>
                                                        </div>
                                                        <div className="listing-info">
                                                            <ul className="featured-star">
                                                                <li><i className="fa fa-star"></i></li>
                                                                <li><i className="fa fa-star"></i></li>
                                                                <li><i className="fa fa-star"></i></li>
                                                                <li><i className="fa fa-star"></i></li>
                                                                <li><i className="fa fa-star"></i></li>

                                                            </ul>
                                                            <h3 className="title"><Link
                                                                to={`/details/Restaurant2`}>Hardward Pub</Link>
                                                            </h3>
                                                            <p>The best ROCK Pub in town
                                                            </p>
                                                            <ul className="place-info">
                                                                <li className="place-location"><i
                                                                    className="fa fa-map-marker"></i>Str. Napoca 8A,
                                                                    Cluj-Napoca
                                                                </li>
                                                                <li className="open"><i className="fa fa-check"></i>Open Now
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                        </div>
                                        <div className="row"> {this.state.filterValue === "Club" &&
                                            <div>
                                                <div className="col-lg-12" key={1}>
                                                    <div className="listing-bx listing-half m-b30">
                                                        <div className="listing-media">
                                                            <img src={require("./../../images/listing/noa.jpg")} alt="" />
                                                            <ul className="wish-bx">
                                                                <li><Link className="like-btn" to={""}><i
                                                                    className="fa fa-heart"></i></Link></li>
                                                                <li><Link className="info-btn" to={""}><i
                                                                    className="fa fa-leaf"></i></Link></li>
                                                            </ul>
                                                        </div>
                                                        <div className="listing-info">
                                                            <ul className="featured-star">
                                                                <li><i className="fa fa-star"></i></li>
                                                                <li><i className="fa fa-star"></i></li>
                                                                <li><i className="fa fa-star"></i></li>
                                                                <li><i className="fa fa-star"></i></li>
                                                                <li><i className="fa fa-star"></i></li>

                                                            </ul>
                                                            <h3 className="title"><Link
                                                                to={`/details/Restaurant1`}>NOA</Link></h3>
                                                            <p>This is the official Google place of Club Nest of Angels from Cluj-Napoca, Romania. Home of music and beautiful people. Great vibes! Best Memories! Good Music!
                                                            </p>
                                                            <ul className="place-info">
                                                                <li className="place-location"><i
                                                                    className="fa fa-map-marker"></i>Str. Republicii 109,
                                                                    Cluj-Napoca
                                                                </li>
                                                                <li className="open"><i className="fa fa-check"></i>Open Now
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                        </div>

                                        <div className="pagination-bx clearfix text-center">
                                            <ul className="pagination">
                                                <li className="previous"><Link to={"#"}><i
                                                    className="fa fa-arrow-left"></i></Link></li>
                                                <li className="active"><Link to={"#"}>1</Link></li>
                                                <li><Link to={"#"}>2</Link></li>
                                                <li><Link to={"#"}>...</Link></li>
                                                <li><Link to={"#"}>7</Link></li>
                                                <li className="next"><Link to={"#"}><i
                                                    className="fa fa-arrow-right"></i></Link></li>
                                            </ul>
                                        </div>

                                    </div>
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

export default Gridleftsidebar;
