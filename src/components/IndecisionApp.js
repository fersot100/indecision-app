import AddOption from './AddOption.js';
import Header from './Header.js';
import Options from './Options.js';
import Action from './Action.js';
export default class IndecisionApp extends React.Component {
	state = {
			options: []
	};
	handleDeleteOptions = () => {
		this.setState(() => ({options: []}));
	}

	handleDeleteOption = (optionToRemove) => {
		this.setState((prevState) => ({
			options: prevState.options.filter(option => option !== optionToRemove)
		}));
	}

	addOption = (option) => {
		this.setState((prevState) => ({options: prevState.options.concat([option])}));
	}

	handlePick = () => {
		const rand = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[rand];
		console.log(option);
	}
	componentDidMount(prevProps, prevState){
		console.log('Fetching Data');
		const json = localStorage.getItem('options');
		const options = JSON.parse(json);
		if(options)
		this.setState(() => ({options}));
	}

	componentDidUpdate(prevProps, prevState){
		console.log('Saving Data');
		if(prevState.options.length !== this.state.options.length) {
			const json = JSON.stringify(this.state.options);
			localStorage.setItem('options', json);
		}
	}	
	
	render(){
		const title = 'Indecision';
		const subtitle = 'Put your life in the hands of a machine';
		return (
			<div>
			<Header title={title} subtitle={subtitle} />
			<Action handlePick={this.handlePick} hasOptions={this.state.options.length > 0}/>
			<Options 
			options={this.state.options}
			handleDeleteOptions={this.handleDeleteOptions}
			handleDeleteOption={this.handleDeleteOption}
			/>
			<AddOption addOption={this.addOption}/>
			</div>
			)
	}
}