import React from 'react';

export default class AddOption extends React.Component {
	state = {
		error: undefined
	};
	handleAddOption = (e) => {
		e.preventDefault();
		const option = e.target.elements.option;
		let error;
		if(option.value.trim()){
			error = this.props.addOption(option.value.trim());
		}
		option.value = '';
		this.setState(() => {return {error}});
	};
	render = () => {
		return (
			<form onSubmit={this.handleAddOption}> 
			{this.state.error && <p>{this.state.error}</p>}
			<input type="text" name="option" placeholder="Add new option"></input>
			<button type="submit">Add</button>
			</form>
			)
	};
}