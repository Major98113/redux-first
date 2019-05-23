import React, {Component} from "react";
import axios from 'axios';
import Profile from '../profile/Profile';
import Autorization from '../forms/Autorization';
import { connect } from 'react-redux';
import './styles/signform.css';

class User extends Component{
    constructor(props){
        super(props);
        this.state = {
            isGuest : this.props.profile.isGuest,
            name : this.props.profile.name,
            email: this.props.profile.email
        };
        this.setUser = this.setUser.bind(this);
    }

    signIn(email, password){

        axios.post('/signin',{
            email : email,
            password : password
        })
            .then( (response) =>{
                if(response.data.result =='success'){
                    const data ={
                        isGuest : false,
                        name : response.data.name,
                        email : response.data.email
                    };

                    this.setUser(data);

                }
                else {
                    console.log(response);
                    alert("Не найдено пользователя");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    setUser(data){
        this.props.dispatch({
            type: "AUTHORIZATION",
            data
        });
        this.setState(data);
    }


    render() {
        console.log(this.props.profile);
        return(
          <div>
              {this.state.isGuest ?  <Autorization signIn={this.signIn.bind(this)} />: <Profile name={this.state.name} email={this.state.email  }/>}
          </div>
        );
    }
}

const mapStateToProps = function(state) {
    return {
        profile: state.user
    }
};

export default connect(mapStateToProps)(User);