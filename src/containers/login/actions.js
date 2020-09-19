import axios from "axios"
import { setUser } from "../../services/auth"
import { navigate } from "gatsby"
import { baseUrl } from "../../services/api"
import { setCookie } from "../../utils/cookie"
import { SUBMIT_FORM_NAME } from "../signup/actions"
// action types
export const CHANGE_EMAIL = "LOGIN::CHANGE_EMAIL"
export const CHANGE_PASSWORD = "LOGIN::CHANGE_PASSWORD"

export const SUBMIT_FORM_SUCCESS = "LOGIN::SUBMIT_FORM_SUCCESS"
export const SUBMIT_FORM_ERROR = "LOGIN::SUBMIT_FORM_ERROR"
export const CHANGE_ERROR = "LOGIN::CHANGE_ERROR"
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
    dispatch({ type: SUBMIT_FORM_ERROR, payload: "" })
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
        resolve(setUser(access_token), setCookie("shootrz-name", name), dispatch({ type: SUBMIT_FORM_NAME, name }))
      )
      await settingUserPromise
      navigate("/app/book/")
    }
  } catch (e) {
    dispatch({ type: SUBMIT_FORM_ERROR, msg: e.response.data.msg || "Error in logging in" })
  }
}
