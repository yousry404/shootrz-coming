import React from "react"
import { navigate, Link } from "gatsby"
import { isLoggedIn } from "../../services/auth"
import { connect } from "react-redux"
// import "../../css/login.scss"
import { changeEmail, changePassword, submitForm, changeError } from "./actions"
import { bindActionCreators } from "redux"
import { TextField } from "@material-ui/core"
import FormHelperText from "@material-ui/core/FormHelperText"
import FormControl from "@material-ui/core/FormControl"

const Login = ({
  email,
  password,
  emailError,
  passwordError,
  changeEmail,
  changePassword,
  submitForm,
  changeError,
}) => {
  const handleUpdateEmail = event => {
    changeEmail(event.target.value)
    changeError("email", false)
  }
  const handleUpdatePassword = event => {
    changePassword(event.target.value)
    changeError("password", false)
  }
  const handleSubmit = () => {
    !email.match(new RegExp(/\S+@\S+\.\S+/)) && changeError("email", true)
    password.length < 8 && changeError("password", true)

    if (!(!email.match(new RegExp(/\S+@\S+\.\S+/)) || password.length < 8)) {
      submitForm({ email, password })
    }
  }

  if (isLoggedIn()) {
    navigate(`/app/book/`)
  }
  return (
    <div className="login-page">
      <div className="container">
        <h1 className="login-page__header">
          The easiest and most affordable way to book photographers, on-demand,
          near you!
        </h1>
        <form
          method="post"
          className="login-page__form"
          onSubmit={event => {
            event.preventDefault()
            handleSubmit()
          }}
        >
          <FormControl error={emailError} className="login-page__email">
            <TextField
              required
              id="outlined-basic"
              label="Email"
              margin="normal"
              variant="outlined"
              onChange={handleUpdateEmail}
              value={email}
              error={emailError}
            />
            {emailError && (
              <FormHelperText>Please enter a valid email.</FormHelperText>
            )}
          </FormControl>
          <FormControl error={passwordError} className="login-page__password">
            <TextField
              required
              id="outlined-basic"
              label="Password"
              margin="normal"
              variant="outlined"
              type="password"
              onChange={handleUpdatePassword}
              value={password}
              error={passwordError}
            />
            {passwordError && (
              <FormHelperText>
                Please enter your password, and make sure it's more than 8
                characters.
              </FormHelperText>
            )}
          </FormControl>
          <input
            type="submit"
            value="Sign In"
            className="login-page__submit mt-3"
          />
        </form>
        <div className="text-center login-page__signup">
          <span>Don't have an account? </span>
          <Link to="/app/signup">Sign Up</Link>{" "}
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = ({
  login: { email, password, emailError, passwordError },
}) => {
  return {
    email,
    password,
    emailError,
    passwordError,
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      changeEmail,
      changePassword,
      submitForm,
      changeError,
    },
    dispatch
  )
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
