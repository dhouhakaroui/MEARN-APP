import React, { useState} from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import {useSelector,useDispatch} from 'react-redux'
import { logoutUser } from '../actions/authActions'
import {Link} from 'react-router-dom'
const NavbarPage =()=> {
const [open,setOpen]= useState(false)
const toggleCollapse = () => {
  setOpen(!open );}
const auth=useSelector(state=>state.authReducer)
const dispatch = useDispatch()

  return (
    <div style={{margin:10}}>
      <MDBNavbar color="default-color" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">MERN APP</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={open} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/">Posts</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/profile">profile</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="/">
                <MDBIcon fab icon="twitter" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="/">
                <MDBIcon fab icon="google-plus-g" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown dropleft>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                {(auth.isAuth )?
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!">
                    <Link to="/profile">profile</Link>
                  </MDBDropdownItem>          
                  <MDBDropdownItem href="#!">
                    <Link onClick={()=>{dispatch(logoutUser())}}>log out</Link>
                  </MDBDropdownItem>
                </MDBDropdownMenu>:
                <MDBDropdownMenu className="dropdown-default">
                <MDBDropdownItem href="#!">
                  <Link to="/login">login</Link>
                </MDBDropdownItem>          
                <MDBDropdownItem href="#!"  >
                  <Link to="/register">register</Link>
                </MDBDropdownItem>
              </MDBDropdownMenu>
                }
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </div>
    );
  }


export default NavbarPage;
