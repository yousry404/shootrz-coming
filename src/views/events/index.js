import React, { useEffect } from "react"

import { Row, Col, Container } from "reactstrap"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { getEvents } from "./actions"
import { makeStyles } from "@material-ui/core/styles"
import CircularProgress from "@material-ui/core/CircularProgress"
import { Link, navigate } from "gatsby"
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "Center",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}))
const handleClickEvent = (id) => {
  navigate(`/app/event${id}`)
}
const EventsList = ({ events }) =>
  events.length > 0 ? (
    <Row>
      {events.map(event => (

        <Col md={6}>
          <div style={{height: "250px", background: "#ccc"}}></div>
          <div onClick={() => handleClickEvent(event.id)}  className="events-page__event">
          <p className="events-page__event__address">{event.address}</p>
          <div className="events-page__event__count"> 
          
            <p>0</p>
            <p>Photos</p>
          </div>
          {/* <Link to={`/app/event/${event.id}`}>check event</Link> */}
          </div>
        
       

        </Col>

      ))}
    </Row>
  ) : (
    <NoEvents />
  )
const NoEvents = () => {

  return (
    <div className="events-page__header">
      <h1 className="text-center">You don't have Events yet..</h1>
      <Link to="/app/book" className="events-page__header__button">
        Book Now
      </Link>
    </div>
  )
}

const Events = ({ events, getEvents, loading }) => {
  const token = JSON.parse(localStorage.getItem("shootrzToken"))
  const classes = useStyles()

  useEffect(() => {
    getEvents({ token })
  }, [])
  return (
      <div className="events-page">
          {
              loading ? (
                <div className={classes.root}>
                  <CircularProgress color="secondary" />
                </div>
              ) : (
                <Container>
                  <div className="d-flex justify-content-between events-page__header-full">
                    <h1>My Shoots</h1>
                    <Link to="/app/book"><AddCircleOutlineIcon /> New booking</Link>
                  </div>
                  <EventsList events={events} />
                </Container>
              )
          }
      </div>
  )
}
const mapStateToProps = ({ events }) => ({
  loading: events.loading,
  events: events.events,
})
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getEvents,
    },
    dispatch
  )
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Events)
