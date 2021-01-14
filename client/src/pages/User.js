import {React,useEffect }from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { getuser } from '../actions/userActions'
import ProfileCard from '../components/ProfileCard'
import Spinner from '../components/Spinner'
function User({match}) {
    const user=useSelector(state=>state.userReducer.user)
    const dispatch = useDispatch()
    useEffect(() => {dispatch(getuser(match.params.UserId))}, [])
    return (
        <div style={{display:"flex",justifyContent:"center"}}>
            {(!user)? <Spinner/>:
            <ProfileCard user={user}/>
        }</div>
    )
}

export default User
