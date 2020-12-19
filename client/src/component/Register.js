import {React ,useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {registerUser} from '../actions/authActions'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import { MDBSelect } from "mdbreact";
function Register({history}) {
    const [Info,setInfo]= useState({
        firstName:'',
        lastName:'',
        age:0,
        gender:'',
        email:'',
        password:''
    })
    const [options, setoptions] = useState([
        {
          text: "Man",
          value: "male"
        },
        {
          text: "Women",
          value: "female"
        }])
        
    const handleChange=(e)=>{setInfo({...Info,[e.target.name]:e.target.value})}
    const dispatch=useDispatch()
    const auth=useSelector(state=>state.authReducer)
    const [errors, setErrors] = useState(null)
    useEffect(() => {
        if (auth.isAuth){
            history.push('/profile')
        }
        if (auth.errors){
            setErrors(auth.errors)
        }
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
                        <p className="h5 text-center mb-4">Sign in</p>
                        <div className="grey-text">
                        <MDBInput label="Your first name" icon="user" group type="text" name='firstName' onChange={handleChange} validate error="wrong" success="right" />
                        <MDBInput label="Your last name" icon="user" group type="text" name='lastName' onChange={handleChange} validate error="wrong" success="right" />
                        {/* <select name='gender' onChange={handleChange}>
                            <option value='male'>man</option>
                            <option value='female'>women</option>
                        </select> */}
                        {/* <MDBSelect options={options} onChange={ setInfo({...Info,gender:setoptions}) } selected="Choose your option" label="Example label"/> */}
                        <MDBInput label="Your age" icon="calendar" group type="text" name='age' onChange={handleChange} validate error="wrong" success="right" />
                        <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong" success="right"  name='email' onChange={handleChange} />
                        <MDBInput label="Type your password" icon="lock" group type="password" name='password' onChange={handleChange} validate />
                        </div>
                        {errors && errors.map(el=><p>{el.msg}</p>)}
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
