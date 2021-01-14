import React from 'react'

function Posttext({post}) {
    const avatar ="avatar.png"||post.avatar
    const dateP =new Date(post.date)
    const date = dateP.toUTCString()
    return (
        <div  style={{border:"2px solid #2BBBAD",display:"flex",padding:"20px"}}>
            <img src={avatar} style={{width:"20%"}}  alt=""/>
            <div>
            <h3>{post.name}</h3>
            <p>{post.text}</p>
            {date}
            </div>
        </div>
    )
}

export default Posttext
