import {
  GET_CATEGORIES_FAILURE,
  GET_CATEGORIES_LOADING,
  GET_CATEGORIES_SUCCESS,
  SELECT_CATEGORY,
  SELECT_TYPE,
  SELECT_PACKAGE,
  GET_LOCATIONS_SUCCESS,
  GET_LOCATIONS_LOADING,
  GET_LOCATIONS_FAILURE,
  SELECT_LOCATION,
  SELECT_DATE,
  CHANGE_ADDRESS,
  BOOK_EVENT_LOADING,
  BOOK_EVENT_FAILURE,
  BOOK_EVENT_SUCCESS,
  SET_ACTIVE_STEP,
  CHANGE_AM,
  CHANGE_MINUTE,
  CHANGE_HOUR,
  ADD_CONFIRM_ERROR
} from "./actions"

const initial_state = {
  loading: false,
  formLoading: false,
  message: "",
  categories: [],
  locations: [],
  selectedLocation: null,
  address: "",
  selectedCategory: {},
  selectedType: null,
  selectedDate: new Date(),
  hour: 1,
  minute: '00',
  am: 'am', 
  packages: [],
  selectedPackage: {},
  formSubmitted: false,
  error: false,
  activeStep: 0,
  confirmFormError: false
}

export default (state = initial_state, action) => {
  switch (action.type) {
    case GET_CATEGORIES_SUCCESS:
      return { ...state, categories: action.categories, loading: false }
    case GET_CATEGORIES_LOADING:
      return { ...state, loading: true }
    case GET_CATEGORIES_FAILURE:
      return { ...state, loading: false, message: action.message }
    case GET_LOCATIONS_SUCCESS:
      return { ...state, locations: action.locations, loading: false }
    case GET_LOCATIONS_LOADING:
      return { ...state, loading: true }
    case GET_LOCATIONS_FAILURE:
      return { ...state, loading: false, message: action.message }
    case SELECT_TYPE:
      return { ...state, selectedType: action.shootType, formSubmitted: false }
    case ADD_CONFIRM_ERROR:
      return { ...state, confirmFormError: action.isError }
    case SELECT_CATEGORY:
      return {
        ...state,
        selectedCategory: action.category,
        packages: state.categories.find(category => category.id === action.category.id)
          .packages,
        formSubmitted: false,
      }
    case SELECT_PACKAGE:
      return { ...state, selectedPackage: action.package, formSubmitted: false }
    case SELECT_LOCATION:
      return { ...state, selectedLocation: action.location, formSubmitted: false }
    case CHANGE_HOUR:
      return { ...state, hour: action.hour, formSubmitted: false }
    case CHANGE_MINUTE:
      return { ...state, minute: action.minute, formSubmitted: false }
    case CHANGE_AM:
      return { ...state, am: action.am, formSubmitted: false }
    case CHANGE_ADDRESS:
      return { ...state, address: action.address, formSubmitted: false }
    case SET_ACTIVE_STEP:
      return { ...state, activeStep: action.activeStep }
    case SELECT_DATE:
      return { ...state, selectedDate: action.date, formSubmitted: false }

    case BOOK_EVENT_LOADING:
      return { ...state, formLoading: true }
    case BOOK_EVENT_FAILURE:
      return {
        ...state,
        formLoading: false,
        message: action.message,
        error: true,
        formSubmitted: true,
      }
    case BOOK_EVENT_SUCCESS:
      return {
        ...state,
        formLoading: false,
        message: action.message,
        formSubmitted: true,
      }
    default:
      return state
  }
}
