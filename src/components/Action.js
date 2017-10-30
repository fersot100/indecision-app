import React from 'react';
import ReactDom from 'react-dom'
const Action = (props) => {
	return (
		<div>
		<button onClick={props.handlePick}
		disabled={!props.hasOptions}>
		What?</button>
		</div>
		)
}

export default Action;