import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import SalonList from "../salon/salon-list";
import Callback from '../forms/Callback';
import About from '../about/About';
import './styles/home.css';


class Home extends Component{
    constructor(props){
        super(props);
    }


    render() {
        return(
            <div className="container home-block">
                <h1>Сеть салонов красоты "Афродита"</h1>
                <SalonList/>
                <Callback/>
                <About/>
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