import React from 'react'

function Posttext({post}) {
    const avatar =post.avatar
    const dateP =new Date(post.date)
    const date = dateP.toUTCString()
    return (
        <div  style={{border:"2px solid #2BBBAD",display:"flex",padding:"20px"}}>
            <img src={process.env.PUBLIC_URL +"/"+avatar} style={{width:"20%",height:"80%"}}/>
            <div>
                <h3>{post.name}</h3>
                <h6>{post.text}</h6>
                {date}
            </div>
        </div>
    )
}

export default Posttext
