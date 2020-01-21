import  { combineReducers} from "redux";
import login from "./containers/login/reducer"
import signup from "./containers/signup/reducer"
import events from "./views/events/reducer"
import book from "./views/book/reducer"
import event from "./views/event/reducer"
const  reducers = combineReducers({
    login,
    signup,
    events,
    book,
    event
})
export default reducers;