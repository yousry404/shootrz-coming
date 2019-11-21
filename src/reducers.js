import  { combineReducers} from "redux";
import login from "./containers/login/reducers"
import signup from "./containers/signup/reducers"
import events from "./views/events/reducer"
import book from "./views/book/reducer"
const  reducers = combineReducers({
    login,
    signup,
    events,
    book
})
export default reducers;