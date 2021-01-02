import axios from 'axios'
import {GET_USERS,GET_USER,DELETE_USER,GET_ERRORS} from '../actions/types'

//Get users
export const getusers = () => dispatch => {
    axios
        .get('/users/allUsers')
        .then(res => dispatch({
            type: GET_USERS,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: null
        }))
}
//Get user
export const getuser = (id) => dispatch => {
    axios
        .get(`/users/${id}`)
        .then(res => dispatch({
            type: GET_USER,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: null
        }))
}
//Delete user
export const deleteuser = (userId) => dispatch => {
    axios
        .delete(`/users/delete/${userId}`)
        .then(res => dispatch({
            type: DELETE_USER,
            payload: userId
        }))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
}