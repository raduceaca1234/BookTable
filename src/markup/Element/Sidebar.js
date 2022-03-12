import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {value: "Restaurant"}; // can be initialized by <Select value='someValue' />
    }

    sendData(value) {
        this.props.parentCallback(value);
    };

    handleChange = e => {
        this.setState({value: e.target.value});
        this.sendData(e.target.value);
    }

    render() {
        return (
            <div className="col-lg-4 col-md-6">
                <div className="sticky-top">
                    <div className="listing-filter-sidebar">
                        <h4 className="title m-b30">Filter By</h4>
                        <form>
                            <div className="form-group">
                                <div className="input-group">
                                    <input type="text" className="form-control"
                                           placeholder="What are your looking for?"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Your location"/>
                                </div>
                            </div>
                            <div className="form-group">

                                <select className="custom-select" id="inputGroupSelect01" value={this.state.value}
                                        onChange={this.handleChange}>
                                    <option>Restaurant</option>
                                    <option>Cafe</option>
                                    <option>Bar</option>
                                    <option>Pub</option>
                                    <option>Club</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <div id="price-range">
                                    <div className="price-slide-2 range-slider m-t30">
                                        <div className="price">
                                            <div id="slider-range-2"></div>
                                            <label>Radius Destination</label>
                                            <input type="text" id="distance" className="amount" readOnly=""
                                                   defaultValue="2km - 100km"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="listing-filter-sidebar">
                        <h4 className="title">Filter By Tag</h4>
                        <div className="widget_tag">
                            <ul className="m-b0">
                                <li><Link to={"/restaurants"}>Vegetarian</Link> (4)</li>
                                <li><Link to={"/restaurants"}>Pet friendly</Link> (39)</li>
                                <li><Link to={"/restaurants"}>Grill</Link> (51)</li>
                                <li><Link to={"/restaurants"}>Gluten-free</Link> (5)</li>
                                <li><Link to={"/restaurants"}>Vegan</Link> (4)</li>
                                <li><Link to={"/restaurants"}>Asian</Link> (13)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="add p-tb30">
                        <img src={require("./../../images/add/review.png")} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar;
