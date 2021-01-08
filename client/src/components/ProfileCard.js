import React from 'react'
import {Link} from 'react-router-dom'
import {Card,Image} from 'react-bootstrap'

function ProfileCard({user}) {
    const src=user.avatar||((user.gender==="male")? "man.PNG":"women.PNG")
    return (
        <div className="col-md-12">
            <Card  >
            <div style={{display:"flex"}}>
                <div>
                    <Image src={src} style={{width:"15rem"}} roundedCircle />        
                </div>
                <div>             
                <Card.Title>{user.firstName +' ' +user.lastName}</Card.Title>                
                <p>hi, i'm a user....</p>                           
                <h4>age : {user.age}</h4>
                <h4>email :{user.email}</h4>                
                <Link className="teal-text" to="/Editprofile">Edit Profile</Link>                
                </div>
            </div>
        </Card>  
        </div>           
    )
}

export default ProfileCard
