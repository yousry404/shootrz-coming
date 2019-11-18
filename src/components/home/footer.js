import React from "react"
import { Link } from "gatsby"
import footerLogo from "../../images/logo_mini.svg"
const Footer = () => {
  return (
    <div className="footer">
      <p>Join our team of photographers</p>
      <Link to="/apply">Apply now</Link>
      <img src={footerLogo} alt="shootrz"/>
      <p className="copy">&copy;All copyrights reserved to Shootrz 2019</p>
    </div>
  )
}

export default Footer
