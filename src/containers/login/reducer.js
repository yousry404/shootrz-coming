import { CHANGE_EMAIL, CHANGE_PASSWORD, CHANGE_ERROR, SUBMIT_FORM_ERROR } from "./actions"
import { CHANGE_NAME } from "../signup/actions"

const initial_state = {
  email: "",
  password: "",
  emailError: false,
  passwordError: false,
  formError: ""
}

export default (state = initial_state, action) => {
  switch (action.type) {
    case CHANGE_EMAIL:
      return { ...state, email: action.value }
    case CHANGE_PASSWORD:
      return { ...state, password: action.value }
    case CHANGE_ERROR:
      return { ...state, [action.errorType + "Error"]: action.isError }
    case SUBMIT_FORM_ERROR:
      return { ...state, formError: action.msg }
    default:
      return state
  }
}
