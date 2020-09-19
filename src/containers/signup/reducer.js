import {
  CHANGE_NAME,
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  CHANGE_CONFIRM_PASSWORD,
  CHANGE_ERROR,
  SUBMIT_FORM_ERROR,
  SUBMIT_FORM_NAME
} from "./actions"

const initial_state = {
  email: "",
  name: "",
  password: "",
  confirmPassword: "",
  emailError: false,
  nameError: false,
  passwordError: false,
  confirmPasswordError: false,
  formError: "",
  userName: ""
}

export default (state = initial_state, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: action.value }
    case CHANGE_EMAIL:
      return { ...state, email: action.value }
    case CHANGE_PASSWORD:
      return { ...state, password: action.value }
    case CHANGE_CONFIRM_PASSWORD:
      return { ...state, confirmPassword: action.value }
    case CHANGE_ERROR:
      return { ...state, [action.errorType + "Error"]: action.isError }
    case SUBMIT_FORM_ERROR:
      return { ...state, formError: action.msg }
    case SUBMIT_FORM_NAME:
      return { ...state, userName: action.name }
    default:
      return state
  }
}
