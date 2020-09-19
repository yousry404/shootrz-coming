import React, { useState, useEffect } from "react"
import { Link, navigate } from "gatsby"
import "bootstrap-css-only/css/bootstrap.min.css"
import { logout } from "../services/auth"
import { getCookie } from "../utils/cookie"
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
  UncontrolledDropdown,
} from "reactstrap"
import { isLoggedIn } from "../services/auth"
import "../css/layout.scss"
import { connect } from "react-redux"
import { submitFormName } from "../containers/signup/actions"
const isBrowser = () => typeof window !== "undefined"
const getUserName = () =>
  isBrowser() && getCookie("shootrz-name")
    ? getCookie("shootrz-name")
    : null
const Navigation = ({ userName, submitFormName }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  const handleLogout = () => {
    logout(() => navigate("/app/login"))
  }
  useEffect(() => {
    const nameFromCookie = getUserName()
    if(nameFromCookie && !userName) {
      submitFormName(nameFromCookie)
    }
  }, [])
  return (
    <div className="navigation">
      <Navbar light expand="md">
        <Link to="/prototype" className="navbar-brand">
          <img src={logo} alt="shootrz" />
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
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
            {isLoggedIn() ? (
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <span className="name">{userName}</span>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <Link to="/app/events/">My Events</Link>
                  </DropdownItem>
                  <DropdownItem>Edit Profile</DropdownItem>
                  <DropdownItem onClick={() => handleLogout()}>
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            ) : (
              <NavItem>
                <Link to="/app/login/" activeClassName="active">
                  Login
                </Link>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}


const mapStateToProps = ({
  signup: {
    userName,
  },
}) => {
  return {
    userName,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitFormName: (name) => dispatch(submitFormName(name))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
