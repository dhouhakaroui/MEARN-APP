import {React,useEffect }from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { getuser } from '../actions/userActions'
import Spinner from '../components/Spinner'
function User({match}) {
    const user=useSelector(state=>state.userReducer.user)
    const dispatch = useDispatch()
    useEffect(() => {dispatch(getuser(match.params.UserId))}, [])
    return (
        <div>{(!user)? <Spinner/>:
            <div>{user.firstName +' ' +user.lastName}</div>
        }</div>
    )
}

export default User
