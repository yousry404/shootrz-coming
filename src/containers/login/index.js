import React from "react"
import { navigate, Link } from "gatsby"
import { isLoggedIn } from "../../services/auth"
import { connect } from "react-redux"
// import "../../css/login.scss"
import { changeEmail, changePassword, submitForm } from "./actions"
import { bindActionCreators } from "redux"
import { TextField } from "@material-ui/core"
const Login = ({
  email,
  password,
  changeEmail,
  changePassword,
  submitForm,
}) => {
  const handleUpdateEmail = event => {
    changeEmail(event.target.value)
  }
  const handleUpdatePassword = event => {
    changePassword(event.target.value)
  }
  const handleSubmit = () => {
    submitForm({ email, password })
  }

  if (isLoggedIn()) {
     navigate(`/app/book/`)
  } 
  return (
    <>
      <h1>
        The easiest and most affordable way to book photographers, on-demand,
        near you!
      </h1>
      <form
        method="post"
        onSubmit={event => {
          event.preventDefault()
          handleSubmit()
        }}
      >
        
        <TextField
          required
          id="outlined-basic"
          label="Email"
          margin="normal"
          variant="outlined"
          onChange={handleUpdateEmail}
            value={email}
        />
        <TextField
          required
          id="outlined-basic"
          label="Password"
          margin="normal"
          variant="outlined"
          type="password"
            onChange={handleUpdatePassword}
            value={password}
        />
        
        <input type="submit" value="Log In" />
      </form>
      <div>
        <span>Don't have an account?</span>
        <Link to="/app/signup">Sign Up</Link>{" "}
      </div>
    </>
  )
  
 
}
const mapStateToProps = state => {
  const {
    login: { email, password },
  } = state
  return {
    email,
    password,
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      changeEmail,
      changePassword,
      submitForm,
    },
    dispatch
  )
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
