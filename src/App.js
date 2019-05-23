import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import User from './components/user/User';
import NoMatch from  './components/noMatch/NoMatch';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


function App() {
  return (
    <div className="App">
        <Header/>
        <div className="container">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/user" component={User} />
                <Route component={NoMatch} />
            </Switch>
        </div>
        <Footer/>
    </div>
  );
}

export default App;

