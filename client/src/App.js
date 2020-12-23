import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import Home from './component/Home'
import Register from './component/Register'
import Login from './component/Login'
import Profile from './component/Profile'
import Navbar from './component/Navbar'
import PrivateRoute from './PrivateRoute';
import Posts from './component/Posts';
import Users from './component/Users';



function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/register' component={Register}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/Allposts' component={Posts}/>
        <Route exact path='/Users' component={Users}/>
        <PrivateRoute exact path='/profile' component={Profile}/>

      </Switch> 
    </Router>
  );
}

export default App;
