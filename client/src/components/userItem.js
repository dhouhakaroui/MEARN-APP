import React from 'react'
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { deleteuser } from '../actions/userActions'
function UserItem({user}) {
    const auth=useSelector(state=>state.authReducer)
    const dispatch = useDispatch()
    return (      
      <div class="col-12 col-sm-6 col-md-4 col-lg-3">       
        <div class="our-team">
          <Link to={`/User/${user._id}`}>
            <div class="picture">
              <img class="img-fluid" src={user.avatar}/>
            </div>
          </Link>
          <div class="team-content">
            <h3 class="name">{user.firstName +' ' +user.lastName}</h3>
            <h4 class="title">{user.age}</h4>
          </div>
          {(!auth.isAuth || !auth.user.role)?null:
          <div onClick={()=>dispatch(deleteuser(user._id))}>
            <i class="fas fa-user-times" style={{color:"red" }}/>
          </div>}
          <ul class="social">
            <li><i class="fab fa-facebook"/></li>
            <li><i class="fab fa-instagram"/></li>
            <li><i class="fab fa-linkedin"/></li>
            <li><i class="fab fa-github"/></li>
          </ul>
        </div>
      </div>
    )
}

export default UserItem
