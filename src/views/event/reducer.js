
import { GET_EVENT_FAILURE, GET_EVENT_SUCCESS, GET_EVENT_LOADING } from "./actions"

const initial_state = {
    loading: true,
    message: "",
    event: {
        location: null,
        status: null,
        address: null
    }
}


export default (state =initial_state, action) => {
    switch (action.type) {
        case GET_EVENT_SUCCESS:
            return {...state, event: action.event, loading: false}
        case GET_EVENT_LOADING:
            return {...state, loading: true}
        case GET_EVENT_FAILURE:
            return {...state, loading: false, message: action.message}
    
        default:
            return state;
    }
}