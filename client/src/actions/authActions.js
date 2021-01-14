import {REGISTER_SUCCESS,REGISTER_FAIL,LOGIN_SUCCESS,LOGIN_FAIL,LOAD_USER_SUCCESS,LOAD_USER_FAIL,LOGOUT} from './types'
import axios from 'axios'
import setToken from './setToken'

//register
export const registerUser=info=> dispatch=>{
    axios.post('/register',info)
        .then(res=>dispatch({
            type:REGISTER_SUCCESS,
            payload:res.data
        }))
        .catch(err=>dispatch({
            type:REGISTER_FAIL,
            payload:err.response.data.errors
        }))
}
// get profile
export const loadUser=()=> dispatch=>{
    setToken()
    axios.get('/login')
        .then(res=>dispatch({
            type:LOAD_USER_SUCCESS,
            payload:res.data
        }))
        .catch(err=>dispatch({
            type:LOAD_USER_FAIL,
            payload:err.response.data.errors
        }))
}

//login 
export const loginUser =data=>dispatch=>{
    axios.post("/login",data)
        .then(res=>dispatch({
            type:LOGIN_SUCCESS,
            payload:res.data
        }))
        .catch(err=>dispatch({
            type:LOGIN_FAIL,
            payload:err.response.data.errors
        }))
}
//log out
export const logoutUser=()=>dispatch=>{
    dispatch({type:LOGOUT})
}

//update info 
export const updateInfo=(info)=>dispatch=>{
    setToken()
    axios.put('/users/update',info)
    .then(res => dispatch(loadUser()))
    .catch(err => dispatch({
        type: LOAD_USER_FAIL,
        payload: err.response.data
    }))
}