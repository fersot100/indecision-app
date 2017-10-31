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
		}else{
			error = 'Enter a valid value to add item';
		}
		option.value = '';
		this.setState(() => {return {error}});
	};
	render = () => {
		return (
			<form className="add-option" onSubmit={this.handleAddOption}> 
			{this.state.error && <p className="add-option-error">{this.state.error}</p>}
			<input className="add-option__input" type="text" name="option" placeholder="Add new option"></input>
			<button className="button" type="submit">Add Option</button>
			</form>
			)
	};
}