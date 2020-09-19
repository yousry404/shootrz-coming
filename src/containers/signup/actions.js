import axios from "axios"
import { setUser } from "../../services/auth"
import { navigate } from "gatsby"
import { baseUrl } from "../../services/api"
import { setCookie } from "../../utils/cookie"

// action types
export const CHANGE_EMAIL = "SIGNUP::CHANGE_EMAIL"
export const CHANGE_NAME = "SIGNUP::CHANGE_NAME"
export const CHANGE_PASSWORD = "SIGNUP::CHANGE_PASSWORD"
export const CHANGE_CONFIRM_PASSWORD = "SIGNUP::CHANGE_CONFIRM_PASSWORD"

export const SUBMIT_FORM_SUCCESS = "SIGNUP::SUBMIT_FORM_SUCCESS"
export const SUBMIT_FORM_NAME = "SIGNUP::SUBMIT_FORM_NAME"
export const SUBMIT_FORM_ERROR = "SIGNUP::SUBMIT_FORM_ERROR"
export const CHANGE_ERROR = "SIGNUP::CHANGE_ERROR"

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


export const changeError = (errorType, isError) => ({
  type: CHANGE_ERROR,
  errorType,
  isError,
})
export const submitFormName = (name) => ({
  type: SUBMIT_FORM_NAME,
  name
})

export const submitForm = ({ name, email, password }) => async dispatch => {
  try {
    dispatch({ type: SUBMIT_FORM_ERROR, msg: "" })
    const response = await axios.post(`${baseUrl}/signup`, {
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
      dispatch({ type: SUBMIT_FORM_NAME, name })
      const settingUserPromise = new Promise((resolve, reject) =>
        resolve(setUser(access_token), setCookie("shootrz-name", name), ),
      )
      await settingUserPromise
      navigate("/app/book/")
    }
  } catch (e) {
    dispatch({ type: SUBMIT_FORM_ERROR, msg: e.response.data.msg || "Error in signing up" })
  }
}
