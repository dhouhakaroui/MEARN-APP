import React from 'react'
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { addAdmin, deleteuser } from '../actions/userActions'
function UserItem({user}) {
    const auth=useSelector(state=>state.authReducer)
    const dispatch = useDispatch()
    const dateuser =new Date(user.date)
    const date = dateuser.toUTCString()
    return (      
      <div className="col-12 col-sm-6 col-md-4 col-lg-3">       
        <div className="our-team">
          <Link to={`/User/${user._id}`}>
            <div className="picture">
              <img className="img-fluid" src={user.avatar}/>
            </div>
          </Link>
          <div className="team-content">
            <h3 className="name">{user.firstName +' ' +user.lastName}</h3>
            <h4 className="title">{date}</h4>
          </div>
          {(!auth.isAuth || !auth.user.role)?null:
          <div>
            <div onClick={()=>dispatch(deleteuser(user._id))}>
              <i className="fas fa-user-times" style={{color:"red" }}/>
            </div>
            <div  onClick={()=>dispatch(addAdmin(user._id))} > 
              <i className="fas fa-user-plus" style={{color:"blue" }}/>
            </div>
          </div>}
          <ul className="social">
            <li><i className="fab fa-facebook"/></li>
            <li><i className="fab fa-instagram"/></li>
            <li><i className="fab fa-linkedin"/></li>
            <li><i className="fab fa-github"/></li>
          </ul>
        </div>
      </div>
    )
}

export default UserItem
