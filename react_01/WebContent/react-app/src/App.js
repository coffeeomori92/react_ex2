import React, { Component } from 'react';

class CodeLab extends Component {
	render(){
		let text = "Hi I'm codelab!";
		let style = {
				backgroundColor : 'aqua'
		};
		return(
			// JSX	
			// ()는 사용하지 않아도 오류 발생하지 않지만 가독성을 위하여 사용
			<div style = {style}>
				{text}
			</div>
		);
	}
}

class App extends Component {
	render(){
		return (
			<CodeLab/>
		);
	}
}


export default App;