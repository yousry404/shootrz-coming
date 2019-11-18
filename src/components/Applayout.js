import React from "react"
import NavBar from "./Navigation"
const Layout = ({ children }) => (
  <>
    <NavBar />
    {children}
  </>
)
export default Layout