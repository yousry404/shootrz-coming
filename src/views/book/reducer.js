
import { GET_CATEGORIES_FAILURE, GET_CATEGORIES_LOADING, GET_CATEGORIES_SUCCESS, SELECT_CATEGORY } from "./actions"

const initial_state = {
    loading: true,
    message: "",
    categories: [],
    location: null,
    selectedCategory: null,
    packages: [],
    selectedPackage: null
}


export default (state =initial_state, action) => {
    switch (action.type) {
        case GET_CATEGORIES_SUCCESS:
            return {...state, categories: action.categories, loading: false}
        case GET_CATEGORIES_LOADING:
            return {...state, loading: true}
        case GET_CATEGORIES_FAILURE:
            return {...state, loading: false, message: action.message}
        case SELECT_CATEGORY:
            return {...state, selectedCategory: action.id}
    
        default:
            return state;
    }
}