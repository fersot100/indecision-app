import AddOption from './AddOption.js';
import Header from './Header.js';
import Options from './Options.js';
import Action from './Action.js';
import OptionModal from './OptionModal.js'
export default class IndecisionApp extends React.Component {
	state = {
			options: [],
			selectedOption: undefined
	}

	handleDeleteOptions = () => {
		this.setState(() => ({options: []}));
	}

	handleClearSelectedOption = () => {
		console.log('Clear')
		this.setState(() => ({selectedOption: undefined}));
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
		this.setState(() => ({selectedOption: option}));
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
			<div className="container">
			<Action handlePick={this.handlePick} hasOptions={this.state.options.length > 0}/>
			<div className="widget">
				<Options 
				options={this.state.options}
				handleDeleteOptions={this.handleDeleteOptions}
				handleDeleteOption={this.handleDeleteOption}
				/>
				<AddOption addOption={this.addOption}/>
			</div>
				
				<OptionModal 
					handleClearSelectedOption={this.handleClearSelectedOption} 
					selectedOption={this.state.selectedOption}
				/>
				</div>
			</div>
			)
	}
}