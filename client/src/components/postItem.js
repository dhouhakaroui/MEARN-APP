import React from 'react'
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import{MDBIcon } from 'mdbreact'

function PostItem({post}) {
    const auth=useSelector(state=>state.authReducer)
    console.log(post)
    return (
        <div className="card card-body mb-3">
        <div className="row">
            <div className="col-md-2">
                <img className="rounded float-left" src={post.avatar} alt="" width="100rem"/> 
            </div>
            <div className="col-md-10"> 
                <h3 className="teal-text">{post.name}</h3>     
                <p  >{post.text}</p>
                {Date(post.date)}
                <div className="d-flex">
                    <button type="button"  className="btn mr-1">
                        <span className="badge badge-light">{post.likes.length}</span>
                        {<i class="far fa-heart"></i>||
                        <i class="fas fa-heart"></i>}
                    </button>
                    {post._id ?
                    <Link to={`/post/${post._id}`} className="btn text-white default-color mr-1">
                        <span className="badge badge-light">{post.likes.length}</span>
                        Comments
                    </Link> :null}
                    {post.user === auth.user._id ? <div  >
                        <button type="button" className="btn btn-light mr-1">
                            <MDBIcon  icon="edit" />
                        </button>
                        <button type="button" className="btn btn-light mr-1">
                            <MDBIcon icon="trash-alt" />
                        </button></div> : 
                    null}

                </div>
            </div>
        </div>
    </div>
    )
}

export default PostItem
