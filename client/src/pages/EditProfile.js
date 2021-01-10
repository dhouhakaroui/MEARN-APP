import {React ,useEffect,useState}from 'react'
import { MDBInput, MDBBtn } from 'mdbreact';
import Spinner from '../components/Spinner'
import { updateInfo } from '../actions/authActions';
import { useDispatch, useSelector } from 'react-redux';
function EditProfile({history}) {
    const user=useSelector(state=>state.authReducer).user
    const dispatch=useDispatch()
    const [Info,setInfo]= useState(user)
    const handleChange=(e)=>{setInfo({...Info,[e.target.name]:e.target.value})}
    const submit=e=>{
        e.preventDefault()
        dispatch(updateInfo(Info))
        history.push('/profile')
    }
    return (
        <div style={{width:"70%",padding:"10px"}}>
            <form onSubmit={submit}>
            <MDBInput label="Your first name" icon="user" name='firstName'value={Info.firstName} onChange={handleChange} group type="text" validate error="wrong" success="right" />
            <MDBInput label="Your last name" icon="user" name='lastName'value={Info.lastName} onChange={handleChange} group type="text" validate error="wrong" success="right" />
            <MDBInput label="Your age" icon="age" name='age'value={Info.age} onChange={handleChange} group type="text" validate error="wrong" success="right" />
            <MDBInput label="Your phone" icon="phone" name='phone'value={Info.phone} onChange={handleChange} group type="text" validate error="wrong" success="right" />
            <MDBInput label="Your status" icon="status" name='status'value={Info.status} onChange={handleChange} group type="text" validate error="wrong" success="right" />
            <MDBInput label="Your company" icon="company" name='company'value={Info.company} onChange={handleChange} group type="text" validate error="wrong" success="right" />
            <MDBInput label="Your address" icon="address" name='address'value={Info.address} onChange={handleChange} group type="text" validate error="wrong" success="right" />
            <MDBInput label="Your website" icon="website" name='website'value={Info.website} onChange={handleChange} group type="text" validate error="wrong" success="right" />
            <MDBInput label="Your linkedin" icon="linkedin" name='linkedin'value={Info.linkedin} onChange={handleChange} group type="text" validate error="wrong" success="right" />
            <MDBInput label="Your github" icon="github" name='github'value={Info.github} onChange={handleChange} group type="text" validate error="wrong" success="right" />
            <MDBInput label="Your facebook" icon="facebook" name='facebook'value={Info.facebook} onChange={handleChange} group type="text" validate error="wrong" success="right" />
            <MDBInput label="Your instagram" icon="instagram" name='instagram'value={Info.instagram} onChange={handleChange} group type="text" validate error="wrong" success="right" />
            <MDBInput label="Your twitter" icon="twitter" name='twitter'value={Info.twitter} onChange={handleChange} group type="text" validate error="wrong" success="right" />
            <MDBInput label="bio" icon="bio" name='bio'value={Info.bio} onChange={handleChange} group type="text" validate error="wrong" success="right" />            
            <MDBBtn type='submit'>Update Profile</MDBBtn>
            </form>
        </div>
    )
}

export default EditProfile
