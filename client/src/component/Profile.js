import {React ,useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {loadUser} from '../actions/authActions'

function Profile() {
    const dispatch=useDispatch()
    const auth=useSelector(state=>state.authReducer)
    useEffect(() => {dispatch(loadUser())}, [])
    return (
        <div>
         {auth.user&& <h1>{`hello ${auth.user.lastName} ${auth.user.firstName}`}</h1> } 
        </div>
    )
}

export default Profile
