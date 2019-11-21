import axios from "axios"

export const GET_CATEGORIES_SUCCESS = "GET_CATEGORIES_SUCCESS"
export const GET_CATEGORIES_LOADING = "GET_CATEGORIES_LOADING"
export const GET_CATEGORIES_FAILURE = "GET_CATEGORIES_FAILURE"
export const GET_PACKAGES_SUCCESS = "GET_PACKAGES_SUCCESS"
export const GET_PACKAGES_LOADING = "GET_PACKAGES_LOADING"
export const GET_PACKAGES_FAILURE = "GET_PACKAGES_FAILURE"

export const SELECT_CATEGORY = 'SELECT_CATEGORY'
export const selectCategory = ({id}) => ({
    type: SELECT_CATEGORY,
    id
})
export const getCategories = () => async (dispatch) => {
  try {
    dispatch({ type: GET_CATEGORIES_LOADING })
     const response = await axios.get(
      "https://shootrz-api.herokuapp.com/api/categories"    )
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
    dispatch({ type: GET_CATEGORIES_FAILURE, message: "Error in fetching categories" })
  }
}

export const getPackage = ({selectedCategory}) => async (dispatch) => {
    try {
      dispatch({ type: GET_PACKAGES_LOADING })
       const response = await axios.get(
        "https://shootrz-api.herokuapp.com/api/packages", { headers: {
            catId: selectedCategory
        }}    )
      const {
        data: { message, packages },
        status,
      } = response
      if (status !== 200) {
        dispatch({ type: GET_PACKAGES_FAILURE, message })
      } else {
          dispatch({ type: GET_PACKAGES_SUCCESS, packages })
      }
    } catch (e) {
      dispatch({ type: GET_PACKAGES_FAILURE, message: "Error in fetching packages" })
    }
  }
  
