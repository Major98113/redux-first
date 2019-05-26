import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from "react-router-dom";

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import allReducers from './reducers';
import {Provider} from 'react-redux';



//const store = createStore(allReducers,composeWithDevTools(applyMiddleware(thunk)));
const store = createStore(allReducers,{
    "user" :{
        isGuest : true,
        name : "",
        email : ""
    }
});

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();
