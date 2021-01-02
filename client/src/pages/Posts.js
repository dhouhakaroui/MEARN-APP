import {React , useState ,useEffect }from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { getPosts } from '../actions/postActions'
import NewPost from '../components/newPost'
import PostItem from '../components/postItem'
import Spinner from '../components/Spinner'


function Posts() {
    const posts=useSelector(state=>state.postReducer.posts)
    const user=useSelector(state=>state.authReducer.user)
    const dispatch = useDispatch()
    useEffect(() => {dispatch(getPosts())}, [])
    return (
        <div className="feed">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        {!posts ?<Spinner/>: <div>
                            {user ? <NewPost user={user}/>:null }
                            {posts.map(el => <PostItem key={el._id} post={el}/>)}
                        </div> }
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Posts
