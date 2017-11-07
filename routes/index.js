console.log('Check the console');

import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from 'semantic-ui-react'
import '../semantic/dist/semantic.min.css'

document.addEventListener('DOMContentLoaded', function(){
	ReactDOM.render(
		<div class="ui inverted vertical masthead center aligned segment">
		 <a class="ui huge primary button" href="/itworks">How It Works<i class="right chevron icon"></i></a>
		 </div>,
		document.getElementById('mount')
	);
})