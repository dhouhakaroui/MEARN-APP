import {React ,useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {loadUser, loginUser} from '../actions/authActions'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
function Login({history}) {
    const [info,setInfo]= useState({
        email:'',
        password:''
    })
    const handleChange=(e)=>{setInfo({...info,[e.target.name]:e.target.value})}
    const [errors, setErrors] = useState(null)
    const dispatch=useDispatch()
    const login=e=>{
        e.preventDefault()
        dispatch(loginUser(info))
        dispatch(loadUser())
    }
    const auth=useSelector(state=>state.authReducer)
    useEffect(() => {
        if (auth.isAuth){ history.push('/posts')}
        if (auth.errors){ setErrors(auth.errors)}
    }, [auth.isAuth,auth.errors])
    return (
        <div className="login">
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="6">
                    <form onSubmit={login}>
                        <p className="h5 text-center mb-4">Sign in</p>
                        <div className="grey-text">
                        <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong"
                            success="right"  name='email' onChange={handleChange} onFocus={()=>setErrors(null)}/>
                        <MDBInput label="Type your password" icon="lock" group type="password" name='password' onChange={handleChange} validate />
                        </div>
                        {!errors?null:errors.map(el=><p>{el.msg}</p>)}
                        <div className="text-center">
                        <MDBBtn type='submit'>Login</MDBBtn>
                        </div>
                    </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    )
}

export default Login
