console.log('Check the console');

import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import { Segment, Button } from 'semantic-ui-react'
import '../semantic/dist/semantic.min.css'

document.addEventListener('DOMContentLoaded', function(){
	ReactDOM.render(
		<Segment>
		<Button primary>Hello</Button>
		<Button secondary>World</Button>
		</Segment>,
		document.getElementById('mount')
	);
})