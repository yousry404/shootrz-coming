import React from "react"

import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import FormHelperText from "@material-ui/core/FormHelperText"
import FormControl from "@material-ui/core/FormControl"

import {
  changeName,
  changeEmail,
  changePassword,
  changeConfirmPassword,
  submitForm,
  changeError,
} from "./actions"
function Signup({
  email,
  password,
  name,
  confirmPassword,
  emailError,
  passwordError,
  nameError,
  confirmPasswordError,
  changeName,
  changeEmail,
  changePassword,
  changeConfirmPassword,
  submitForm,
  changeError,
}) {
  const handldeChangeName = e => {
    changeName(e.target.value)
    changeError("name", false)
  }
  const handldeChangeEmail = e => {
    changeEmail(e.target.value)
    changeError("email", false)
  }
  const handldeChangePassword = e => {
    changePassword(e.target.value)
    changeError("password", false)
  }
  const handldeChangeConfirmPassword = e => {
    changeConfirmPassword(e.target.value)
    changeError("confirmPassword", false)
  }
  const handleSignup = () => {
    !name && changeError("name", true)
    !email.match(new RegExp(/\S+@\S+\.\S+/)) && changeError("email", true)
    password.length < 8 && changeError("password", true)
    !confirmPassword && changeError("confirmPassword", true)
    password !== confirmPassword && changeError("confirmPassword", true)

    if (
      !(
        !name ||
        !email.match(new RegExp(/\S+@\S+\.\S+/)) ||
        password.length < 8 ||
        !confirmPassword ||
        password !== confirmPassword
      )
    ) {
      submitForm({ name, email, password })
    }
  }
  return (
    <div className="signup-form">
      <div className="form-container">
        <FormControl error={nameError}>
          <TextField
            required
            id="outlined-basic"
            label="Name"
            margin="normal"
            variant="outlined"
            value={name}
            error={nameError}
            onChange={handldeChangeName}
          />
          {nameError && (
            <FormHelperText>Please enter your name.</FormHelperText>
          )}
        </FormControl>
        <FormControl error={emailError}>
          <TextField
            required
            id="outlined-basic"
            label="Email"
            margin="normal"
            variant="outlined"
            value={email}
            onChange={handldeChangeEmail}
            error={emailError}
          />
          {emailError && (
            <FormHelperText>Please enter a valid email.</FormHelperText>
          )}
        </FormControl>
        <FormControl error={passwordError}>
          <TextField
            required
            id="outlined-basic"
            label="password"
            margin="normal"
            variant="outlined"
            type="password"
            value={password}
            onChange={handldeChangePassword}
            error={passwordError}

          />
          {passwordError && (
            <FormHelperText>
              Please enter your password, and make sure it's more than 8
              characters.
            </FormHelperText>
          )}
        </FormControl>
        <FormControl error={confirmPasswordError}>
          <TextField
            required
            id="outlined-basic"
            label="Confirm password"
            margin="normal"
            variant="outlined"
            type="password"
            value={confirmPassword}
            onChange={handldeChangeConfirmPassword}
            error={confirmPasswordError}

          />
          {confirmPasswordError && (
            <FormHelperText>
              Please confirm your password, and make sure it matches your
              password.
            </FormHelperText>
          )}
        </FormControl>
        <Button variant="contained" onClick={handleSignup}>
          sign up
        </Button>
      </div>
    </div>
  )
}

const mapStateToProps = ({
  signup: {
    name,
    email,
    password,
    confirmPassword,
    nameError,
    emailError,
    passwordError,
    confirmPasswordError,
  },
}) => {
  return {
    name,
    email,
    password,
    confirmPassword,
    nameError,
    emailError,
    passwordError,
    confirmPasswordError,
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      changeName,
      changeEmail,
      changePassword,
      changeConfirmPassword,
      submitForm,
      changeError,
    },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup)
