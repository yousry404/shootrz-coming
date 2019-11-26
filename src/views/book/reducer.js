import {
  GET_CATEGORIES_FAILURE,
  GET_CATEGORIES_LOADING,
  GET_CATEGORIES_SUCCESS,
  SELECT_CATEGORY,
  SELECT_PACKAGE,
  GET_LOCATIONS_SUCCESS,
  GET_LOCATIONS_LOADING,
  GET_LOCATIONS_FAILURE,
  SELECT_LOCATION,
  SELECT_DATE,
  CHANGE_ADDRESS
} from "./actions"

const initial_state = {
  loading: true,
  message: "",
  categories: [],
  locations: [],
  selectedLocation: null,
  address: "",
  selectedCategory: null,
  selectedDate: null,
  packages: [],
  selectedPackage: null,
}

export default (state = initial_state, action) => {
  switch (action.type) {
    case GET_CATEGORIES_SUCCESS:
      return { ...state, categories: action.categories, loading: false }
    case GET_CATEGORIES_LOADING:
      return { ...state, loading: true }
    case GET_CATEGORIES_FAILURE:
      return { ...state, loading: false, message: action.message }
    // case GET_PACKAGES_SUCCESS:
    //   return { ...state, packages: action.packages, loading: false }
    // case GET_PACKAGES_LOADING:
    //   return { ...state, loading: true }
    // case GET_PACKAGES_FAILURE:
    //   return { ...state, loading: false, message: action.message }
    case GET_LOCATIONS_SUCCESS:
      return { ...state, locations: action.locations, loading: false }
    case GET_LOCATIONS_LOADING:
      return { ...state, loading: true }
    case GET_LOCATIONS_FAILURE:
      return { ...state, loading: false, message: action.message }
    case SELECT_CATEGORY:
      return { ...state, selectedCategory: action.id, packages: state.categories.find(category => category.id === action.id ).packages }
    case SELECT_PACKAGE:
      return { ...state, selectedPackage: action.id }
    case SELECT_LOCATION:
      return { ...state, selectedLocation: action.id }
    case CHANGE_ADDRESS:
      return { ...state, address: action.address }
    case SELECT_DATE:
      return { ...state, selectedDate: action.date }

    default:
      return state
  }
}
