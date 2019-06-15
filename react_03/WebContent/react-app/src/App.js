import React, { Component } from 'react';

class Counter extends Component {
	constructor(props){
		super(props);
		this.state = {
				value : 0
		};
		this.ClickHandler = this.ClickHandler.bind(this);
	}
	ClickHandler(){
		this.setState({
			value : this.state.value + 1
		});
	}
	render(){
		return (
			<div>
				<h2>{this.state.value}</h2>
				<button onClick = {this.ClickHandler}>Press</button>
			</div>
		);
	}
}

class App extends Component {
	render(){
		return (
			<Counter/>
		);
	}
}


export default App;