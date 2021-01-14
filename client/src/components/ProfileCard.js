import React from 'react'
import {Link} from 'react-router-dom'
import {MDBBtn} from 'mdbreact'
import { useSelector } from 'react-redux'
import Spinner from './Spinner'

function ProfileCard({user}) {
    const auth =useSelector(state=>state.authReducer.user)||0
    const name=user.firstName +' ' +user.lastName
    const avatar = user.avatar
    return (
        <div style={{width:"40%" ,border:"2px solid #2BBBAD",borderRadius:"5%",padding:"0 2em"}} >
            {!user? 
            <Spinner/> :
            <div>
                <div style={{textAlign:"center"}}>                    
                    {user.avatar&& <img src={process.env.PUBLIC_URL +"/"+avatar} alt="avatar" style={{width:"50%",borderRadius: "50%"}}/>}    
                    <div>
                        <h1 className="blue-text">{name}</h1>
                        <hr className="blue-text"/>
                        {(user._id=== auth._id)&&
                        <Link  to="/Editprofile">
                            <MDBBtn gradient="blue" >Edit Profile</MDBBtn> 
                        </Link>}
                    </div>
                </div>
                <div>
                    {user.role? <h2>Admin</h2>:null}
                    {user.bio && <h4> Bio : {user.bio} </h4>}
                    <div style={{border:"2px solid #2BBBAD",borderRadius:"25px" ,padding:"20px"}}>
                        {user.age?
                        <div>
                            <i className="fas fa-calendar"/> &nbsp;{user.age}
                        </div>:null}                  
                        {user.email&&
                        <div>
                            <i className="fas fa-envelope"/>&nbsp;{user.email}
                        </div>}
                        {user.status&&
                        <div>
                            <i className="fas fa-briefcase"/> &nbsp;{user.status}
                        </div>}
                        {user.company&&
                        <div>
                            <i className="fas fa-building"/> &nbsp;{user.company}
                        </div>}
                        {user.address&&
                        <div>
                            <i className="fas fa-map-marker-alt"/> &nbsp;{user.address}
                        </div>}
                        {user.phone&&
                        <div>
                            <i className="fas fa-phone-alt"/> &nbsp;{user.phone}
                        </div>}
                        {user.website&&
                        <div>
                            <i className="fas fa-retweet"/> &nbsp;{user.website}
                        </div>}
                        {user.linkedin&&
                        <div>
                            <i className="fab fa-linkedin"/> &nbsp;{user.linkedin}
                        </div>}
                        {user.github&&
                        <div>
                            <i className="fab fa-github"/> &nbsp;{user.github}
                        </div>}
                        {user.facebook&&
                        <div>
                            <i className="fab fa-facebook-f"/> &nbsp;{user.facebook}
                        </div>}
                        {user.instagram&&
                        <div>
                            <i className="fab fa-instagram"/> &nbsp;{user.instagram}
                        </div>}
                        {user.twitter&&
                        <div>
                            <i className="fab fa-twitter"/> &nbsp;{user.twitter}
                        </div>}
                    </div>
                </div>
            </div>}
        </div>           
    )
}

export default ProfileCard
