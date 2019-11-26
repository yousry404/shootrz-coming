import axios from "axios"
import { baseUrl } from "../../services/api"
export const GET_CATEGORIES_SUCCESS = "GET_CATEGORIES_SUCCESS"
export const GET_CATEGORIES_LOADING = "GET_CATEGORIES_LOADING"
export const GET_CATEGORIES_FAILURE = "GET_CATEGORIES_FAILURE"

export const GET_LOCATIONS_SUCCESS = "GET_LOCATIONS_SUCCESS"
export const GET_LOCATIONS_LOADING = "GET_LOCATIONS_LOADING"
export const GET_LOCATIONS_FAILURE = "GET_LOCATIONS_FAILURE"

export const SELECT_CATEGORY = "SELECT_CATEGORY"
export const SELECT_PACKAGE = "SELECT_PACKAGE"
export const SELECT_LOCATION = "SELECT_LOCATION"
export const SELECT_DATE = "SELECT_DATE"
export const CHANGE_ADDRESS = "CHANGE_ADDRESS"
export const selectCategory = ({ id }) => ({
  type: SELECT_CATEGORY,
  id,
})
export const selectPackage = ({ id }) => ({
  type: SELECT_PACKAGE,
  id,
})
export const selectLocation = ({ id }) => ({
  type: SELECT_LOCATION,
  id,
})
export const selectDate = ({ date }) => ({
  type: SELECT_DATE,
  date,
})

export const changeAddress = ({address}) => ({
  type: CHANGE_ADDRESS,
  address
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
    const response = await axios.get(
      `${baseUrl}/locations`
    )
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
