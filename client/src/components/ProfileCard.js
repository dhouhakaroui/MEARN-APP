import React from 'react'
import {Link} from 'react-router-dom'
import {Card,Image} from 'react-bootstrap'

function ProfileCard({auth}) {
    const src=auth.user.avatar||((auth.user.gender==="male")? "man.PNG":"women.PNG")
    return (
        <Card >
            <div style={{display:"flex"}}>
                <div>
                    <Image src={src} style={{width:"15rem"}} roundedCircle />        
                </div>
                <div>             
                <Card.Title>{auth.user.firstName +' ' +auth.user.lastName}</Card.Title>                
                <p>hi, i'm a user....</p>                           
                <h4>age : {auth.user.age}</h4>
                <h4>email :{auth.user.email}</h4>                
                <Link className="teal-text" to="/Editprofile">Edit Profile</Link>                
                </div>
            </div>
        </Card>          
    )
}

export default ProfileCard
