import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPost } from '../actions/postActions'
import NewComment from '../components/NewComment'
import Posttext from '../components/posttext'
import Spinner from '../components/Spinner'
import CommentItem from '../components/commentItem'

function Post({match}) {
    const dispatch = useDispatch()
    useEffect(() => {dispatch(getPost(match.params.postId))}, [])
    const post=useSelector(state=>state.postReducer).post
    const auth=useSelector(state=>state.authReducer)
    
    return (
        <div>
            {!post ?
            <Spinner/>:           
            <div className="feed">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Posttext post={post}/>
                            {auth?<NewComment user={auth.user} postId={post._id}/>:null}
                            {post.comments?post.comments.map(el=><CommentItem post={post} comment={el}/>):null}
                        </div>
                    </div>
                </div>
            </div>
            }            
        </div>
    )
}

export default Post
