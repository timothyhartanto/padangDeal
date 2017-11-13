import React from 'react';
import 'semantic/dist/semantic.min.css';
import { Switch, Route } from 'react-router-dom'
import ItWorks from './itworks';
import Header from './Header';
import Main from './Main';

const Router = () => (
    <main>
        <title>Padang Deal</title>
        <Switch>
            <Route exact path='/' component={Main}/>
            <Route path='/itworks' component={ItWorks}/>
        </Switch>
    </main>
)

export default Router