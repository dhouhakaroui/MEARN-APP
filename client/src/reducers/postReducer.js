import {ADD_POST,GET_POSTS,GET_POST,DELETE_POST,GET_ERRORS} from '../actions/types'
const initialState = {
    posts: [],
    post: {},
    errors:null
}

export default (state = initialState,action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state, posts: [action.payload,...state.posts],errors :null
            }   
        case GET_POSTS:
        return {
            ...state,
            posts: action.payload,errors:null
        }
        case GET_POST:
        return {
            ...state,
            post: action.payload,errors:null
        }
        case DELETE_POST:
        return {
            ...state,errors:null,
            posts: state.posts.filter(post => post._id !== action.payload )
        }
        case GET_ERRORS: 
        return {...state ,
            errors:action.payload};
        default:
            return state
    }
}

