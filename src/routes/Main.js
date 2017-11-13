import React from 'react';
import 'semantic/dist/semantic.min.css';
import {Switch, Route} from 'react-router-dom'
import ItWorks from './itworks';
import Footer from './Footer';
import Header from './Header';
import PD from 'images/logo_only.png';

const Main = () => (
    <main>

        <Header/>
        <div class="ui header container">
            <h3>Text</h3>
        </div>
        <Footer/>
    </main>
)

export default Main