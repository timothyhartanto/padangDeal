import React from 'react';
import 'semantic/dist/semantic.min.css';
import { Link } from 'react-router-dom'

const Header = () => (
    <heaader>
        <head>
            <title>Padang Deal</title>
        </head>
    <div class="ui inverted vertical masthead center aligned segment">
        <Link to='/itworks' class="ui huge primary button" >How It Works<i class="right chevron icon"></i></Link>
    </div>
    </heaader>
)

export default Header