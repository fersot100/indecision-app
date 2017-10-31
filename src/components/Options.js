import React from 'react';
import Option from './Option.js';
//Options -> Options component here
const Options = (props) => (
	<div>
	<div className="widget-header">
	<h3>Your Options</h3>
	<button className="button button--link" onClick={props.handleDeleteOptions}>Remove All</button>
	</div>
	{props.options.length !== 0 ? 
	props.options.map((option, i) => 
		<Option index={i} key={i} value={option} handleDeleteOption={props.handleDeleteOption}/>) 
	: <h3 className="widget__message">Add an option to start!</h3>}
	</div>
	)

export default Options;