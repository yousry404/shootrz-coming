
import {CHANGE_EMAIL, CHANGE_PASSWORD} from "./actions"

const initial_state = {
    email: "",
    password: ""
}


export default (state =initial_state, action) => {
    switch (action.type) {
        case CHANGE_EMAIL:
            return {...state, email: action.value}
        case CHANGE_PASSWORD:
            return {...state, password: action.value}
    
        default:
            return state;
    }
}