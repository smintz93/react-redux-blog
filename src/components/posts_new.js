import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
// reduxForm allowing component to talk to redux store

class PostsNew extends Component {
	renderField = (field) => {
		// so field knows its responsible for text input
		return (
			<div className="form-group">
				<label>{field.label}:</label>
				 <input 
				 	className="form-control" 
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
					label="Title For Post"
					name="title"
					// supposed to be a function that returns jsx
					component={this.renderField}
				/>
				<Field 
					label="Categories"
					name="Categories"
					component={this.renderField}
				/>
				<Field 
					label="Post Content"
					name="Content"
					component={this.renderField}
				/>
			</form>	
		)
	}
}

// values is what user enters into the form
validate = (values) => {
	// need to return an object
	const errors = {} 
	// validate inputs from values


	// if errors is empty form is fine to submit.
	// if erros has any props, redux form assumes form is invalid
	return errors; 	
}

export default reduxForm({
	validate,
	form: 'PostsNewForm' 	// pass a function helper (just like connect) // unique string
})(PostsNew); 

