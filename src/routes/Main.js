import React from 'react';
import 'semantic/dist/semantic.min.css';
import { Switch, Route } from 'react-router-dom'
import ItWorks from './itworks';
import Header from './Header';

const Main = () => (
    <main>
    <Switch>
        <Route exact path='/' component={Header}/>
        <Route path='/itworks' component={ItWorks}/>
    </Switch>
    </main>
)

export default Main