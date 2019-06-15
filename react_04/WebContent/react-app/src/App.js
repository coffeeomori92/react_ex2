import React from 'react';

class ContactInfo extends React.Component {
	render(){
		return (
			<div>
				{this.props.contact.name} {this.props.contact.phone}
			</div>
		);
	}
}

class Contact extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			contactData : [
				{name : 'Abet', phone : '010-0000-0001'},
				{name : 'Betty', phone : '010-0000-0002'},
				{name : 'Charlie', phone : '010-0000-0003'},
				{name : 'David', phone : '010-0000-0004'}
			]	
		};
	}
	render(){
		const mapToComponent = function(data){
			return data.map(function(contact, i){
				return (
					<ContactInfo contact = {contact} key = {i}/>
				); 
			});
		};
		return (
			<div>
				<p>Abet 010-0000-0001</p>
				<p>Betty 010-0000-0002</p>
				<p>Charlie 010-0000-0003</p>
				<p>David 010-0000-0004</p>
			</div>
		);
	}
}

class App extends React.Component {
	render(){
		return (
			<Contact></Contact>
		);
	}
}

export default App;
