import {React ,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {loadUser} from '../actions/authActions'
import Spinner from '../components/Spinner'
import ProfileCard from '../components/ProfileCard'
import NewPost from '../components/newPost'
import PostItem from '../components/postItem'
function Profile() {
    const dispatch=useDispatch()
    const auth=useSelector(state=>state.authReducer)
    const posts = useSelector(state => state.postReducer)
    useEffect(() => {dispatch(loadUser())}, [])
    return (
        <div > {!auth?<Spinner/>:
            <div>{auth.user&& 
                <div  style={{margin:"1em"}}>
                    <ProfileCard auth={auth} />
                    <NewPost user={auth.user}/>  

                </div>
            }</div>}
        </div>
    )
}
export default Profile
