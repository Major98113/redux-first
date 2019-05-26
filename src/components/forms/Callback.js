import React, {Component} from "react";
import axios from 'axios';
import "./styles/callback.css";


class Callback extends Component{

    constructor(props){
        super(props);
        this.state = {
            name : "",
            email : "",
            text : "",
            isFormFilled : false
        };

        this.handleName = this.handleName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleText = this.handleText.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleName(e){
        this.setState({
            name : e.target.value
        })
    }

    handleEmail(e){
        this.setState({
            email : e.target.value
        })
    }

    handleText(e){
        this.setState({
            text : e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        axios.post("/callback",{
            name : this.state.name,
            email : this.state.email,
            text : this.state.text
        })
            .then( (response) =>{
                if (response.data !== "failure" ) {
                    this.setState({
                        isFormFilled : true
                    });
                }
            })
            .catch( (error) => {
                console.log(error);
            });
    }


    render() {
        return (
            <div className="col-sm-6 col-sm-offset-3">
                {!this.state.isFormFilled ? <Form handleName={this.handleName} handleEmail={this.handleEmail}
                                                  handleText={this.handleText}
                                                  onSubmit={this.onSubmit} />
                                                  :
                    <AccessForm/>
                }
            </div>
        );
    }
}



class Form extends Component {

    constructor(props){
        super(props);
        this.handleName = this.props.handleName.bind(this);
        this.handleEmail = this.props.handleEmail.bind(this);
        this.handleText = this.props.handleText.bind(this);
        this.onSubmit = this.props.onSubmit.bind(this);
    }

    render() {
        return (
            <div className="callback-form well" >
                <h3>Записаться на прием</h3>
                <form onSubmit={this.onSubmit} className="shake">
                    <div className="row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="name" className="h4">Имя</label>
                            <input
                                onChange={this.handleName}
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Enter name"
                                required
                            />
                            <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="email" className="h4">Email</label>
                            <input
                                onChange={this.handleEmail}
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter email"
                                required />
                            <div className="help-block with-errors"></div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message" className="h4 ">Адрес</label>
                        <textarea
                            onChange={this.handleText}
                            id="message"
                            className="form-control" rows="5"
                            placeholder="Enter your message"
                            required></textarea>
                        <div className="help-block with-errors"></div>
                    </div>
                    <button type="submit" id="form-submit" className="btn btn-success btn-lg pull-right">Submit</button>
                    <div id="msgSubmit" className="h3 text-center hidden"></div>
                    <div className="clearfix"></div>
                </form>
            </div>
        );
    }
}

const AccessForm = ()=> {
    return(
        <div className="well success-callback-form" >
            <div className="text-center">
                <h2>Спасибо за заказ !!!</h2>
                <h4>В скором времени наш оператор свяжется с вами</h4>
            </div>
        </div>
    )
};


export default Callback;