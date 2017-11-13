import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic/dist/semantic.min.css'
import {BrowserRouter} from 'react-router-dom'
import Header from './Header';
import Main from './Main';
import Router from './Router';
import Footer from './Footer';


document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        (<BrowserRouter>
                <Router/>
            </BrowserRouter>
        ),
        document.getElementById('index')
    );
})
