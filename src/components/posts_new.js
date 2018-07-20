import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
// reduxForm allowing component to talk to redux store

class PostsNew extends Component {
	renderTitleField = (field) => {
		// so field knows its responsible for text input
		return (
			<div>
				<input 
					type="text"
					// field.input is an object which contains object, props, and value
					{...field.input}
				/>
			</div>
		)
	}

	render(){
		return (
			<form>
				<Field 
					name="title"
					// supposed to be a function that returns jsx
					component={this.renderTitleField}
				/>
			</form>	
		)
	}
}

export default reduxForm({
	form: 'PostsNewForm' 	// pass a function helper (just like connect) // unique string
})(PostsNew); 