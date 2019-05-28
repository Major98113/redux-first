import React, {Component} from 'react';
import axios from "axios";
import { css } from '@emotion/core';
import { BeatLoader } from 'react-spinners';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;


class Users extends Component{

    constructor(props){
        super(props);
        this.state = {
            loading : true,
            users : []
        };
        console.log(this.state);
        this.setUsers = this.setUsers.bind(this);
    }

    componentWillMount() {
        const users = this.state.users;
        setTimeout( () => {
            for ( let i = 0 ; i < 10; i++){
                axios.get("https://api.randomuser.me/", {})
                    .then( (response) => {
                            users.push(response.data.results[0]);
                            this.setUsers(users);
                        }
                    )
                    .catch((error) => console.log(error))
            }
        },1000);


    }

    setUsers(users){
        console.log(this.state);
        this.setState({
            users : users,
            loading : false
        });
    }


    render() {
        return(
            <div className="col-sm-6 col-sm-offset-3">
                <h2 className="text-center">Наши пользователи</h2>
                {this.state.loading ? <BeatLoader
                    css={override}
                    sizeUnit={"px"}
                    size={20}
                    color={'#fe4ad8'}
                    loading={this.state.loading}
                /> : <UsersList users={this.state.users}/>}
            </div>
        )
    }
}


class UsersList extends Component {
    constructor(props){
        super(props);
        this.state = {
            users : props.users
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.users.map( (user) => {
                        return(
                            <div>
                                <div>{user.email}</div>
                                <div>{user.name.first}</div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Users;