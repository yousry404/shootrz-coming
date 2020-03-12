import axios from "axios"
import { baseUrl } from "../../services/api"
import { navigate } from "gatsby"

import setHours from 'date-fns/setHours'
import setMinutes from 'date-fns/setMinutes'
export const GET_CATEGORIES_SUCCESS = "GET_CATEGORIES_SUCCESS"
export const GET_CATEGORIES_LOADING = "GET_CATEGORIES_LOADING"
export const GET_CATEGORIES_FAILURE = "GET_CATEGORIES_FAILURE"

export const GET_LOCATIONS_SUCCESS = "GET_LOCATIONS_SUCCESS"
export const GET_LOCATIONS_LOADING = "GET_LOCATIONS_LOADING"
export const GET_LOCATIONS_FAILURE = "GET_LOCATIONS_FAILURE"

export const SELECT_CATEGORY = "SELECT_CATEGORY"
export const SELECT_TYPE = "SELECT_TYPE"
export const SELECT_PACKAGE = "SELECT_PACKAGE"
export const SELECT_LOCATION = "SELECT_LOCATION"
export const SELECT_DATE = "SELECT_DATE"
export const CHANGE_ADDRESS = "CHANGE_ADDRESS"
export const SET_ACTIVE_STEP = "SET_ACTIVE_STEP"
export const BOOK_EVENT_LOADING = "BOOK_EVENT_LOADING"
export const BOOK_EVENT_SUCCESS = "BOOK_EVENT_SUCCESS"
export const BOOK_EVENT_FAILURE = "BOOK_EVENT_FAILURE"
export const CHANGE_HOUR = "CHANGE_HOUR"
export const CHANGE_MINUTE = "CHANGE_MINUTE"
export const CHANGE_AM = "CHANGE_AM"
export const ADD_CONFIRM_ERROR = "ADD_CONFIRM_ERROR"
export const RESET_BOOKING_DATA = "RESET_BOOKING_DATA";
export const selectType = ({ shootType }) => ({
  type: SELECT_TYPE,
  shootType,
})
export const selectCategory = ({ category }) => ({
  type: SELECT_CATEGORY,
  category,
})
export const selectPackage = ({ packag }) => ({
  type: SELECT_PACKAGE,
  package: packag,
})
export const selectLocation = ({ location }) => ({
  type: SELECT_LOCATION,
  location,
})
export const selectDate = ({ date }) => ({
  type: SELECT_DATE,
  date,
})
export const changeAddress = ({ address }) => ({
  type: CHANGE_ADDRESS,
  address,
})
export const changeHour = ({ hour }) => ({
  type: CHANGE_HOUR,
  hour,
})
export const changeMintue = ({ minute }) => ({
  type: CHANGE_MINUTE,
  minute,
})
export const changeAm = ({ am }) => ({
  type: CHANGE_AM,
  am,
})
export const addConfirmFormError = ({isError}) => ({
  type: ADD_CONFIRM_ERROR,
  isError
})
export const setActiveStep = ({ activeStep }) => ({
  type: SET_ACTIVE_STEP,
  activeStep
})
export const getCategories = () => async dispatch => {
  try {
    dispatch({ type: GET_CATEGORIES_LOADING })
    const response = await axios.get(`${baseUrl}/categories`)
    const {
      data: { message, categories },
      status,
    } = response
    if (status !== 200) {
      dispatch({ type: GET_CATEGORIES_FAILURE, message })
    } else {
      dispatch({ type: GET_CATEGORIES_SUCCESS, categories })
    }
  } catch (e) {
    dispatch({
      type: GET_CATEGORIES_FAILURE,
      message: "Error in fetching categories",
    })
  }
}
export const getLocations = () => async dispatch => {
  try {
    dispatch({ type: GET_LOCATIONS_LOADING })
    const response = await axios.get(`${baseUrl}/available-locations`)
    const {
      data: { message, locations },
      status,
    } = response
    if (status !== 200) {
      dispatch({ type: GET_LOCATIONS_FAILURE, message })
    } else {
      dispatch({ type: GET_LOCATIONS_SUCCESS, locations })
    }
  } catch (e) {
    dispatch({
      type: GET_LOCATIONS_FAILURE,
      message: "Error in fetching locations",
    })
  }
}

export const bookEvent = ({ token, packageId, locationId, address, date,hour, minute, am, typeId }) => async dispatch => {
  try {
    dispatch({ type: BOOK_EVENT_LOADING })
    date = setHours(date, am === "am" ? hour: hour + 12)
    date = setMinutes(date, parseInt(minute))
    const response = await axios.post(
      `${baseUrl}/make-event`,
      {
        packageId: packageId,
        typeId,
        locationId,
        address,
        date
      },
      { headers: { Authorization: token, "Content-Type": "application/json" } }
    )
    const {
      data: { message, eventId },
      status,
    } = response
    if (status !== 200) {
      dispatch({ type: BOOK_EVENT_FAILURE, message })
    } else {
        dispatch({ type: BOOK_EVENT_SUCCESS })
        navigate(`/app/event/${eventId}`)
    }
  } catch (e) {
    console.log(e)
    dispatch({ type: BOOK_EVENT_FAILURE, message: "error in booking Event" })

  }
}


export const resetBookingData = () => ({ type: RESET_BOOKING_DATA })
