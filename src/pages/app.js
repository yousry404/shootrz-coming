import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Applayout"
import Book from "../components/book"
import Login from "../containers/login"
import Signup from "../containers/signup"
import PrivateRoute from "../components/privateRoute"
// import { Provider } from "react-redux"
// import { createStore, applyMiddleware } from "redux"
// import rootReducer from "../reducers"
// import thunk from "redux-thunk"

const App = () => (
//   <Provider store={createStore(rootReducer, applyMiddleware(thunk))}>
    <Layout>
      <Router>
        <PrivateRoute path="/app/book" component={Book} />
        <Login path="/app/login" />
        <Signup path="/app/signup" />
      </Router>
    </Layout>
//   </Provider>
)
export default App
