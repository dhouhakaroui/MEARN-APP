import {React ,useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {registerUser} from '../actions/authActions'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import {Form} from 'react-bootstrap'
function Register({history}) {
    const [Info,setInfo]= useState({
        firstName:'',
        lastName:'',
        age:0,
        gender:'',
        avatar:"avatar.jpg",
        email:'',
        password:''
    })   
    const avat=(Info.gender==="male")? "man.PNG":(Info.gender==="female")?"women.PNG":"avatar.jpg"   
    const handleChange=(e)=>{setInfo({...Info,avatar:avat,[e.target.name]:e.target.value})}
    const dispatch=useDispatch()
    const auth=useSelector(state=>state.authReducer)
    const [errors, setErrors] = useState(null)
    useEffect(() => {
        if (auth.isAuth){history.push('/profile')}
        if (auth.errors){setErrors(auth.errors)}
    }, [auth.isAuth,auth.errors])
    const registerNow=e=>{
        e.preventDefault()
        dispatch(registerUser(Info))
    }
    return (
        <div className="login">
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="6">
                    <form onSubmit={registerNow} onFocus={()=>setErrors(null)}>
                        <div className="grey-text">
                        <MDBInput label="Your first name" icon="user" group type="text" name='firstName' onChange={handleChange} validate error="wrong" success="right" />
                        <MDBInput label="Your last name" icon="user" group type="text" name='lastName' onChange={handleChange} validate error="wrong" success="right" />                        
                        <Form.Control as="select" name='gender' onChange={handleChange}>
                            <option value=''>choose gender </option>
                            <option value='male'>man</option>
                            <option value='female'>women</option>
                        </Form.Control> 
                        <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong" success="right"  name='email' onChange={handleChange} />
                        <MDBInput label="Type your password" icon="lock" group type="password" name='password' onChange={handleChange} validate />
                        </div>
                        {!errors?null:errors.map(el=><p>{el.msg}</p>)}
                        <div className="text-center">
                        <MDBBtn type='submit'>Register</MDBBtn>
                        </div>
                    </form>
                    </MDBCol>
                </MDBRow>
                </MDBContainer>
        </div>
    )
}

export default Register
