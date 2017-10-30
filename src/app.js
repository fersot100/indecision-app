import React from 'react';
import ReactDom from 'react-dom';
import IndecisionApp from './components/IndecisionApp.js'

const Layout = () => {
	return (
		<div>
			<p>header</p>
			<p>footer</p>
		</div>
		);
}

ReactDOM.render(<IndecisionApp options={[]}/> , document.getElementById('app'));