import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
// reduxForm allowing component to talk to redux store

class PostsNew extends Component {
	renderField = (field) => {
		// so field knows its responsible for text input
		// es6 syntax destructor
		const { meta: { touched, error } } = field;
		const className = `form-group ${touched && error ? 'has-danger' : "" }`  


		return (
			<div className={className}>
				<label>{field.label}:</label>
				 <input 
				 	className="form-control" 
					type="text"
					// field.input is an object which contains object, props, and value
					{...field.input}
				/>
				<div className="text-help">
				{touched ? error : "" }
				</div>
			</div>
			// redux form looks at name property 
		)
	}
	onSubmit = (values) => {
		// this === compononet
		// using arrow function instead
		console.log(values)
	}

	render(){
		const { handleSubmit } = this.props;

		return (
			<form onSubmit={handleSubmit(this.onSubmit)}>
				<Field 
					label="Title For Post"
					name="title"
					// supposed to be a function that returns jsx
					component={this.renderField}
				/>
				<Field 
					label="Categories"
					name="categories"
					component={this.renderField}
				/>
				<Field 
					label="Post Content"
					name="content"
					component={this.renderField}
				/>
				<button type="submit" className="btn btn-primary">Submit</button>
				<Link to="/" className="btn btn-danger">Cancel</Link>
			</form>	
		)
	}
}

// values is what user enters into the form
// called by reduxForm when user submits form
function validate(values) {
	// need to return an object
	const errors = {} 
	// validate inputs from values
	if (!values.title) {
		errors.title = "Enter a title";
	}
	if (!values.categories) {
		errors.categories = "Enter some categories";
	}
	if (!values.content) {
		errors.content = "Enter some content please";
	}
	// if errors is empty form is fine to submit.
	// if erros has any props, redux form assumes form is invalid
	return errors; 	
}

export default reduxForm({
	validate,
	form: 'PostsNewForm' 	// pass a function helper (just like connect) // unique string
})(PostsNew); 

