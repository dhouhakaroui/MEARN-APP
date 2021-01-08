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
            payload: err.response.data
        }))
}
//Get Posts by user
export const getPostsUser = (user_id) => dispatch => {
    axios
        .get(`/post/posts/${user_id}`)
        .then(res => dispatch({
            type: GET_POSTS,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
}
//Get Post by id
export const getPost = (id) => dispatch => {
    axios
        .get(`/post/${id}`)
        .then(res => dispatch({
            type: GET_POST,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
}

//Delete Post

export const deletePost = (postId) => dispatch => {
    setToken()
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

//update text post
export const updatePost=(postupdated)=>dispatch=>{
    setToken()
    axios.put(`/post/${postupdated._id}`,postupdated)
        .then(res=>dispatch(getPosts()))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
}

// Like post
export const addLike = (postId) => dispatch => {
    setToken()
    axios
        .put(`/post/like/${postId}`)
        .then(res => dispatch(getPosts()))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
}

// disLike post
export const removeLike = (postId) => dispatch => {
    setToken()
    axios
        .put(`/post/dislike/${postId}`)
        .then(res => dispatch(getPosts()))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
}

//Add Comment
export const addComment = (postId,commentData) => dispatch => {
    setToken()
    axios
        .put(`/post/addcomment/${postId}`,commentData)
        .then(res => dispatch(getPost()))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
}

//Delete Comment
export const deleteComment = (postId,commentId) => dispatch => {
    setToken()
    axios
        .put(`/post/delete_comment/${postId}/${commentId}`)
        .then(res => dispatch(getPost()))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
}
//update Comment
export const updateComment = (postId,commentData) => dispatch => {
    setToken()
    axios
        .put(`/post/update_comment/${postId}/${commentData._id}`,commentData)
        .then(res => dispatch(getPost()))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
}