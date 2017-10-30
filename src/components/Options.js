import React from 'react';
import Option from './Option.js';
//Options -> Options component here
const Options = (props) => {
	return (
		<div>
		<button onClick={props.handleDeleteOptions}>Remove All</button>
		<ol>
		{props.options.map((option, i) => <Option key={i} value={option} handleDeleteOption={props.handleDeleteOption}/>)}
		</ol>
		</div>
		)
}

export default Options;