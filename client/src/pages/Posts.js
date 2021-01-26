import {React  ,useEffect }from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { getPosts } from '../actions/postActions'
import Alert from '../components/Alert'
import NewPost from '../components/newPost'
import PostItem from '../components/postItem'
import Spinner from '../components/Spinner'


function Posts() {
    const posts=useSelector(state=>state.postReducer)
    const user=useSelector(state=>state.authReducer).user
    const dispatch = useDispatch()
    useEffect(() => {dispatch(getPosts())}, [posts])
    return (
        <div className="feed">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        {!posts ? 
                        <Spinner/>: 
                        <div>
                            {/* {!posts.errors ? null:<Alert errors={posts.errors}/>} */}
                            {user ? <NewPost user={user}/>:null }
                            {posts.posts ?posts.posts.map(el => <PostItem key={el._id} post={el}/>):null}
                        </div> }
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Posts
