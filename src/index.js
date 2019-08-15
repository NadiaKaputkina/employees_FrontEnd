import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from "react-router-redux";
import {createBrowserHistory} from "history";
import { Router } from 'react-router-dom';

import App from './App';
import './styles/index.css';

import store from './store';

const customHistory = syncHistoryWithStore(createBrowserHistory(), store);

ReactDOM.render((
    <Provider store={store}>
        <Router history={customHistory}>
            <App />
        </Router>
    </Provider>
), document.getElementById('root'));