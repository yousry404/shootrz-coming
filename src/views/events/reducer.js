
import { GET_EVENTS_FAILURE, GET_EVENTS_SUCCESS, GET_EVENTS_LOADING } from "./actions"

const initial_state = {
    loading: true,
    message: "",
    events: []
}


export default (state =initial_state, action) => {
    switch (action.type) {
        case GET_EVENTS_SUCCESS:
            return {...state, events: action.events, loading: false}
        case GET_EVENTS_LOADING:
            return {...state, loading: true}
        case GET_EVENTS_FAILURE:
            return {...state, loading: false, message: action.message}
    
        default:
            return state;
    }
}