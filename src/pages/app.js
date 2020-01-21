import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Applayout"
import Book from "../views/book"
import Events from "../views/events";
import Login from "../containers/login"
import Signup from "../containers/signup"
import PrivateRoute from "../components/privateRoute"
import SEO from "../components/seo"
import Event from "../views/event"
const App = () => (
  <Layout>
    <SEO title="Shootrz - On-demand Photography" />
    <Router>
      <PrivateRoute path="/app/book" component={Book} />
      <PrivateRoute path="/app/events" component={Events} />
      <PrivateRoute path="/app/event/:uuid" component={Event} />
      <Login path="/app/login" />
      <Signup path="/app/signup" />
    </Router>
  </Layout>
)
export default App
