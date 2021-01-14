import {React ,useState}from 'react'
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import{MDBIcon } from 'mdbreact'
import { deletePost,updatePost,addLike,removeLike, getPost } from '../actions/postActions'

function PostItem({post}) {
    const auth=useSelector(state=>state.authReducer)
    const dispatch = useDispatch()
    const datepost =new Date(post.date)
    const date = datepost.toUTCString()
    const [edit, setedit] = useState(false)
    const [input, setinput] = useState(post.text)
    const update=()=>{
        setedit(!edit);
        dispatch(updatePost({...post,text:input}))
    }
    const findUserLikes=(likes)=>{
        if(likes.length > 0){
            if(likes.filter(like => like.user === auth.user._id).length > 0){
                return true;}
            else{ 
                return false;}}
        else{
            return false;}
    }
    const likepost=()=>{        
        findUserLikes(post.likes)? dispatch(removeLike(post._id)):dispatch(addLike(post._id))
    }
    return (
        <div className="card card-body mb-3">
            <div className="row">
            {(!auth.isAuth || !auth.user.role)? null:
            <div onClick={()=>dispatch(deletePost(post._id))}>
                <i className="fas fa-times" style={{color:"red" }}/>
            </div>
            }
            <div className="col-md-2" >
                <img className="rounded float-left" src={post.avatar} alt="" style={{width:"100px",height:"100px"}}/> 
            </div>
            <div className="col"> 
                <h3 className="teal-text">{post.name}</h3>                  
                {!edit ?  
                <p>{post.text}</p>:
                <input type="text" value={input} onChange={e=>setinput(e.target.value)}/>
                }
                <h6>{date}</h6>
                <div className="d-flex" style={{flexWrap:"wrap"}}> 
                    <button type="button"  className="btn mr-1" onClick={()=>likepost()}>
                        {!(findUserLikes(post.likes))?
                        <i class="far fa-heart"/> :
                        <i class="fas fa-heart" style={{color:"red"}}/>
                        }  
                        <span className="badge badge-light" >{post.likes.length}</span>likes                                              
                    </button> 
                    <Link to={`/post/${post._id}`} onClick={() => {dispatch(getPost(post._id))}}>
                        <button type="button" className="btn text-white default-color mr-1">
                            <i className="far fa-comments"/>
                            <span className="badge badge-light">{post.comments.length}</span>Comments  
                        </button>
                    </Link>
                    {post.user === auth.user._id ? 
                    <div className=" d-flex">
                        <button type="button" className="btn btn-light mr-1" onClick={update}>
                            <MDBIcon  icon="edit" />
                        </button>
                        <button type="button" onClick={()=>dispatch(deletePost(post._id))} className="btn btn-light mr-1">
                            <MDBIcon icon="trash-alt" />
                        </button>
                    </div> : null}                                        
                </div>                
            </div>
        </div>
    </div>
    )
}

export default PostItem
