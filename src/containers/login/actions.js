import axios from "axios"
import { setUser } from "../../services/auth"
import { navigate } from "gatsby"
import { baseUrl } from "../../services/api"

// action types
export const CHANGE_EMAIL = "LOGIN::CHANGE_EMAIL"
export const CHANGE_PASSWORD = "LOGIN::CHANGE_PASSWORD"

export const SUBMIT_FORM_SUCCESS = "LOGIN::SUBMIT_FORM_SUCCESS"
export const SUBMIT_FORM_ERROR = "LOGIN::SUBMIT_FORM_ERROR"
export const CHANGE_ERROR = "LOGIN::CHANGE_ERROR "
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

export const changeError = (errorType, isError) => ({
  type: CHANGE_ERROR,
  errorType,
  isError,
})
export const submitForm = ({ email, password }) => async dispatch => {
  try {
    const response = await axios.post(`${baseUrl}/login`, {
      email,
      password,
    })
    const {
      data: { msg, access_token, name },
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
