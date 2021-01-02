import axios from 'axios'
import setToken from './setToken'
import {ADD_POST, GET_POSTS,GET_POST, DELETE_POST, GET_ERRORS} from './types'

// new post
export const addPost = (postData) => dispatch => {
    setToken()
    axios
        .post('/post',postData)
        .then(res => dispatch({
            type: ADD_POST,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
}

//Get Posts
export const getPosts = () => dispatch => {
    axios
        .get('/post')
        .then(res => dispatch({
            type: GET_POSTS,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: null
        }))
}

//Get Post
export const getPost = (id) => dispatch => {
    axios
        .get(`/post/${id}`)
        .then(res => dispatch({
            type: GET_POST,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: null
        }))
}

//Delete Post

export const deletePost = (postId) => dispatch => {
    axios
        .delete(`/post/delete/${postId}`)
        .then(res => dispatch({
            type: DELETE_POST,
            payload: postId
        }))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
}

//Delete Comment
export const deleteComment = (postId,commentId) => dispatch => {
    axios
        .delete(`/post/delete_comment/${postId}/${commentId}`)
        .then(res => dispatch({
            type: GET_POST,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
}
//update text post
export const updatePost=(postupdated)=>dispatch=>{
    axios.put(`/${postupdated._id}`)
        .then(res=>dispatch({
            type: GET_POST,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
}