import React from 'react'

function Posttext({post}) {
    const avatar =post.avatar
    const dateP =new Date(post.date)
    const date = dateP.toUTCString()
    return (
        <div className="mb-3" style={{border:"2px solid #2BBBAD",borderRadius:"10px",display:"flex",padding:"20px"}}>
            <img src={process.env.PUBLIC_URL +"/"+avatar} style={{width:"20%",height:"80%"}}/>
            <div>
                <h3>{post.name}</h3>
                <p>{post.text}</p>
                <h6>{date}</h6>
            </div>
        </div>
    )
}

export default Posttext
