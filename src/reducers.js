import  { combineReducers} from "redux";
import login from "./containers/login/reducers"
import signup from "./containers/signup/reducers"
const reducers = combineReducers({
    login,
    signup
})
export default reducers;