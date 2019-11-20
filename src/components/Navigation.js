import React, { useState } from "react";
import {Link} from "gatsby";
import "bootstrap-css-only/css/bootstrap.min.css";

import logo from "../images/logoApp.svg"


import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  UncontrolledDropdown

} from "reactstrap";

import { isLoggedIn} from "../services/auth"
const Navigation = props => {
  const [isOpen, setIsOpen] = useState(false);
  const [name] = useState('');
  const toggle = () => setIsOpen(!isOpen);
  
  // useEffect(() => {
  //   if(localStorage.getItem('shootrzName'))
  //     setName(localStorage.getItem('shootrzName'))
  // })
  return (
    <div className="navigation">
      
      <Navbar light expand="md">
          <Link to="/prototype" className="navbar-brand">
              <img src={logo} alt="shootrz" />
          </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              
                <Link to="/prototype" activeClassName="active">
                 How it works
                </Link>
            </NavItem>
            <NavItem>
                <Link to="/prototype/#pricing" activeClassName="active">
                  Pricing
                </Link>
            </NavItem>
            <NavItem>
              
                <Link to="/app/book/" activeClassName="active">
                  Book now
                </Link>
           
            </NavItem>
            {
              isLoggedIn() ?  <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  {name}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Edit Profile</DropdownItem>
                  <DropdownItem>Logout</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> :  
                <NavItem>
                  <Link to="/app/login/" activeClassName="active">
                    Login
                  </Link>
              </NavItem>
              
            }
            
          </Nav>
        </Collapse>
      </Navbar>
      
    </div>
  );
};

export default Navigation;

