import {GET_USERS,GET_USER,DELETE_USER,GET_ERRORS} from '../actions/types'
const initialState = {
    users: [],
    user: {},
    errors:null
}

export default (state = initialState,action) => {
    switch (action.type) {   
        case GET_USERS:
        return {
            ...state,
            users: action.payload,errors:null
        }
        case GET_USER:
        return {
            ...state,
            user: action.payload,errors:null
        }
        case DELETE_USER:
        return {
            ...state,errors:null,
            users: state.users.filter(user => user._id !== action.payload )
        }
        case GET_ERRORS: 
        return {...state ,
            errors:action.payload};
        default:
            return state
    }
}

