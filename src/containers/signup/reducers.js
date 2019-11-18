import {
  CHANGE_NAME,
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  CHANGE_CONFIRM_PASSWORD,
} from "./actions"

const initial_state = {
  email: "",
  name: "",
  password: "",
  confirmPassword: "",
}

export default (state = initial_state, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return {...state, name: action.value}
    case CHANGE_EMAIL:
      return {...state, email: action.value}
    case CHANGE_PASSWORD:
      return {...state, password: action.value}
    case CHANGE_CONFIRM_PASSWORD:
      return {...state, confirmPassword: action.value}
    default:
      return state
  }
}
