import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CodeLab extends Component {
	render(){
		return(
			// JSX	
			// ()는 사용하지 않아도 오류 발생하지 않지만 가독성을 위하여 사용
			<div>
				<h1>Hello {this.props.name}</h1>
				<h2>{this.props.number}</h2>
				<div>{this.props.children}</div>
			</div>
		);
	}
}

CodeLab.propTypes = {
	name : PropTypes.string,
	number : PropTypes.number.isRequired 
};

CodeLab.defaultProps = {
	name : 'Unknown',
	number : 5
};

class App extends Component {
	render(){
		return (
			<CodeLab>this.props.children</CodeLab>
		);
	}
}


export default App;