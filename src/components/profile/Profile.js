import React, {Component} from 'react';
import './styles/profile.css';
import {connect} from "react-redux";

class Profile extends Component{
    constructor(props){
        super(props);
        const name = this.props.name;
        const email = this.props.email;
    }


    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
                        <div className="well profile">
                            <div className="col-sm-12">
                                <div className="col-xs-12 col-sm-8">
                                    <h2>Max</h2>
                                    <p><strong>Email: </strong> max@max.ru </p>
                                    <p><strong>About: </strong> Web Designer / UI. </p>
                                    <p><strong>Hobbies: </strong> Read, out with friends, listen to music, draw and
                                        learn new things. </p>
                                    <p><strong>Skills: </strong>
                                        <span className="tags">html5</span>
                                        <span className="tags">css3</span>
                                        <span className="tags">jquery</span>
                                        <span className="tags">bootstrap3</span>
                                    </p>
                                </div>
                                <div className="col-xs-12 col-sm-4 text-center">
                                    <figure>
                                        <img
                                            src="https://www.anonymousvpn.org/images/mascot-shadow.png"
                                            alt="" className="img-circle img-responsive" />
                                            <figcaption className="ratings">
                                                <p>Ratings
                                                    <a href="#">
                                                        <span className="fa fa-star"></span>
                                                    </a>
                                                    <a href="#">
                                                        <span className="fa fa-star"></span>
                                                    </a>
                                                    <a href="#">
                                                        <span className="fa fa-star"></span>
                                                    </a>
                                                    <a href="#">
                                                        <span className="fa fa-star"></span>
                                                    </a>
                                                    <a href="#">
                                                        <span className="fa fa-star-o"></span>
                                                    </a>
                                                </p>
                                            </figcaption>
                                    </figure>
                                </div>
                            </div>
                            <div className="col-xs-12 divider text-center">
                                <div className="col-xs-12 col-sm-4 emphasis">
                                    <h2><strong> 20,7K </strong></h2>
                                    <p>
                                        <small>Followers</small>
                                    </p>

                                </div>
                                <div className="col-xs-12 col-sm-4 emphasis">
                                    <h2><strong>245</strong></h2>
                                    <p>
                                        <small>Following</small>
                                    </p>

                                </div>
                                <div className="col-xs-12 col-sm-4 emphasis">
                                    <h2><strong>43</strong></h2>
                                    <p>
                                        <small>Snippets</small>
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = function(state) {
    return {
        profile: state.user
    }
};

export default connect(mapStateToProps)(Profile);