import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic/dist/semantic.min.css'
import { BrowserRouter } from 'react-router-dom'
import Main from './Main';

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
    	(<BrowserRouter>
				<Main />
			</BrowserRouter>
        ),
        document.getElementById('index')
    );
})
