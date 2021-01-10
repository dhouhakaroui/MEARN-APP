import React from 'react'
import {Link} from 'react-router-dom'
import {MDBBtn} from 'mdbreact'
import { useSelector } from 'react-redux'

function ProfileCard({user}) {
    const id=useSelector(state=>state.authReducer.user._id)
    const src=user.avatar||((user.gender==="male")? "man.PNG":"women.PNG")
    const name=user.firstName +' ' +user.lastName
    return (
        <div style={{width:"40%" ,border:"2px solid #2BBBAD",padding:"0 2em"}} >
            <div style={{textAlign:"center"}}>
                <div>
                    <img src={src} alt="avatar" style={{width:"50%",borderRadius: "50%"}}/>
                </div>
                <div >
                    <h1 className="blue-text">{name}</h1>
                    <hr className="blue-text"/>
                    {(user._id===id)&&<Link  to="/Editprofile">
                        <MDBBtn gradient="blue" >Edit Profile</MDBBtn> 
                    </Link>}
                </div>
            </div>
            <div>
                <h4>Bio : {user.bio}</h4>
                <div style={{border:"1px solid black" ,padding:"10px"}}>
                    <div><i className="fas fa-calendar"></i>{user.age}</div>                    
                    <div><i className="fas fa-envelope"></i>{user.email}</div>
                    <div><i className="fas fa-briefcase"></i>{user.status}</div>
                    <div><i className="fas fa-building"></i>{user.company}</div>
                    <div><i className="fas fa-map-marker-alt"></i>{user.address}</div>
                    <div><i className="fas fa-phone-alt"></i>{user.phone}</div>
                    <div><i className="fas fa-retweet"></i>{user.website}</div>
                    <div><i className="fab fa-linkedin"></i>{user.linkedin}</div>
                    <div><i className="fab fa-github"></i>{user.github}</div>
                    <div><i className="fab fa-facebook-f"></i>{user.facebook}</div>
                    <div><i className="fab fa-instagram"></i>{user.instagram}</div>
                    <div><i className="fab fa-twitter"></i>{user.twitter}</div>
                </div>
            </div>
        </div>           
    )
}

export default ProfileCard
