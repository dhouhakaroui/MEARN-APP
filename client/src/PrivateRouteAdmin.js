import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux'
function PrivateRouteAdmin({component:Component,...rest}) {
    const auth=useSelector(state=>state.authReducer)
    return (
        <Route {...rest} render={props=>(!auth.isAuth && auth.user.role)?
            <Redirect to="/login"/>:
            <Component {...props}/>
        }/>
    )
}

export default PrivateRouteAdmin

