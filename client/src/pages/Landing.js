import {React ,useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
function Landing({history}) {
    const auth=useSelector(state=>state.authReducer)
    useEffect(() => {if(auth.isAuth) { history.push('/profile')}}, [auth.isAuth])
    return (
        <div className="landing">
            <div className="dark-overlay landing-inner text-default">
            <div className="container">
                <div className="row">
                <div className="col-md-12 text-center">
                    <h1>DEV_DIW</h1>
                    <h2>social media for developers</h2>
                    <hr />  
                    <p className="display-5 mb-4">Hi everyone, </p>
                    <p className="lead"> I’m so excited to finally share my first website with you!</p>
                    <p >Written by <strong className="lead" > GO MY CODE Students</strong>, {new Date().getDate()}/{new Date().getMonth()+1}/{new Date().getFullYear()}</p>
                    <Link to="/register" className="btn btn-lg btn-light mr-2">Register</Link>
                    <Link to="/login" className="btn btn-lg btn-dark">Login</Link>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Landing
