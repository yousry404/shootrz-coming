import React from "react"
import footerLogo from "../../images/logo_mini.svg"
const Footer = () => {
  return (
    <div className="footer">
      <p>Join our team of photographers</p>
      <a href="https://photographer.shootrz.co/app/singup" target="_blank">Apply now</a>
      <img src={footerLogo} alt="shootrz"/>
      <p className="copy">&copy;All copyrights reserved to Shootrz 2019</p>
    </div>
  )
}

export default Footer
