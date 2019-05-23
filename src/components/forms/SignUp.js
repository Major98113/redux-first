import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class SignUp extends Component{

    constructor(props){
        super(props);
        this.state = {
            name : "",
            email : "",
            password : ""
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.signUp = this.signUp.bind(this);

    }

    handleNameChange(e){
        this.setState({ name : e.target.value});
    }

    handleEmailChange(e){
        this.setState({ email : e.target.value});
    }

    handlePasswordChange(e){
        this.setState({ password : e.target.value});
    }
    signUp(){
        alert(this.state.name + " " + this.state.email + " " + this.state.password);
    }



    render() {
        return(
            <div role="tabpanel" className="tab-pane fade in active" id="Section2">
                <div className="form-horizontal">
                    <div className="form-group">
                        <label>NickName</label>
                        <input type="text"
                               className="form-control"
                               onChange={this.handleNameChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email"
                               className="form-control"
                               onChange={this.handleEmailChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password"
                               className="form-control"
                               onChange={this.handlePasswordChange}
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-default" onClick={this.signUp}>Sign up</button>
                    </div>
                </div>
            </div>

        )
    }
}

export default SignUp;