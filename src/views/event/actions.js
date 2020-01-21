import axios from "axios"
import { baseUrl } from "../../services/api"
export const GET_EVENT_SUCCESS = "GET_EVENT_SUCCESS"
export const GET_EVENT_LOADING = "GET_EVENT_LOADING"
export const GET_EVENT_FAILURE = "GET_EVENT_FAILURE"

export const getEvent = ({ token, id }) => async (dispatch) => {
  try {
    dispatch({ type: GET_EVENT_LOADING })
     const response = await axios.get(
      `${baseUrl}/event/${id}`,
      { headers: { Authorization: token, "Content-Type": "application/json" } }
    )
    const {
      data: { message, event },
      status,
    } = response
    if (status !== 200) {
      dispatch({ type: GET_EVENT_FAILURE, message })
    } else {
        dispatch({ type: GET_EVENT_SUCCESS, event })
    }
  } catch (e) {
    dispatch({ type: GET_EVENT_FAILURE, message: "Error in fetching event" })
  }
}
