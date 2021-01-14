import {React,useState}from 'react'
import { MDBInput, MDBBtn } from 'mdbreact';
import {Form} from 'react-bootstrap'
import { updateInfo } from '../actions/authActions';
import { useDispatch, useSelector } from 'react-redux';

function EditProfile({history}) {
    const user=useSelector(state=>state.authReducer).user
    const dispatch=useDispatch()
    const [Info,setInfo]= useState(user)
    const avat=(Info.gender==="male")? "man.PNG":(Info.gender==="female")?"women.PNG":"avatar.jpg"
    const handleChange=(e)=>{setInfo({...Info,avatar:avat,[e.target.name]:e.target.value})}
    const submit=e=>{
        e.preventDefault()
        dispatch(updateInfo(Info))
        history.push('/profile')
    }

    return (
        <div style={{padding:"20px",margin:"20px", border:"2px solid #2BBBAD",borderRadius:"5px"}}>
            <form onSubmit={submit} className="formedit">
            <div>
                {user.avatar&& <img src={user.avatar} alt="avatar" style={{width:"50%",borderRadius: "50%"}}/>}
            </div>            
            <MDBInput label="Your first name" icon="user" name='firstName'value={Info.firstName} onChange={handleChange} group type="text" validate error="wrong" success="right" />
            <MDBInput label="Your last name" icon="user" name='lastName'value={Info.lastName} onChange={handleChange} group type="text" validate error="wrong" success="right" />
            <MDBInput label="Your age" icon="calendar-alt" name='age'value={Info.age} onChange={handleChange} group type="text" validate error="wrong" success="right" />
            <MDBInput label="Your phone" icon="phone" name='phone'value={Info.phone} onChange={handleChange} group type="text" validate error="wrong" success="right" />
            <MDBInput label="Your status" icon="briefcase" name='status'value={Info.status} onChange={handleChange} group type="text" validate error="wrong" success="right" />
            <MDBInput label="Your company" icon="building" name='company'value={Info.company} onChange={handleChange} group type="text" validate error="wrong" success="right" />
            <MDBInput label="Your address" icon="map-marker-alt" name='address'value={Info.address} onChange={handleChange} group type="text" validate error="wrong" success="right" />
            <MDBInput label="Your website" icon="retweet" name='website'value={Info.website} onChange={handleChange} group type="text" validate error="wrong" success="right" />
            <MDBInput label="Your linkedin"  icon="linkedin" name='linkedin'value={Info.linkedin} onChange={handleChange} group type="text" validate error="wrong" success="right" />
            <MDBInput label="Your github"  icon="github" name='github'value={Info.github} onChange={handleChange} group type="text" validate error="wrong" success="right" />
            <MDBInput label="Your facebook" icon="facebook" name='facebook'value={Info.facebook} onChange={handleChange} group type="text" validate error="wrong" success="right" />
            <MDBInput label="Your instagram" icon="instagram" name='instagram'value={Info.instagram} onChange={handleChange} group type="text" validate error="wrong" success="right" />
            <MDBInput label="Your twitter" icon="twitter" name='twitter'value={Info.twitter} onChange={handleChange} group type="text" validate error="wrong" success="right" />
            <MDBInput label="bio" type="textarea" icon="pencil-alt" name='bio'value={Info.bio} onChange={handleChange} group type="text" validate error="wrong" success="right" />            
            <Form.Control style={{width:"40%"}} as="select" name='gender' onChange={handleChange}>
                <option value=''>choose gender </option>
                <option value='male'>man</option>
                <option value='female'>women</option>
            </Form.Control>
            <MDBBtn type='submit'>Update Profile</MDBBtn>
            </form>
        </div>
    )
}

export default EditProfile
