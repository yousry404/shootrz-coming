import axios from "axios"
import { setUser } from "../../services/auth"
import { navigate } from "gatsby"
// action types
export const CHANGE_EMAIL = "SIGNUP::CHANGE_EMAIL"
export const CHANGE_NAME = "SIGNUP::CHANGE_NAME"
export const CHANGE_PASSWORD = "SIGNUP::CHANGE_PASSWORD"
export const CHANGE_CONFIRM_PASSWORD = "SIGNUP::CHANGE_CONFIRM_PASSWORD"

export const SUBMIT_FORM_SUCCESS = "SIGNUP::SUBMIT_FORM_SUCCESS"
export const SUBMIT_FORM_ERROR = "SIGNUP::SUBMIT_FORM_ERROR"

export const changeName = value => {
  return {
    type: CHANGE_NAME,
    value,
  }
}
export const changeEmail = value => {
  return {
    type: CHANGE_EMAIL,
    value,
  }
}

export const changePassword = value => {
  return {
    type: CHANGE_PASSWORD,
    value,
  }
}

export const changeConfirmPassword = value => {
  return {
    type: CHANGE_CONFIRM_PASSWORD,
    value,
  }
}

export const submitForm = ({ name, email, password }) => async dispatch => {
  try {
    const response = await axios.post("http://localhost:5001/api/signup", {
      name,
      email,
      password,
    })
    const {
      data: { msg, access_token },
      status,
    } = response
    if (status !== 200) {
      dispatch({ type: SUBMIT_FORM_ERROR, msg })
    } else {
      dispatch({ type: SUBMIT_FORM_SUCCESS, msg })
      const settingUserPromise = new Promise((resolve, reject) =>
        resolve(setUser(access_token),localStorage.setItem("shootrzName", name)),
      )
      await settingUserPromise
      navigate("/app/book/")
    }
  } catch (e) {
    // console.log("error", e)
    dispatch({ type: SUBMIT_FORM_ERROR, msg: "Error in logging in" })
  }
}
