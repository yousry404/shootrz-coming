
import {CHANGE_EMAIL, CHANGE_PASSWORD, CHANGE_ERROR} from "./actions"

const initial_state = {
    email: "",
    password: "",
    emailError: false,
    passwordError: false
}


export default (state =initial_state, action) => {
    switch (action.type) {
        case CHANGE_EMAIL:
            return {...state, email: action.value}
        case CHANGE_PASSWORD:
            return {...state, password: action.value}
        case CHANGE_ERROR:
            return { ...state, [action.errorType+'Error']: action.isError }    
        default:
            return state;
    }
}