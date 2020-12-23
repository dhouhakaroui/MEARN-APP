import {React , useState }from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { addPost } from '../actions/postActions'
function NewPost(props) {
    const [post, setpost] = useState({
        user:props.user._id,
        name:props.user.firstName,
        text:"",
        comments:[]
    })
    const dispatch=useDispatch()
    const handleChange=(e)=>{setpost({...post,text:e.target.value})}
    return (
        <div>          
            <textarea type="text" onChange={handleChange}/>
            <button onClick={()=>{dispatch(addPost(post))}}>submit</button>            
        </div>
    )
}

export default NewPost
