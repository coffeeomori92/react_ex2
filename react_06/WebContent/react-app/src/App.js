import React, { Component } from 'react';

class App extends Component {
	constructor(props){
		super(props);
		console.log('constructor');
	}
	componentDidMount(){
		console.log('componentDidMount');
	}
	componentDidCatch(err, info){
		console.log(err);
		console.log(info);
	}
	render(){
		console.log('App render()');
		return (
			<div>
				<h1>Hello React</h1>
			</div>
		);
	}
}

export default App;
