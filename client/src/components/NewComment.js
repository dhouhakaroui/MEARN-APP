import { MDBBtn } from 'mdbreact'
import {React , useState,useEffect }from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { addComment } from '../actions/postActions'
function NewPost({user,postId}) {
    const posts=useSelector(state=>state.postReducer)
    const dispatch=useDispatch()
    const [comment, setcomment] = useState({
        user:user._id,
        name:user.firstName +" "+user.lastName ,
        text:"",
        avatar:user.avatar||"avatar.jpg"
    })   
    const handleChange=(e)=>{setcomment({...comment,text:e.target.value})}
    const [errors, setErrors] = useState(null)
    useEffect(() => {if (posts.errors){ setErrors(posts.errors)}},[posts.errors]) 
    const add=(e)=>{
        e.preventDefault()
        dispatch(addComment(postId,comment))
        setcomment({...comment,text:""})
    }
    return (
        <div className="card" className="mb-3" style={{border:"2px solid #2BBBAD",borderRadius:"10px"}}>    
            <div className="card-body">   
                <form onSubmit={add}>
                    <textarea className="form-control" placeholder="Create a comment..." type="text" 
                        onFocus={()=>setErrors(null)} value={comment.text} onChange={handleChange}/>
                    <MDBBtn type="submit">submit</MDBBtn> 
                </form> 
            </div>             
        </div>
    )
}

export default NewPost 