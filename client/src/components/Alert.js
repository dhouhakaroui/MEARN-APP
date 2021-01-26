import React from 'react'
import {MDBAlert} from 'mdbreact'
function Alert({errors}) {
    return (
        <div>            
            {errors.map((el,i)=>{
                <MDBAlert  key={i} color="danger">
                    {el.msg}
                </MDBAlert>                
            })}            
        </div>
    )
}

export default Alert
