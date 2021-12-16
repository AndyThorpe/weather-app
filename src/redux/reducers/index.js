
import {
	FETCH_DATA_BEGIN,
	FETCH_DATA_SUCCESS,
	FETCH_DATA_FAILURE,
	SAVE_SEARCH
  } from '../actions/index.js';
  
  const initialState = {
		data: {},
		results: [],
		count: 0,
		loading: false,
		error: null,
		update: function() {
			console.log("test");
		}
  };
  
  export default function productReducer(state = initialState, action) {
	switch(action.type) {
	  case FETCH_DATA_BEGIN:
		return {
		  ...state,
		  loading: true,
		  error: "Still Loading"
		};
  
	  case FETCH_DATA_SUCCESS:
		return {
		  ...state,
		  loading: false,
			data: action.payload.data,
			error: ""
		};
  
	  case FETCH_DATA_FAILURE:
		return {
		  ...state,
		  loading: false,
		  error: action.payload.error,
		  data: {}
		};

		case SAVE_SEARCH:
		return {
		  ...state,
		  loading: false,
			data: {},
			results: [...state.results, action.payload.result],
			error: ""
		};

	  default:
		// ALWAYS have a default case in a reducer
		return state;
	}
  }