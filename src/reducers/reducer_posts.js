import { FETCH_POSTS, FETCH_POST, DELETE_POST  } from '../actions';
import _ from 'lodash';

export default function(state = {} , action){
	switch (action.type) {
	case DELETE_POST:
	// look at state object. if it has key of post id...just drop it and return new state object 
	return _.omit(state, action.payload);	
	case FETCH_POST:
		// const post = action.payload.data
		// // es5
		// // const newState = { ...state,  };	
		// // newState[post.id] = post;
		// // return newState;
		// es6
		return { ...state, [action.payload.data.id]: action.payload.data }

	case FETCH_POSTS:
	// console.log(action.payload.data); //[post1, post2]
	// // can you lodash .mapKeys
	return _.mapKeys(action.payload.data, 'id');

	default:
		return state;
	}
}

