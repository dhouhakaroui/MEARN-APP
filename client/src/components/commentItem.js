import { MDBIcon } from 'mdbreact'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteComment, updateComment } from '../actions/postActions'

function CommentItem({post,comment}) {
    const auth=useSelector(state=>state.authReducer)
    const dispatch = useDispatch()
    const dateC =new Date(comment.date)
    const date = dateC.toUTCString()
    const [edit, setedit] = useState(false)
    const [input, setinput] = useState(comment.text)
    const update=()=>{
        setedit(!edit);
        dispatch(updateComment(post._id,{...comment,"text":input}));
        setinput(comment.text)
    }
    return (
        <div className="mb-3" style={{border:"2px solid #2BBBAD",borderRadius:"10px",display:"flex",padding:"20px"}}>
            {(!auth.isAuth || !auth.user.role)?null:
            <div onClick={()=>dispatch(deleteComment(post._id,comment._id))}>
                <i className="fas fa-times" style={{color:"red" }}/>
            </div>}
            <img src={process.env.PUBLIC_URL +"/"+comment.avatar} style={{width:"20%",height:"80%"}}/>
            <div>
                <h3>{comment.name}</h3>
                {!edit ?  
                <p>{comment.text}</p> :
                <input type="text" value={input} onChange={e=>setinput(e.target.value)}/>
                }
                <h6>{date}</h6>
                {comment.user === auth.user._id ? 
                <div>
                    <button type="button" className="btn btn-light mr-1" onClick={update}>
                        <MDBIcon  icon="edit" />
                    </button>
                    <button type="button" onClick={()=>dispatch(deleteComment(post._id,comment._id))} className="btn btn-light mr-1">
                        <MDBIcon icon="trash-alt" />
                    </button>
                </div>: null}                
            </div> 
        </div>
    )
}

export default CommentItem
