import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
//import { Provider } from 'react-redux';
//import "bootstrap/dist/css/bootstrap.min.css";
import './css/index.css';
import App from './App';


ReactDOM.render(
        <BrowserRouter>
            <App />,
        </BrowserRouter>,
    document.getElementById('root'));


