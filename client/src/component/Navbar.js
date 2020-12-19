import React, { useState} from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import {useSelector,useDispatch} from 'react-redux'
import { logoutUser } from '../actions/authActions'

const NavbarPage =()=> {
const [state,setState]= useState({isOpen: false})
const toggleCollapse = () => {
  setState({ isOpen: !state.isOpen });}
const auth=useSelector(state=>state.authReducer)
const dispatch = useDispatch()

  return (
    <div style={{margin:10}}>
      <MDBNavbar color="default-color" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">MERN APP</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={state.isOpen} navbar>
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
                  <MDBDropdownItem href="/profile">profile</MDBDropdownItem>          
                  <MDBDropdownItem href="/" onClick={()=>{dispatch(logoutUser())}} >log out</MDBDropdownItem>:
                </MDBDropdownMenu>:
                <MDBDropdownMenu className="dropdown-default">
                <MDBDropdownItem href="/login">login</MDBDropdownItem>          
                <MDBDropdownItem href="/register"  >register</MDBDropdownItem>:
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
