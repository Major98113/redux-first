import React, {Component} from 'react';

class Profile extends Component{
    constructor(props){
        super(props);
        const name = this.props.name;
        const email = this.props.email;
    }


    render() {
        return(
            <div className="container">
                <h1>{this.props.name}</h1>
                <p>{this.props.email}</p>
            </div>
        )
    }
}

export default Profile;