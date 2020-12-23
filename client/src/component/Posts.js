import {React , useState ,useEffect }from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { getPosts } from '../actions/postActions'
import NewPost from './newPost'
import Spinner from './Spinner'


function Posts() {
    const posts=useSelector(state=>state.postReducer.posts)
    const user=useSelector(state=>state.authReducer.user)
    const dispatch = useDispatch()
    useEffect(() => {dispatch(getPosts())}, [])
    return (
        <div className="App">            
            {posts?
            <div>
                {user&&<NewPost user={user}/>}
                {posts.map(el=>
                    <div>
                    <h1>{el.name}</h1> 
                    <p>{el.text}</p>
                    </div>)
            }</div> :
            <Spinner/>}
        </div>
    )
}

export default Posts
