import React from 'react';
import 'semantic/dist/semantic.min.css';
import { Switch, Route } from 'react-router-dom'
import ItWorks from './itworks';
import Footer from './Footer';
import Header from './Header';
import PD from 'images/logo_only.png';

const Main = () => (
    <main>
        <Header/>
        <div class="ui medium header borderless fluid item">
            <img src={PD}/>PadangDeal
        </div>
<Footer/>
    </main>
)

export default Main