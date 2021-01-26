import React, { useState} from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import {useSelector,useDispatch} from 'react-redux'
import { logoutUser } from '../actions/authActions'
import {Link} from 'react-router-dom'
const NavbarPage =()=> {
const [open,setOpen]= useState(false)
const toggleCollapse = () => {setOpen(!open );}
const auth=useSelector(state=>state.authReducer)
const dispatch = useDispatch()

  return (
    <div style={{margin:10}} >
      <MDBNavbar color="default-color-dark" dark expand="md">
        <MDBNavbarBrand>
          <MDBNavLink to="/">
            <img src="diw.png" alt="DEV_DIW"/>
          </MDBNavLink>         
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={open} navbar>
          <MDBNavbarNav left>
            <MDBNavItem >
              <MDBNavLink to="/Users"><i className="fas fa-users"/>Users</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/Posts"><i className="fas fa-comments"/>Posts</MDBNavLink>
            </MDBNavItem>
            {(auth.isAuth )?
            <MDBNavItem active>
              <MDBNavLink to="/profile"><i className="fas fa-user"/>Profile</MDBNavLink>
            </MDBNavItem>
            :null} 
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="/">
                <MDBIcon fab icon="github" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="/">
                <MDBIcon fab icon="google" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown dropleft>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                {(auth.isAuth )?
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="">
                    <Link to="/profile">profile</Link>
                  </MDBDropdownItem>          
                  <MDBDropdownItem href="">
                    <Link to="" onClick={()=>{dispatch(logoutUser())}}>log out</Link>
                  </MDBDropdownItem>
                </MDBDropdownMenu>:
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="">
                    <Link to="/login">login</Link>
                  </MDBDropdownItem>          
                  <MDBDropdownItem href=""  >
                    <Link to="/register">register</Link>
                  </MDBDropdownItem>
                </MDBDropdownMenu>}
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </div>
    );
  }


export default NavbarPage;
