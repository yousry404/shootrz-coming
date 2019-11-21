import axios from "axios"

export const GET_EVENTS_SUCCESS = "GET_EVENTS_SUCCESS"
export const GET_EVENTS_LOADING = "GET_EVENTS_LOADING"
export const GET_EVENTS_FAILURE = "GET_EVENTS_FAILURE"

export const getEvents = ({ token }) => async (dispatch) => {
  try {
    dispatch({ type: GET_EVENTS_LOADING })
     const response = await axios.get(
      "https://shootrz-api.herokuapp.com/api/events",
      { headers: { Authorization: token, "Content-Type": "application/json" } }
    )
    const {
      data: { message, events },
      status,
    } = response
    if (status !== 200) {
      dispatch({ type: GET_EVENTS_FAILURE, message })
    } else {
        dispatch({ type: GET_EVENTS_SUCCESS, events })
    }
  } catch (e) {
    dispatch({ type: GET_EVENTS_FAILURE, message: "Error in logging in" })
  }
}
