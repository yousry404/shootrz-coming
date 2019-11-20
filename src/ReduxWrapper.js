import React from "react"
import { Provider } from "react-redux"
import { createStore, applyMiddleware, compose } from "redux"
import rootReducer from "./reducers"
import thunk from "redux-thunk"

const initStore = () => {
  const windowGlobal = typeof window !== "undefined" && window

  const devtools =
    process.env.NODE_ENV === "development" && windowGlobal.devToolsExtension
      ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f

  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      devtools
    )
  )

  return store
}

export default ({ element }) => (
  <Provider store={initStore()}>{element}</Provider>
)
