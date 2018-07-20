import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
// reduxForm allowing component to talk to redux store

class PostsNew extends Component {
	render(){
		return (
			<div>
				PostsNew!
			</div>
		)
	}
}

export default reduxForm({
	// pass a function
	form: 'PostsNewForm'
})(PostsNew); 