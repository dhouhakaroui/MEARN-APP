import {React ,useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {loadUser} from '../actions/authActions'
import Spinner from '../components/Spinner'
import ProfileCard from '../components/ProfileCard'
import NewPost from '../components/newPost'
function Profile() {
    const dispatch=useDispatch()
    const auth=useSelector(state=>state.authReducer)
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
