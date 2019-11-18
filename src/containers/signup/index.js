import React from "react"

import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import {
  changeName,
  changeEmail,
  changePassword,
  changeConfirmPassword,
  submitForm,
} from "./actions"
function Signup({
  email,
  password,
  name,
  confirmPassword,
  changeName,
  changeEmail,
  changePassword,
  changeConfirmPassword,
  submitForm,
}) {
  const handldeChangeName = e => {
    changeName(e.target.value)
  }
  const handldeChangeEmail = e => {
    changeEmail(e.target.value)
  }
  const handldeChangePassword = e => {
    changePassword(e.target.value)
  }
  const handldeChangeConfirmPassword = e => {
    changeConfirmPassword(e.target.value)
  }
  const handleSignup = () => {
    submitForm({name, email, password})
  }
  return (
    <div className="signup-form">
      <div className="form-container">
        <TextField
          required
          id="outlined-basic"
          label="Name"
          margin="normal"
          variant="outlined"
          value={name}
          onChange={handldeChangeName}
        />
        <TextField
          required
          id="outlined-basic"
          label="Email"
          margin="normal"
          variant="outlined"
          value={email}
          onChange={handldeChangeEmail}
        />
        <TextField
          required
          id="outlined-basic"
          label="password"
          margin="normal"
          variant="outlined"
          type="password"
          value={password}
          onChange={handldeChangePassword}
        />
        <TextField
          required
          id="outlined-basic"
          label="Confirm password"
          margin="normal"
          variant="outlined"
          type="password"
          value={confirmPassword}
          onChange={handldeChangeConfirmPassword}
        />
        <Button variant="contained" onClick={handleSignup}>
          sign up
        </Button>
      </div>
    </div>
  )
}

const mapStateToProps = ({
  signup: { name, email, password, confirmPassword },
}) => {
  return {
    name,
    email,
    password,
    confirmPassword,
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
    },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup)
