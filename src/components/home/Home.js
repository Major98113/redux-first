import React, {Component} from 'react';
import { connect } from 'react-redux';
import UserReducer from '../../reducers/UserReducer';
import './styles/home.css';
import saloon1 from './beauty_saloon_1.jpg';
import saloon2 from './beauty_saloon_2.jpg';

class Home extends Component{
    constructor(props){
        super(props);

        // this.props.dispatch({
        //     type: "GET_USER"
        // });
        console.log(this.props.profile);
    }

    render() {
        return(
            <div className="container home-block">

                <h1>Главная</h1>
                <div className="home-block_info">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="thumbnail">
                                        <div className="caption text-center">
                                            <div className="position-relative">
                                                <img src={saloon1} className="img-responsive"/>
                                            </div>
                                            <h4>Saloon 1</h4>

                                            <div className="thumbnail-description smaller">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eleifend eget velit nec malesuada. Donec interdum sagittis luctus. Fusce malesuada tristique arcu, quis accumsan diam placerat sed. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut in odio quis mi posuere commodo. Proin fringilla nulla orci, at semper velit ultricies at. Sed volutpat et ipsum a sodales. Phasellus lacus risus, venenatis eget nibh mollis, placerat congue lorem. Pellentesque pharetra risus sit amet mauris volutpat lacinia. In non libero dictum, consectetur justo at, bibendum nulla.

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="thumbnail">
                                        <div className="caption text-center">
                                            <div className="position-relative">
                                                <img src={saloon2} className="img-responsive"/>
                                            </div>
                                            <h4>Saloon 1</h4>

                                            <div className="thumbnail-description smaller">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eleifend eget velit nec malesuada. Donec interdum sagittis luctus. Fusce malesuada tristique arcu, quis accumsan diam placerat sed. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut in odio quis mi posuere commodo. Proin fringilla nulla orci, at semper velit ultricies at. Sed volutpat et ipsum a sodales. Phasellus lacus risus, venenatis eget nibh mollis, placerat congue lorem. Pellentesque pharetra risus sit amet mauris volutpat lacinia. In non libero dictum, consectetur justo at, bibendum nulla.

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="col-sm-6 col-sm-offset-3">
                    <div className="well" >
                        <h3>Send me a message</h3>
                        <form role="form" id="contactForm" data-toggle="validator" className="shake">
                            <div className="row">
                                <div className="form-group col-sm-6">
                                    <label htmlFor="name" className="h4">Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Enter name"
                                           required data-error="NEW ERROR MESSAGE" />
                                        <div className="help-block with-errors"></div>
                                </div>
                                <div className="form-group col-sm-6">
                                    <label htmlFor="email" className="h4">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter email"
                                           required />
                                        <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message" className="h4 ">Message</label>
                                <textarea id="message" className="form-control" rows="5"
                                          placeholder="Enter your message" required></textarea>
                                <div className="help-block with-errors"></div>
                            </div>
                            <button type="submit" id="form-submit"
                                    className="btn btn-success btn-lg pull-right ">Submit
                            </button>
                            <div id="msgSubmit" className="h3 text-center hidden"></div>
                            <div className="clearfix"></div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}



const mapStateToProps = function(state) {
    return {
        profile: state.user,
        state: state
    }
};


export default connect(mapStateToProps)(Home);