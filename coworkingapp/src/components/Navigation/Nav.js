import React,{ useState,useEffect } from "react";
import {Link} from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";

import axios from "axios"


const Nav=({userAuth,userLogin,...props})=> {
        const [isOpen, setisOpen] = useState(false);
      const  toggleCollapse = () => {
         setisOpen({ isOpen: !isOpen });
        }
        useEffect(() => {
        if(localStorage.getItem('token')!=null) 
        {
          axios
        .post(
           `http://localhost:5000/api/Authorization/Post`,
           {withCredentials:true},{
           headers: { Authorization:`Bearer ${localStorage.getItem('token')}`} }
        ).then(res=>{   
      userAuth.setLoggedIn(userAuth.loggedIn=true)
       console.log(res);
        })
        }
      });
        if(userAuth.loggedIn==false)
          return (
            <>
              <MDBNavbar   dark expand="md">
                <MDBNavbarBrand>
                  <strong className="white-text">Workify</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem >
                    <MDBNavLink to="/" >Home</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="/coworkings">Coworkings</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="/charts">Statistics</MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                  <MDBNavbarNav style={{marginLeft:"65%"}}>
                    <MDBNavItem>
                      <MDBDropdown>
                        <MDBDropdownToggle nav caret>
                          <MDBIcon icon="user" />
                        </MDBDropdownToggle>
                        <MDBDropdownMenu className="dropdown-default">
                         <Link to="/login"><MDBDropdownItem >Login</MDBDropdownItem></Link>
                        </MDBDropdownMenu> 
                      </MDBDropdown>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBNavbar>
              </>
            )
            if(userAuth.loggedIn==true)
            return (
              <div>
              <MDBNavbar color="grey" dark expand="md">
                <MDBNavbarBrand>
                  <strong className="white-text">Workify</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem >
                    <MDBNavLink to="/" >Home</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="/coworkings" >Coworkings</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="/charts">Statistics</MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                  <MDBNavbarNav style={{marginLeft:"65%"}}>
                    <MDBNavItem>
                      <MDBDropdown>
                        <MDBDropdownToggle nav caret>
                          <MDBIcon icon="user" />
                        </MDBDropdownToggle>
                        <MDBDropdownMenu className="dropdown-default">
                         <Link to="/login"><MDBDropdownItem >Profile</MDBDropdownItem></Link>
                         <Link to="/logout"><MDBDropdownItem >Logout</MDBDropdownItem></Link>
                        </MDBDropdownMenu> 
                      </MDBDropdown>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBNavbar>
                     </div>
            )
            return(
              <>
              <MDBNavbar color="grey" dark expand="md">
                <MDBNavbarBrand>
                  <strong className="white-text">Workify</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem >
                    <MDBNavLink to="/" >Home</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="/">Coworkings</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="/">Statistics</MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                  <MDBNavbarNav style={{marginLeft:"65%"}}>
                    <MDBNavItem>
                      <MDBDropdown>
                        <MDBDropdownToggle nav caret>
                          <MDBIcon icon="user" />
                        </MDBDropdownToggle>
                        <MDBDropdownMenu className="dropdown-default">
                         <Link to="/login"><MDBDropdownItem >Login</MDBDropdownItem></Link>
                         <Link to="/login"><MDBDropdownItem >Login</MDBDropdownItem></Link>
                        </MDBDropdownMenu> 
                      </MDBDropdown>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBNavbar>
              </>
            )
          }
        
        
        export default Nav;