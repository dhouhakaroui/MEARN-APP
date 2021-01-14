import {React ,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {loadUser} from '../actions/authActions'
import Spinner from '../components/Spinner'
import ProfileCard from '../components/ProfileCard'
import NewPost from '../components/newPost'
import PostItem from '../components/postItem'
import { getPostsUser } from '../actions/postActions'
function Profile() {
    const dispatch=useDispatch()
    const auth=useSelector(state=>state.authReducer)
    const posts = useSelector(state => state.postReducer).posts
    useEffect(() => {
        dispatch(loadUser());
    }, [])
    useEffect(() => {
        dispatch(getPostsUser(auth.user._id))
    }, [auth.user,posts])
    return (
        <div > 
            {!auth?
            <Spinner/>:
            <div>
                {auth.user ? 
                <div  style={{margin:"1em",display:"flex"}}>
                    <ProfileCard user={auth.user}/>
                    <div style={{width:"60%",padding:"1em"}}>
                        <NewPost user={auth.user} /> 
                        <div>
                            {posts ? posts.map(el => <PostItem key={el._id} post={el}/>):null}
                        </div> 
                    </div>
                </div>:null }
            </div> }            
        </div>
    )
}
export default Profile
