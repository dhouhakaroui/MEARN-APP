import {React , useState }from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { addPost } from '../actions/postActions'
function NewPost(props) {
    const [post, setpost] = useState({
        user:props.user._id,
        name:props.user.firstName +" "+props.user.lastName ,
        text:"",
        comments:[]
    })
    const dispatch=useDispatch()
    const handleChange=(e)=>{setpost({...post,text:e.target.value})}
    const add=()=>{
        dispatch(addPost(post))
        setpost({...post,text:""})
    }
    return (
        <div>          
            <textarea type="text" value={post.text} onChange={handleChange}/>
            <button onClick={add}>submit</button>            
        </div>
    )
}

export default NewPost  
