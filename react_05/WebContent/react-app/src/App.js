import React, { Component, Fragment } from 'react';
import MyName from './components/MyName';
import Counter from './components/Counter';

class App extends Component {
	render(){
		return (
			<Fragment>
				<MyName />
				<Counter />
			</Fragment>
		);
	}
}

export default App;