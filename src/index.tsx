import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';

import 'antd/dist/antd.css';
import './assets/sass/index.sass';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
