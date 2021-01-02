import './res/App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Posts from './pages/Posts';
import Post from './pages/Post';
import Users from './pages/Users';
import User from './pages/User';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/register' component={Register}/>
        <Route exact path='/login' component={Login}/>
        <PrivateRoute exact path='/posts' component={Posts}/>
        <PrivateRoute exact path="/post/:postId" component={Post} />
        <Route exact path='/Users' component={Users}/>
        <Route exact path='/User/:UserId' component={User}/>
        <PrivateRoute exact path='/profile' component={Profile}/>
        <PrivateRoute exact path='/Editprofile' component={EditProfile}/>
      </Switch> 
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
