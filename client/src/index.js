import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import prmiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import Reducer from './reducers'
import 'materialize-css/dist/css/materialize.min.css';
import * as serviceWorker from './serviceWorker';


const createStoreWithMiddleware = applyMiddleware(prmiseMiddleware,ReduxThunk)(createStore);
ReactDOM.render(
    <Provider store={createStoreWithMiddleware(Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root'));
    
serviceWorker.unregister();