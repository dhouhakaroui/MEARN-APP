import {React,useEffect }from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { getusers } from '../actions/userActions'
import UserItem from '../components/userItem'
import Spinner from '../components/Spinner'
import '../res/users.css'

function Users() {
    const users=useSelector(state=>state.userReducer.users)
    const dispatch = useDispatch()
    useEffect(() => {dispatch(getusers())}, [])
    return (
        <div> {!users? <Spinner/>:     
            <div class="container">
                <div class="row">                    
                    {users.map(el=><UserItem user={el} />)}                           
                </div>
            </div>} 
        </div>
    )
}

export default Users
